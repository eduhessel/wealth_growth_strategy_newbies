import React from 'react';
import { InvestmentCategory } from './InvestmentCategory';
import { MonthlyStrategy } from './MonthlyStrategy';
import { MonthlyDistribution } from './MonthlyDistribution';

export interface Phase {
    id: number;
    range: string;
    title: string;
    subtitle: string;
    minWealth: number;
    maxWealth: number;
    color: string;
    icon: React.ElementType;
    allocation: {
        rendaFixa: number;
        acoesNacionais: number;
        fiis: number;
        internacional: number;
        alternativos?: number;
    };
    goals: string[];
    investments: InvestmentCategory[];
    monthlyStrategy: MonthlyStrategy;
    monthlyStrategies?: Record<number, MonthlyDistribution[]>;
    tips: string[];
}
