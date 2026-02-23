import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PLC Oven System',
  description: 'Sistema de Monitorización de Horno Industrial',
  appearance: 'dark',
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'PLC Oven System',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Guía', link: '/getting-started/installation' },
      { text: 'Arquitectura', link: '/architecture/overview' },
      { text: 'API', link: '/api/websocket' },
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Introducción',
          items: [
            { text: 'Instalación', link: '/getting-started/installation' },
            { text: 'Configuración', link: '/getting-started/configuration' },
          ]
        }
      ],
      '/architecture/': [
        {
          text: 'Arquitectura',
          items: [
            { text: 'Visión General', link: '/architecture/overview' },
            { text: 'Componentes', link: '/architecture/components' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            { text: 'WebSocket', link: '/api/websocket' },
            { text: 'REST', link: '/api/rest' },
          ]
        }
      ],
      '/components/': [
        {
          text: 'Componentes',
          items: [
            { text: 'Onboarding', link: '/components/onboarding' },
            { text: 'OvenScene', link: '/components/ovenscene' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024'
    }
  }
})
