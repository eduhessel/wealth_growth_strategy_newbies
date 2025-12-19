"use client";

import React, { useState } from 'react';
import { phases } from './data/phases';
import { Header } from './components/Header';
import { WealthSimulator } from './components/WealthSimulator';
import { PhaseCard } from './components/PhaseCard';
import { CTA } from './components/CTA';

const WealthGrowthStrategy = () => {
  const [currentWealth, setCurrentWealth] = useState(15000);
  const [selectedPhase, setSelectedPhase] = useState<number | null>(1);
  const [selectedMonthlyAmount, setSelectedMonthlyAmount] = useState(2000);

  const getCurrentPhase = () => {
    return phases.find(p => currentWealth >= p.minWealth && currentWealth <= p.maxWealth) || phases[0];
  };

  const currentPhase = getCurrentPhase();

  const milestones = [
    { wealth: 30000, label: "Reservas consolidadas", achieved: currentWealth >= 30000 },
    { wealth: 50000, label: "Renda passiva R$ 200/mês", achieved: currentWealth >= 50000 },
    { wealth: 100000, label: "6 dígitos alcançados", achieved: currentWealth >= 100000 },
    { wealth: 200000, label: "Renda passiva R$ 1k/mês", achieved: currentWealth >= 200000 },
    { wealth: 500000, label: "Meio milhão", achieved: currentWealth >= 500000 },
    { wealth: 1000000, label: "INDEPENDÊNCIA FINANCEIRA", achieved: currentWealth >= 1000000 }
  ];

  const getNextMilestone = () => {
    const next = milestones.find(m => !m.achieved);
    if (!next) return null;
    const monthsToGoal = Math.ceil((next.wealth - currentWealth) / 2000);
    return { ...next, monthsToGoal };
  };

  const nextMilestone = getNextMilestone();

  return (
    <div className="w-full mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <Header />

        <WealthSimulator
          currentWealth={currentWealth}
          setCurrentWealth={setCurrentWealth}
          currentPhase={currentPhase}
          milestones={milestones}
          nextMilestone={nextMilestone}
        />

        <div className="space-y-4">
          {phases.map((phase) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              isCurrentPhase={phase.id === currentPhase.id}
              isExpanded={selectedPhase === phase.id}
              onToggle={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
              selectedMonthlyAmount={selectedMonthlyAmount}
              setSelectedMonthlyAmount={setSelectedMonthlyAmount}
            />
          ))}
        </div>

        <CTA />
      </div>
    </div>
  );
};

export default WealthGrowthStrategy;