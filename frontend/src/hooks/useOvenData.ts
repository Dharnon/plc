'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { OvenData, ServerMessage, ClientMessage } from '@/lib/types';

interface UseOvenDataReturn {
  data: OvenData | null;
  isConnected: boolean;
  clientCount: number;
  error: string | null;
  sendMessage: (message: ClientMessage) => void;
  setServerUrl: (url: string) => void;
  serverUrl: string;
}

export function useOvenData(initialUrl: string = 'ws://localhost:8080'): UseOvenDataReturn {
  const [data, setData] = useState<OvenData | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [clientCount, setClientCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [serverUrl, setServerUrl] = useState(initialUrl);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      return;
    }

    try {
      const ws = new WebSocket(serverUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnected(true);
        setError(null);
        console.log('[Oven] Conectado al servidor');
      };

      ws.onmessage = (event) => {
        try {
          const message: ServerMessage = JSON.parse(event.data);
          
          if (message.type === 'data') {
            setData(message.payload as OvenData);
          } else if (message.type === 'status') {
            const status = message.payload as { connected: boolean; clientCount: number };
            setIsConnected(status.connected);
            setClientCount(status.clientCount);
          } else if (message.type === 'error') {
            setError(message.payload as string);
          }
        } catch (err) {
          console.error('[Oven] Error al parsear mensaje:', err);
        }
      };

      ws.onclose = () => {
        setIsConnected(false);
        console.log('[Oven] Desconectado del servidor');
        
        reconnectTimeoutRef.current = setTimeout(() => {
          console.log('[Oven] Intentando reconectar...');
          connect();
        }, 3000);
      };

      ws.onerror = (err) => {
        console.error('[Oven] Error de WebSocket:', err);
        setError('Error de conexión');
      };
    } catch (err) {
      console.error('[Oven] Error al crear WebSocket:', err);
      setError('No se pudo conectar');
    }
  }, [serverUrl]);

  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
    }
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
  }, []);

  const sendMessage = useCallback((message: ClientMessage) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(message));
    }
  }, []);

  const handleSetServerUrl = useCallback((url: string) => {
    disconnect();
    setServerUrl(url);
  }, [disconnect]);

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  return {
    data,
    isConnected,
    clientCount,
    error,
    sendMessage,
    setServerUrl: handleSetServerUrl,
    serverUrl
  };
}
