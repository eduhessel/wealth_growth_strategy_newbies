import { TrendingUp, Shield, Briefcase, Target, Lock } from 'lucide-react';
import { Phase } from '../types';

export const phases: Phase[] = [
    {
        id: 1,
        range: "R$ 0 - 30k",
        title: "FASE 1: FUNDAÇÃO",
        subtitle: "Construindo a Base Sólida",
        minWealth: 0,
        maxWealth: 30000,
        color: "from-blue-500 to-blue-600",
        icon: Shield,
        allocation: {
            rendaFixa: 45,
            acoesNacionais: 30,
            fiis: 15,
            internacional: 10
        },
        goals: [
            "✅ Reserva emergência completa (R$ 12-15k)",
            "✅ Reserva para imóvel consolidada",
            "✅ Estrutura básica de diversificação",
            "✅ Hábito de aportes mensais estabelecido"
        ],
        investments: [
            {
                category: "Renda Fixa (45%)",
                assets: [
                    { name: "Tesouro Selic 2027", allocation: "15%", reason: "Liquidez total, reserva emergência" },
                    { name: "CDB 100% CDI Liquidez Diária", allocation: "10%", reason: "Emergência imediata" },
                    { name: "Tesouro IPCA+ 2035", allocation: "12%", reason: "Proteção inflação longo prazo" },
                    { name: "LCI/LCA 105%+ CDI", allocation: "8%", reason: "Isenção IR, rentabilidade" }
                ]
            },
            {
                category: "Ações Brasil (30%)",
                assets: [
                    { name: "ITUB4, BBDC4", allocation: "6%", reason: "Financeiro sólido, dividendos" },
                    { name: "PETR4", allocation: "4%", reason: "Commodity, dividendos robustos" },
                    { name: "WEGE3", allocation: "4%", reason: "Crescimento consistente, exportadora" },
                    { name: "TAEE11, CPFE3", allocation: "4%", reason: "Utilities, previsibilidade" },
                    { name: "KLBN11", allocation: "3%", reason: "Celulose, hedge cambial" },
                    { name: "Vale3, Suzano", allocation: "4%", reason: "Commodities diversificação" },
                    { name: "CIEL3, PINE4 (crescimento)", allocation: "5%", reason: "Potencial valorização" }
                ]
            },
            {
                category: "FIIs (15%)",
                assets: [
                    { name: "HGRU11", allocation: "5%", reason: "Galpões logísticos, qualidade" },
                    { name: "MXRF11", allocation: "5%", reason: "Multi-ativos, gestão ativa" },
                    { name: "XPML11", allocation: "3%", reason: "Logística, exposição e-commerce" },
                    { name: "VISC11 ou KNRI11", allocation: "2%", reason: "Tijolo qualidade, diversificação" }
                ]
            },
            {
                category: "Internacional (10%)",
                assets: [
                    { name: "IVVB11", allocation: "6%", reason: "S&P 500, 500 maiores empresas USA" },
                    { name: "NVDC34, INBR32", allocation: "4%", reason: "Tech exposure, crescimento" }
                ]
            }
        ],
        monthlyStrategy: {
            amount: 2000,
            distribution: [
                { target: "Renda Fixa (50%)", value: 1000, detail: "Consolidar reservas - Tesouro Selic + CDB" },
                { target: "Ações (30%)", value: 600, detail: "Construir posições blue chips - ITUB4, WEGE3, PETR4" },
                { target: "FIIs (15%)", value: 300, detail: "Iniciar renda passiva - HGRU11, MXRF11" },
                { target: "Internacional (5%)", value: 100, detail: "Começar diversificação - IVVB11" }
            ]
        },
        monthlyStrategies: {
            500: [
                { target: "Renda Fixa (50%)", value: 250, detail: "Tesouro Selic ou CDB" },
                { target: "Ações (30%)", value: 150, detail: "ITUB4 ou BBDC4" },
                { target: "FIIs (15%)", value: 75, detail: "HGRU11 ou MXRF11" },
                { target: "Internacional (5%)", value: 25, detail: "Poupar para IVVB11" }
            ],
            1000: [
                { target: "Renda Fixa (50%)", value: 500, detail: "Tesouro Selic + CDB" },
                { target: "Ações (30%)", value: 300, detail: "Alternar ITUB4, WEGE3" },
                { target: "FIIs (15%)", value: 150, detail: "HGRU11 ou MXRF11" },
                { target: "Internacional (5%)", value: 50, detail: "Poupar para IVVB11" }
            ],
            1500: [
                { target: "Renda Fixa (50%)", value: 750, detail: "Tesouro Selic + CDB + IPCA+" },
                { target: "Ações (30%)", value: 450, detail: "ITUB4, WEGE3, PETR4" },
                { target: "FIIs (15%)", value: 225, detail: "HGRU11 + MXRF11" },
                { target: "Internacional (5%)", value: 75, detail: "IVVB11" }
            ],
            2000: [
                { target: "Renda Fixa (50%)", value: 1000, detail: "Tesouro Selic + CDB + IPCA+" },
                { target: "Ações (30%)", value: 600, detail: "ITUB4, WEGE3, PETR4, BBDC4" },
                { target: "FIIs (15%)", value: 300, detail: "HGRU11 + MXRF11 + XPML11" },
                { target: "Internacional (5%)", value: 100, detail: "IVVB11" }
            ],
            2500: [
                { target: "Renda Fixa (50%)", value: 1250, detail: "Tesouro completo + CDB + LCI" },
                { target: "Ações (30%)", value: 750, detail: "Diversificar 4-5 ações blue chips" },
                { target: "FIIs (15%)", value: 375, detail: "3-4 FIIs diversificados" },
                { target: "Internacional (5%)", value: 125, detail: "IVVB11 + começar BDR" }
            ],
            3000: [
                { target: "Renda Fixa (50%)", value: 1500, detail: "Tesouro + CDB + LCI + Debêntures" },
                { target: "Ações (30%)", value: 900, detail: "5-6 ações + começar small caps" },
                { target: "FIIs (15%)", value: 450, detail: "4-5 FIIs variados" },
                { target: "Internacional (5%)", value: 150, detail: "IVVB11 + 1 BDR" }
            ]
        },
        tips: [
            "💡 Foque em construir as reservas primeiro (emergência + imóvel)",
            "💡 Não persiga 'modinha' - mantenha disciplina nos aportes",
            "💡 Estude 1h/semana sobre investimentos",
            "💡 Rebalanceie a cada 3 meses"
        ]
    },
    {
        id: 2,
        range: "R$ 30k - 100k",
        title: "FASE 2: CONSOLIDAÇÃO",
        subtitle: "Acelerando o Crescimento",
        minWealth: 30000,
        maxWealth: 100000,
        color: "from-green-500 to-green-600",
        icon: TrendingUp,
        allocation: {
            rendaFixa: 35,
            acoesNacionais: 35,
            fiis: 15,
            internacional: 15
        },
        goals: [
            "🎯 Acelerar acúmulo patrimonial",
            "🎯 Aumentar exposição a crescimento",
            "🎯 Diversificar internacionalmente",
            "🎯 Renda passiva mensal consistente"
        ],
        investments: [
            {
                category: "Renda Fixa (35%)",
                assets: [
                    { name: "Tesouro Selic (Emergência)", allocation: "10%", reason: "Manter liquidez" },
                    { name: "Tesouro IPCA+ 2035/2045", allocation: "15%", reason: "Aposentadoria, proteção inflação" },
                    { name: "CDB 110%+ CDI (médios bancos)", allocation: "5%", reason: "Melhor rentabilidade" },
                    { name: "Debêntures Incentivadas", allocation: "5%", reason: "Isenção IR, infraestrutura" }
                ]
            },
            {
                category: "Ações Brasil (35%)",
                assets: [
                    { name: "Blue Chips (ITUB4, BBDC4, WEGE3)", allocation: "15%", reason: "Núcleo sólido do portfólio" },
                    { name: "Utilities (TAEE11, ENBR3, SAPR11)", allocation: "6%", reason: "Dividendos previsíveis" },
                    { name: "Crescimento (MGLU3, PETZ3, LWSA3)", allocation: "8%", reason: "Potencial alta valorização" },
                    { name: "Commodities (VALE3, SUZB3)", allocation: "6%", reason: "Hedge inflação, exportação" }
                ]
            },
            {
                category: "FIIs (15%)",
                assets: [
                    { name: "Logística (HGRU11, XPML11, VILG11)", allocation: "6%", reason: "E-commerce, crescimento" },
                    { name: "Tijolo (KNRI11, HGLG11)", allocation: "4%", reason: "Estabilidade, contratos longos" },
                    { name: "Papel (MXRF11, BTLG11)", allocation: "3%", reason: "Diversificação, liquidez" },
                    { name: "Agro (AGCX11, GGRC11)", allocation: "2%", reason: "Descorrelação, proteção" }
                ]
            },
            {
                category: "Internacional (15%)",
                assets: [
                    { name: "IVVB11 (S&P 500)", allocation: "8%", reason: "Core internacional" },
                    { name: "WRLD11 (Mercados globais)", allocation: "4%", reason: "Diversificação geográfica" },
                    { name: "BDRs Tech (NVDC34, MSFT34, GOGL34)", allocation: "3%", reason: "Crescimento tech" }
                ]
            }
        ],
        monthlyStrategy: {
            amount: 2500,
            distribution: [
                { target: "Renda Fixa (30%)", value: 750, detail: "Tesouro IPCA+ 2035, CDB 110%+ CDI" },
                { target: "Ações (40%)", value: 1000, detail: "Alternar: Blue chips, crescimento, utilities" },
                { target: "FIIs (15%)", value: 375, detail: "Diversificar: logística + tijolo + papel" },
                { target: "Internacional (15%)", value: 375, detail: "IVVB11 + WRLD11 mensalmente" }
            ]
        },
        monthlyStrategies: {
            500: [
                { target: "Renda Fixa (30%)", value: 150, detail: "Tesouro IPCA+ ou CDB" },
                { target: "Ações (40%)", value: 200, detail: "1 blue chip por mês" },
                { target: "FIIs (15%)", value: 75, detail: "Poupar 2 meses para 1 FII" },
                { target: "Internacional (15%)", value: 75, detail: "Poupar para IVVB11" }
            ],
            1000: [
                { target: "Renda Fixa (30%)", value: 300, detail: "Tesouro IPCA+ + CDB" },
                { target: "Ações (40%)", value: 400, detail: "Alternar 2 ações" },
                { target: "FIIs (15%)", value: 150, detail: "1 FII por mês" },
                { target: "Internacional (15%)", value: 150, detail: "IVVB11" }
            ],
            1500: [
                { target: "Renda Fixa (30%)", value: 450, detail: "Tesouro IPCA+ + CDB 110%" },
                { target: "Ações (40%)", value: 600, detail: "2-3 ações variadas" },
                { target: "FIIs (15%)", value: 225, detail: "1-2 FIIs" },
                { target: "Internacional (15%)", value: 225, detail: "IVVB11 + poupar BDR" }
            ],
            2000: [
                { target: "Renda Fixa (30%)", value: 600, detail: "Tesouro IPCA+ + CDB + LCI" },
                { target: "Ações (40%)", value: 800, detail: "3-4 ações diversificadas" },
                { target: "FIIs (15%)", value: 300, detail: "2 FIIs diferentes" },
                { target: "Internacional (15%)", value: 300, detail: "IVVB11 + 1 BDR" }
            ],
            2500: [
                { target: "Renda Fixa (30%)", value: 750, detail: "Tesouro IPCA+ + CDB 110% + Debêntures" },
                { target: "Ações (40%)", value: 1000, detail: "4-5 ações + começar small caps" },
                { target: "FIIs (15%)", value: 375, detail: "2-3 FIIs diversificados" },
                { target: "Internacional (15%)", value: 375, detail: "IVVB11 + WRLD11" }
            ],
            3000: [
                { target: "Renda Fixa (30%)", value: 900, detail: "Portfolio completo RF + Debêntures" },
                { target: "Ações (40%)", value: 1200, detail: "5-6 ações + growth" },
                { target: "FIIs (15%)", value: 450, detail: "3-4 FIIs setores variados" },
                { target: "Internacional (15%)", value: 450, detail: "IVVB11 + WRLD11 + BDR" }
            ],
            4000: [
                { target: "Renda Fixa (30%)", value: 1200, detail: "Diversificação completa RF" },
                { target: "Ações (40%)", value: 1600, detail: "Portfolio robusto 8+ ações" },
                { target: "FIIs (15%)", value: 600, detail: "4-5 FIIs" },
                { target: "Internacional (15%)", value: 600, detail: "ETFs + múltiplos BDRs" }
            ],
            5000: [
                { target: "Renda Fixa (30%)", value: 1500, detail: "RF completa + CRI/CRA" },
                { target: "Ações (40%)", value: 2000, detail: "10+ ações diversificadas" },
                { target: "FIIs (15%)", value: 750, detail: "5-6 FIIs setores diversos" },
                { target: "Internacional (15%)", value: 750, detail: "ETFs + BDRs + REITs" }
            ]
        },
        tips: [
            "📊 Iniciar estratégia de dividendos mensais",
            "🌎 Aumentar exposição internacional para 15%",
            "🏢 Adicionar FIIs de agronegócio (diversificação)",
            "💡 Começar a estudar opções (proteção)"
        ]
    },
    {
        id: 3,
        range: "R$ 100k - 300k",
        title: "FASE 3: SOFISTICAÇÃO",
        subtitle: "Otimização e Estratégias Avançadas",
        minWealth: 100000,
        maxWealth: 300000,
        color: "from-purple-500 to-purple-600",
        icon: Briefcase,
        allocation: {
            rendaFixa: 30,
            acoesNacionais: 35,
            fiis: 15,
            internacional: 20
        },
        goals: [
            "🚀 Otimizar eficiência tributária",
            "🚀 Diversificar classes de ativos",
            "🚀 Renda passiva significativa (R$ 1k+/mês)",
            "🚀 Portfólio global bem estruturado"
        ],
        investments: [
            {
                category: "Renda Fixa (30%)",
                assets: [
                    { name: "Tesouro IPCA+ (Ladder 2035/2045/2055)", allocation: "15%", reason: "Aposentadoria escalonada" },
                    { name: "CDB 115%+ CDI (bancos médios)", allocation: "8%", reason: "Rentabilidade superior" },
                    { name: "Debêntures Incentivadas", allocation: "5%", reason: "Isenção IR, infraestrutura" },
                    { name: "CRI/CRA", allocation: "2%", reason: "Isenção IR, imobiliário/agro" }
                ]
            },
            {
                category: "Ações Brasil (35%)",
                assets: [
                    { name: "Blue Chips Dividend Aristocrats", allocation: "12%", reason: "Dividendos crescentes" },
                    { name: "Small Caps Qualidade (SMAL11)", allocation: "8%", reason: "Potencial valorização" },
                    { name: "Utilities + Saneamento", allocation: "6%", reason: "Fluxo previsível" },
                    { name: "Exportadoras (SUZB3, KLBN11, EMBR3)", allocation: "5%", reason: "Proteção cambial" },
                    { name: "Crescimento (PETZ3, LWSA3, RAIZ4)", allocation: "4%", reason: "High growth" }
                ]
            },
            {
                category: "FIIs (15%)",
                assets: [
                    { name: "Carteira diversificada 8-12 FIIs", allocation: "15%", reason: "Renda mensal R$ 500-800" },
                    { name: "Mix: 40% Logística, 30% Tijolo, 20% Papel, 10% Agro", allocation: "-", reason: "Diversificação setorial" }
                ]
            },
            {
                category: "Internacional (20%)",
                assets: [
                    { name: "IVVB11 (S&P 500)", allocation: "10%", reason: "Core desenvolvido" },
                    { name: "WRLD11 (Global)", allocation: "4%", reason: "Mercados emergentes" },
                    { name: "TECH (NASD11)", allocation: "3%", reason: "Nasdaq 100 tech" },
                    { name: "Gold11 (Ouro)", allocation: "2%", reason: "Proteção, descorrelação" },
                    { name: "Criptomoedas (Bitcoin)", allocation: "1%", reason: "Especulação controlada" }
                ]
            }
        ],
        monthlyStrategy: {
            amount: 3000,
            distribution: [
                { target: "Renda Fixa (25%)", value: 750, detail: "Tesouro IPCA+ ladder, CDB 115%+, Debêntures" },
                { target: "Ações (35%)", value: 1050, detail: "Dividend aristocrats, small caps, exportadoras" },
                { target: "FIIs (20%)", value: 600, detail: "Diversificar em 10-15 FIIs de qualidade" },
                { target: "Internacional (20%)", value: 600, detail: "IVVB11, WRLD11, NASD11, Gold11" }
            ]
        },
        monthlyStrategies: {
            1000: [
                { target: "Renda Fixa (25%)", value: 250, detail: "Tesouro IPCA+" },
                { target: "Ações (35%)", value: 350, detail: "1-2 ações qualidade" },
                { target: "FIIs (20%)", value: 200, detail: "Poupar 2 meses para FII" },
                { target: "Internacional (20%)", value: 200, detail: "IVVB11" }
            ],
            1500: [
                { target: "Renda Fixa (25%)", value: 375, detail: "Tesouro IPCA+ + CDB" },
                { target: "Ações (35%)", value: 525, detail: "2-3 ações" },
                { target: "FIIs (20%)", value: 300, detail: "1 FII por mês" },
                { target: "Internacional (20%)", value: 300, detail: "IVVB11 + poupar WRLD11" }
            ],
            2000: [
                { target: "Renda Fixa (25%)", value: 500, detail: "Tesouro IPCA+ + CDB 115%" },
                { target: "Ações (35%)", value: 700, detail: "3-4 ações diversificadas" },
                { target: "FIIs (20%)", value: 400, detail: "1-2 FIIs" },
                { target: "Internacional (20%)", value: 400, detail: "IVVB11 + WRLD11" }
            ],
            2500: [
                { target: "Renda Fixa (25%)", value: 625, detail: "Tesouro + CDB + Debêntures" },
                { target: "Ações (35%)", value: 875, detail: "4-5 ações + small caps" },
                { target: "FIIs (20%)", value: 500, detail: "2-3 FIIs" },
                { target: "Internacional (20%)", value: 500, detail: "IVVB11 + WRLD11 + BDR" }
            ],
            3000: [
                { target: "Renda Fixa (25%)", value: 750, detail: "Portfolio RF diversificado" },
                { target: "Ações (35%)", value: 1050, detail: "5-6 ações variadas" },
                { target: "FIIs (20%)", value: 600, detail: "3-4 FIIs setores diversos" },
                { target: "Internacional (20%)", value: 600, detail: "IVVB11 + WRLD11 + NASD11" }
            ],
            4000: [
                { target: "Renda Fixa (25%)", value: 1000, detail: "RF + CRI/CRA + Debêntures" },
                { target: "Ações (35%)", value: 1400, detail: "7-8 ações + small caps" },
                { target: "FIIs (20%)", value: 800, detail: "4-5 FIIs" },
                { target: "Internacional (20%)", value: 800, detail: "ETFs variados + BDRs" }
            ],
            5000: [
                { target: "Renda Fixa (25%)", value: 1250, detail: "RF completa diversificada" },
                { target: "Ações (35%)", value: 1750, detail: "10+ ações qualidade" },
                { target: "FIIs (20%)", value: 1000, detail: "5-7 FIIs" },
                { target: "Internacional (20%)", value: 1000, detail: "Portfolio global completo" }
            ],
            6000: [
                { target: "Renda Fixa (25%)", value: 1500, detail: "RF otimizada fiscalmente" },
                { target: "Ações (35%)", value: 2100, detail: "12+ ações diversificadas" },
                { target: "FIIs (20%)", value: 1200, detail: "6-8 FIIs" },
                { target: "Internacional (20%)", value: 1200, detail: "ETFs + BDRs + Gold" }
            ]
        },
        tips: [
            "🎯 Implementar estratégia de opções cobertas",
            "💰 Usar dividendos para reinvestimento automático",
            "🌐 Considerar investimento direto no exterior (Avenue, Nomad)",
            "📈 Estudar fundos multimercado"
        ]
    },
    {
        id: 4,
        range: "R$ 300k - 1M",
        title: "FASE 4: MULTIPLICAÇÃO",
        subtitle: "Construindo Riqueza Sustentável",
        minWealth: 300000,
        maxWealth: 1000000,
        color: "from-orange-500 to-red-600",
        icon: Target,
        allocation: {
            rendaFixa: 25,
            acoesNacionais: 30,
            fiis: 15,
            internacional: 25,
            alternativos: 5
        },
        goals: [
            "💎 Independência financeira progressiva",
            "💎 Renda passiva R$ 3-5k/mês",
            "💎 Portfólio verdadeiramente global",
            "💎 Diversificação em ativos alternativos"
        ],
        investments: [
            {
                category: "Renda Fixa (25%)",
                assets: [
                    { name: "Tesouro IPCA+ (Múltiplos vencimentos)", allocation: "12%", reason: "Aposentadoria protegida" },
                    { name: "CDB/LCI 120%+ CDI", allocation: "8%", reason: "Bancos médios, rentabilidade" },
                    { name: "Debêntures + CRI/CRA", allocation: "5%", reason: "Otimização fiscal" }
                ]
            },
            {
                category: "Ações Brasil (30%)",
                assets: [
                    { name: "Carteira Dividend Yield 4%+", allocation: "15%", reason: "Renda mensal consistente" },
                    { name: "Growth + Small Caps", allocation: "10%", reason: "Valorização capital" },
                    { name: "Teses específicas", allocation: "5%", reason: "Convicção, pesquisa própria" }
                ]
            },
            {
                category: "FIIs (15%)",
                assets: [
                    { name: "15-20 FIIs diversificados", allocation: "15%", reason: "Renda R$ 1.500-2.000/mês" }
                ]
            },
            {
                category: "Internacional (25%)",
                assets: [
                    { name: "Ações diretas USA (Avenue/Nomad)", allocation: "12%", reason: "Apple, Microsoft, Google" },
                    { name: "ETFs Globais", allocation: "8%", reason: "VT, VTI, VXUS" },
                    { name: "REITs USA", allocation: "3%", reason: "Imobiliário americano" },
                    { name: "Ouro + Commodities", allocation: "2%", reason: "Proteção" }
                ]
            },
            {
                category: "Alternativos (5%)",
                assets: [
                    { name: "Fundos Multimercado", allocation: "2%", reason: "Gestão ativa" },
                    { name: "Criptomoedas (BTC/ETH)", allocation: "2%", reason: "Descorrelação" },
                    { name: "Venture Capital / Startups", allocation: "1%", reason: "High risk/reward" }
                ]
            }
        ],
        monthlyStrategy: {
            amount: 5000,
            distribution: [
                { target: "Renda Fixa (20%)", value: 1000, detail: "Base defensiva sólida" },
                { target: "Ações Brasil (30%)", value: 1500, detail: "Dividendos + crescimento balanceado" },
                { target: "FIIs (20%)", value: 1000, detail: "Maximizar renda passiva mensal" },
                { target: "Internacional (25%)", value: 1250, detail: "Globalização completa do portfólio" },
                { target: "Alternativos (5%)", value: 250, detail: "Oportunidades especulativas controladas" }
            ]
        },
        monthlyStrategies: {
            1500: [
                { target: "Renda Fixa (20%)", value: 300, detail: "Tesouro IPCA+" },
                { target: "Ações Brasil (30%)", value: 450, detail: "2-3 ações dividend yield" },
                { target: "FIIs (20%)", value: 300, detail: "1 FII qualidade" },
                { target: "Internacional (25%)", value: 375, detail: "IVVB11 + poupar exterior" },
                { target: "Alternativos (5%)", value: 75, detail: "Poupar para crypto/fundo" }
            ],
            2000: [
                { target: "Renda Fixa (20%)", value: 400, detail: "Tesouro + CDB" },
                { target: "Ações Brasil (30%)", value: 600, detail: "3-4 ações variadas" },
                { target: "FIIs (20%)", value: 400, detail: "1-2 FIIs" },
                { target: "Internacional (25%)", value: 500, detail: "IVVB11 + investir exterior" },
                { target: "Alternativos (5%)", value: 100, detail: "Crypto ou multimercado" }
            ],
            3000: [
                { target: "Renda Fixa (20%)", value: 600, detail: "RF diversificada" },
                { target: "Ações Brasil (30%)", value: 900, detail: "5-6 ações qualidade" },
                { target: "FIIs (20%)", value: 600, detail: "2-3 FIIs" },
                { target: "Internacional (25%)", value: 750, detail: "Ações diretas USA + ETFs" },
                { target: "Alternativos (5%)", value: 150, detail: "Crypto + multimercado" }
            ],
            4000: [
                { target: "Renda Fixa (20%)", value: 800, detail: "RF + CRI/CRA" },
                { target: "Ações Brasil (30%)", value: 1200, detail: "7-8 ações" },
                { target: "FIIs (20%)", value: 800, detail: "4-5 FIIs" },
                { target: "Internacional (25%)", value: 1000, detail: "USA + ETFs + REITs" },
                { target: "Alternativos (5%)", value: 200, detail: "Portfolio alternativo" }
            ],
            5000: [
                { target: "Renda Fixa (20%)", value: 1000, detail: "RF otimizada" },
                { target: "Ações Brasil (30%)", value: 1500, detail: "10+ ações diversificadas" },
                { target: "FIIs (20%)", value: 1000, detail: "5-7 FIIs" },
                { target: "Internacional (25%)", value: 1250, detail: "Portfolio global" },
                { target: "Alternativos (5%)", value: 250, detail: "Crypto + VC + Multimercado" }
            ],
            6000: [
                { target: "Renda Fixa (20%)", value: 1200, detail: "RF completa" },
                { target: "Ações Brasil (30%)", value: 1800, detail: "12+ ações" },
                { target: "FIIs (20%)", value: 1200, detail: "8-10 FIIs" },
                { target: "Internacional (25%)", value: 1500, detail: "USA + Europa + Ásia" },
                { target: "Alternativos (5%)", value: 300, detail: "Alternativos diversos" }
            ],
            8000: [
                { target: "Renda Fixa (20%)", value: 1600, detail: "RF estratégica" },
                { target: "Ações Brasil (30%)", value: 2400, detail: "15+ ações" },
                { target: "FIIs (20%)", value: 1600, detail: "10-12 FIIs" },
                { target: "Internacional (25%)", value: 2000, detail: "Global diversificado" },
                { target: "Alternativos (5%)", value: 400, detail: "Alternativos amplos" }
            ],
            10000: [
                { target: "Renda Fixa (20%)", value: 2000, detail: "RF sofisticada" },
                { target: "Ações Brasil (30%)", value: 3000, detail: "20+ ações" },
                { target: "FIIs (20%)", value: 2000, detail: "15+ FIIs" },
                { target: "Internacional (25%)", value: 2500, detail: "Portfolio internacional" },
                { target: "Alternativos (5%)", value: 500, detail: "Alternativos completos" }
            ]
        },
        tips: [
            "🏆 Estruturar estratégia de viver de renda",
            "🌍 Investir diretamente no exterior (corretora USA)",
            "🔐 Considerar holding patrimonial (PJ)",
            "📊 Usar estratégias com opções avançadas"
        ]
    },
    {
        id: 5,
        range: "R$ 1M+",
        title: "FASE 5: PRESERVAÇÃO",
        subtitle: "Independência Financeira e Legado",
        minWealth: 1000000,
        maxWealth: Infinity,
        color: "from-yellow-500 to-yellow-600",
        icon: Lock,
        allocation: {
            rendaFixa: 30,
            acoesNacionais: 25,
            fiis: 15,
            internacional: 25,
            alternativos: 5
        },
        goals: [
            "👑 Independência financeira alcançada",
            "👑 Preservação de patrimônio",
            "👑 Otimização fiscal máxima",
            "👑 Planejamento sucessório"
        ],
        investments: [
            {
                category: "Estratégia Global",
                assets: [
                    { name: "Renda Fixa", allocation: "30%", reason: "Proteção e previsibilidade" },
                    { name: "Ações + FIIs Brasil", allocation: "40%", reason: "Renda + crescimento local" },
                    { name: "Investimentos Exterior", allocation: "25%", reason: "Diversificação geográfica" },
                    { name: "Alternativos", allocation: "5%", reason: "Oportunidades específicas" }
                ]
            }
        ],
        monthlyStrategy: {
            amount: "Não precisa aportar - vive de renda",
            distribution: [
                { target: "Renda Passiva Mensal", value: "R$ 8-15k", detail: "Dividendos + aluguéis + FIIs" },
                { target: "Reinvestimento (50%)", value: "R$ 4-7k", detail: "Crescimento contínuo do patrimônio" },
                { target: "Qualidade de Vida (50%)", value: "R$ 4-8k", detail: "Aproveitar as conquistas" }
            ]
        },
        tips: [
            "🏛️ Estruturar holding patrimonial (PJ)",
            "👨‍👩‍👧‍👦 Planejamento sucessório e testamento",
            "🌎 Internacionalização completa",
            "🎓 Investir em educação dos filhos"
        ]
    }
];
