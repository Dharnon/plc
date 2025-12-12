import { useState } from 'react';
import { ArrowRightLeft, Calculator } from 'lucide-react';

export function UnitConverter() {
    // State for input values
    const [usgpm, setUsgpm] = useState<string>('');
    const [ft, setFt] = useState<string>('');
    const [hp, setHp] = useState<string>('');
    const [inches, setInches] = useState<string>('');

    // Conversions
    // 1 US gpm = 0.227125 m3/h
    const m3h = usgpm ? (parseFloat(usgpm) * 0.227125).toFixed(2) : '-';

    // 1 ft = 0.3048 m
    const meters = ft ? (parseFloat(ft) * 0.3048).toFixed(2) : '-';

    // 1 hp = 0.7457 kW
    const kw = hp ? (parseFloat(hp) * 0.7457).toFixed(2) : '-';

    // 1 inch = 25.4 mm
    const mm = inches ? (parseFloat(inches) * 25.4).toFixed(2) : '-';

    return (
        <div className="bg-slate-900/50 border border-white/5 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <Calculator className="w-4 h-4" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Conversor de Unidades</h3>
            </div>

            <div className="space-y-2">
                {/* Flow: USGPM -> m3/h */}
                <ConversionRow
                    label="Caudal"
                    input={usgpm}
                    setInput={setUsgpm}
                    unitIn="Usgpm"
                    valueOut={m3h}
                    unitOut="m³/h"
                />

                {/* Head: ft -> m */}
                <ConversionRow
                    label="TDH"
                    input={ft}
                    setInput={setFt}
                    unitIn="ft"
                    valueOut={meters}
                    unitOut="m"
                />

                {/* Power: hp -> kW */}
                <ConversionRow
                    label="Potencia"
                    input={hp}
                    setInput={setHp}
                    unitIn="hp"
                    valueOut={kw}
                    unitOut="kW"
                />

                {/* Diameter: in -> mm */}
                <ConversionRow
                    label="Diámetro"
                    input={inches}
                    setInput={setInches}
                    unitIn="in"
                    valueOut={mm}
                    unitOut="mm"
                />
            </div>
        </div>
    );
}

function ConversionRow({ label, input, setInput, unitIn, valueOut, unitOut }: any) {
    return (
        <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-center text-sm">
            <div className="relative">
                <input
                    type="number"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full bg-slate-800 border border-white/10 rounded px-2 py-1 text-right text-white focus:border-cyan-500 outline-none font-mono text-xs"
                    placeholder="0"
                />
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 uppercase">{label}</span>
            </div>

            <div className="text-slate-500 px-1 text-xs">{unitIn} <ArrowRightLeft className="w-3 h-3 inline mx-1" /></div>

            <div className="flex items-center justify-between bg-slate-800/30 border border-white/5 rounded px-2 py-1">
                <span className="font-mono text-cyan-400 text-xs">{valueOut}</span>
                <span className="text-[10px] text-slate-500 ml-1">{unitOut}</span>
            </div>
        </div>
    );
}
