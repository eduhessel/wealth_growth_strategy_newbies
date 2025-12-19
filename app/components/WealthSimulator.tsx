import React from 'react';
import { Info, Lock, Unlock } from 'lucide-react';
import { Phase } from '../types';

interface WealthSimulatorProps {
    currentWealth: number;
    setCurrentWealth: (value: number) => void;
    currentPhase: Phase;
    milestones: {
        wealth: number;
        label: string;
        achieved: boolean;
    }[];
    nextMilestone: {
        wealth: number;
        label: string;
        achieved: boolean;
        monthsToGoal: number;
    } | null;
}

export const WealthSimulator: React.FC<WealthSimulatorProps> = ({
    currentWealth,
    setCurrentWealth,
    currentPhase,
    milestones,
    nextMilestone,
}) => {
    return (
        <div className="bg-white rounded-xl shadow-xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                💰 Ajuste Seu Patrimônio Atual
            </h2>
            <div className="mb-4 flex items-center gap-2 justify-center">
                <div className="text-center flex items-center gap-2 mb-2 justify-center">
                    <Info className="text-gray-600" size={20} />
                    <p className="text-gray-600 text-center">
                        Arraste, clique ou pressione a barra abaixo para ajustar seu patrimônio atual.
                    </p>
                </div>
            </div>
            <div className="mb-4">
                <input
                    type="range"
                    min="0"
                    max="1200000"
                    step="5000"
                    value={currentWealth}
                    onChange={(e) => setCurrentWealth(parseInt(e.target.value))}
                    className="w-full h-4 bg-gradient-to-r from-blue-200 via-purple-200 to-yellow-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                        background: `linear-gradient(to right, 
            #3b82f6 0%, 
            #22c55e ${(30000 / 1200000) * 100}%, 
            #a855f7 ${(100000 / 1200000) * 100}%, 
            #f97316 ${(300000 / 1200000) * 100}%, 
            #eab308 ${(1000000 / 1200000) * 100}%, 
            #eab308 100%)`
                    }}
                />
            </div>
            <div className="text-center mb-6">
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    R$ {currentWealth.toLocaleString('pt-BR')}
                </div>
                <div className="text-xl text-gray-600 mb-4">
                    Você está na <span className="font-bold text-indigo-600">{currentPhase.title}</span>
                </div>

                {nextMilestone && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-4 inline-block">
                        <div className="text-sm text-gray-600 mb-1">🎯 Próxima Meta</div>
                        <div className="text-lg font-bold text-green-700">
                            R$ {nextMilestone.wealth.toLocaleString('pt-BR')} - {nextMilestone.label}
                        </div>
                        <div className="text-sm text-green-600 mt-1">
                            Faltam ~{nextMilestone.monthsToGoal} meses investindo R$ 2.000/mês
                        </div>
                    </div>
                )}
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {milestones.map((milestone) => (
                    <div
                        key={milestone.wealth}
                        className={`p-4 rounded-lg border-2 transition-all ${milestone.achieved
                            ? 'bg-green-50 border-green-400 shadow-md'
                            : 'bg-gray-50 border-gray-300'
                            }`}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            {milestone.achieved ? (
                                <Unlock className="text-green-600" size={20} />
                            ) : (
                                <Lock className="text-gray-400" size={20} />
                            )}
                            <div className={`text-sm font-bold ${milestone.achieved ? 'text-green-700' : 'text-gray-500'}`}>
                                R$ {(milestone.wealth / 1000).toFixed(0)}k
                            </div>
                        </div>
                        <div className="text-xs text-gray-600">{milestone.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
