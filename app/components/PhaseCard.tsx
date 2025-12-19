import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Phase } from '../types';

interface PhaseCardProps {
    phase: Phase;
    isCurrentPhase: boolean;
    isExpanded: boolean;
    onToggle: () => void;
    selectedMonthlyAmount: number;
    setSelectedMonthlyAmount: (amount: number) => void;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({
    phase,
    isCurrentPhase,
    isExpanded,
    onToggle,
    selectedMonthlyAmount,
    setSelectedMonthlyAmount,
}) => {
    const PhaseIcon = phase.icon;

    return (
        <div
            className={`bg-white rounded-xl shadow-xl overflow-hidden transition-all ${isCurrentPhase ? 'ring-4 ring-indigo-400 ring-offset-2' : ''
                }`}
        >
            {/* Phase Header */}
            <div className={`bg-gradient-to-r ${phase.color} p-6 text-white cursor-pointer`}
                onClick={onToggle}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <PhaseIcon size={40} />
                        <div>
                            <div className="text-sm opacity-90 font-semibold">{phase.range}</div>
                            <h3 className="text-2xl font-bold">{phase.title}</h3>
                            <div className="text-sm opacity-90">{phase.subtitle}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {isCurrentPhase && (
                            <div className="bg-white text-indigo-600 px-4 py-2 rounded-full font-bold text-sm">
                                VOCÊ ESTÁ AQUI
                            </div>
                        )}
                        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                </div>
            </div>

            {/* Phase Content */}
            {isExpanded && (
                <div className="p-6 bg-gray-50">
                    {/* Allocation Chart */}
                    <div className="bg-white rounded-lg p-4 mb-6">
                        <h4 className="font-bold text-gray-800 mb-3">📊 Alocação Ideal</h4>
                        <div className="flex gap-1 h-10 rounded-lg overflow-hidden mb-2">
                            <div
                                className="bg-blue-500 flex items-center justify-center text-white text-sm font-bold"
                                style={{ width: `${phase.allocation.rendaFixa}%` }}
                            >
                                {phase.allocation.rendaFixa}%
                            </div>
                            <div
                                className="bg-green-500 flex items-center justify-center text-white text-sm font-bold"
                                style={{ width: `${phase.allocation.acoesNacionais}%` }}
                            >
                                {phase.allocation.acoesNacionais}%
                            </div>
                            <div
                                className="bg-orange-500 flex items-center justify-center text-white text-sm font-bold"
                                style={{ width: `${phase.allocation.fiis}%` }}
                            >
                                {phase.allocation.fiis}%
                            </div>
                            <div
                                className="bg-purple-500 flex items-center justify-center text-white text-sm font-bold"
                                style={{ width: `${phase.allocation.internacional}%` }}
                            >
                                {phase.allocation.internacional}%
                            </div>
                            {phase.allocation.alternativos && (
                                <div
                                    className="bg-red-500 flex items-center justify-center text-white text-sm font-bold"
                                    style={{ width: `${phase.allocation.alternativos}%` }}
                                >
                                    {phase.allocation.alternativos}%
                                </div>
                            )}
                        </div>
                        <div className="flex gap-4 flex-wrap text-xs text-gray-600">
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                                Renda Fixa
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-green-500 rounded"></div>
                                Ações BR
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-orange-500 rounded"></div>
                                FIIs
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                                Internacional
                            </div>
                            {phase.allocation.alternativos && (
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                                    Alternativos
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Goals */}
                    <div className="bg-white rounded-lg p-4 mb-6">
                        <h4 className="font-bold text-gray-800 mb-3">🎯 Objetivos da Fase</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {phase.goals.map((goal, idx) => (
                                <div key={idx} className="text-sm text-gray-700 bg-blue-50 p-3 rounded border border-blue-200">
                                    {goal}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Monthly Strategy */}
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border-2 border-indigo-200 mb-6">
                        <h4 className="font-bold text-indigo-800 mb-4 text-lg">
                            💵 Estratégia de Aportes Mensais
                        </h4>

                        {/* Monthly Amount Selector */}
                        {phase.monthlyStrategies && (
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Quanto você pode investir por mês?
                                </label>
                                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                                    {Object.keys(phase.monthlyStrategies).map((amount) => (
                                        <button
                                            key={amount}
                                            onClick={() => setSelectedMonthlyAmount(parseInt(amount))}
                                            className={`px-4 py-3 rounded-lg font-bold text-sm transition-all ${selectedMonthlyAmount === parseInt(amount)
                                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                                : 'bg-white text-gray-700 hover:bg-indigo-100 border-2 border-gray-200'
                                                }`}
                                        >
                                            R$ {parseInt(amount).toLocaleString('pt-BR')}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {typeof phase.monthlyStrategy.amount === 'number' ? (
                            <>
                                <div className="text-3xl font-bold text-indigo-600 mb-4">
                                    R$ {selectedMonthlyAmount.toLocaleString('pt-BR')}/mês
                                </div>
                                <div className="space-y-3">
                                    {(phase.monthlyStrategies?.[selectedMonthlyAmount] || phase.monthlyStrategy.distribution).map((dist, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded-lg shadow">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="font-semibold text-gray-800">{dist.target}</div>
                                                <div className="font-bold text-indigo-600 text-lg">R$ {dist.value}</div>
                                            </div>
                                            <div className="text-xs text-gray-600">{dist.detail}</div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="space-y-3">
                                <div className="text-xl font-bold text-indigo-800 mb-3">
                                    {phase.monthlyStrategy.amount}
                                </div>
                                {phase.monthlyStrategy.distribution.map((dist, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-lg shadow">
                                        <div className="font-semibold text-gray-800 mb-1">{dist.target}</div>
                                        <div className="text-lg text-indigo-600 font-bold mb-1">{dist.value}</div>
                                        <div className="text-xs text-gray-600">{dist.detail}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Investments Detail */}
                    <div className="space-y-4 mb-6">
                        <h4 className="font-bold text-gray-800 text-lg">📈 Onde Investir</h4>
                        {phase.investments.map((inv, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                                <h5 className="font-bold text-indigo-700 mb-3">{inv.category}</h5>
                                <div className="space-y-2">
                                    {inv.assets.map((asset, assetIdx) => (
                                        <div key={assetIdx} className="bg-gray-50 p-3 rounded">
                                            <div className="flex justify-between items-start mb-1">
                                                <div className="font-semibold text-gray-800 text-sm">{asset.name}</div>
                                                <div className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                                                    {asset.allocation}
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-600">{asset.reason}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tips */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border-2 border-yellow-300">
                        <h4 className="font-bold text-orange-800 mb-3">💡 Dicas para Esta Fase</h4>
                        <div className="space-y-2">
                            {phase.tips.map((tip, idx) => (
                                <div key={idx} className="text-sm text-gray-700 bg-white p-2 rounded">
                                    {tip}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
