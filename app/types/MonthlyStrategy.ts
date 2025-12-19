import { MonthlyDistribution } from './MonthlyDistribution';

export interface MonthlyStrategy {
    amount: number | string;
    distribution: MonthlyDistribution[];
}
