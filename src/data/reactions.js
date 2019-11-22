import React from 'react';
import * as Items from './items';

export const clrchg_list = [
    {
        idx: 0,
        name: "CLR_1",
        equation: (<div>{Items.Fe.display} + {Items.H2SO4.display} -> {Items.FeSO4.display} + {Items.H2O.display}</div>),
        input: [Items.Fe, Items.H2SO4],
        output: [Items.FeSO4, Items.H2O],
        animation: {
            clr_chg: true,
            bubble: false,
            percipitate: false,
            flame: false,
            clr: "#008000"
        }
    },
    {
        idx: 1,
        name: "CLR_2",
        equation: (<div>{Items.CuO.display} + {Items.H2SO4.display} -> {Items.CuSO4.display} + {Items.H2O.display}</div>),
        input: [Items.CuO, Items.H2SO4],
        output: [Items.CuSO4, Items.H2O],
        animation: {
            clr_chg: true,
            bubble: false,
            percipitate: false,
            flame: false,
            clr: "blue"
        }
    },
    {
        idx: 2,
        name: "CLR_3",
        equation: (<div>{Items.Fe2O3.display} + 6{Items.HCl.display} -> 2{Items.FeCl3.display} + 3{Items.H2O.display}</div>),
        input: [Items.Fe2O3, Items.HCl],
        output: [Items.FeCl3, Items.H2O],
        animation: {
            clr_chg: true,
            bubble: false,
            percipitate: false,
            flame: false,
            clr: "#F9E79F"
        }
    },
    {
        idx: 4,
        name: "CLR_4",
        equation: (<div>{Items.Fe2O3.display} + 3{Items.H2SO4.display} -> {Items.Fe2SO43.display} + 3{Items.H2O.display}</div>),
        input: [Items.Fe2O3, Items.HCl],
        output: [Items.FeCl3, Items.H2O],
        animation: {
            clr_chg: true,
            bubble: false,
            percipitate: false,
            flame: false,
            clr: "#F9E79F"
        }
    }
]

export const bubble_list = [
    {
        idx: 0,
        name: "BUBBLE_1",
        equation: (<div>{Items.CaCO3.display} + {Items.HCl.display} -> {Items.CaCl2.display} + {Items.CO2.display} + {Items.H2O.display}</div>),
        input: [Items.CaCO3, Items.HCl],
        output: [Items.CaCl2, Items.CO2, Items.H2O],
        animation: {
            clr_chg: false,
            bubble: true,
            percipitate: false,
            flame: false,
        }
    },
    {
        idx: 1,
        name: "BUBBLE_2",
        equation: (<div>{Items.NaHCO3.display} + {Items.HBr.display} -> {Items.NaBr.display} + {Items.CO2.display} + {Items.H2O.display}</div>),
        input: [Items.NaHCO3, Items.HBr],
        output: [Items.NaBr, Items.CO2, Items.H2O],
        animation: {
            clr_chg: true,
            bubble: true,
            percipitate: false,
            flame: false,
            clr: "#EBDCBE"
        }
    },
    {
        idx: 2,
        name: "BUBBLE_3",
        equation: (<div>{Items.CuCO3.display} + 2{Items.HNO3.display} -> {Items.CuNO32.display} + {Items.CO2.display} + {Items.H2O.display}</div>),
        input: [Items.CuCO3, Items.HNO3],
        output: [Items.CuNO32, Items.CO2, Items.H2O],
        animation: {
            clr_chg: false,
            bubble: true,
            percipitate: false,
            flame: false,
        }
    },
    {
        idx: 3,
        name: "BUBBLE_4",
        equation: (<div>{Items.CuCO3.display} + 2{Items.HCl.display} -> {Items.CuCl2.display} + {Items.CO2.display} + {Items.H2O.display}</div>),
        input: [Items.CuCO3, Items.HCl],
        output: [Items.CuCl2, Items.CO2, Items.H2O],
        animation: {
            clr_chg: false,
            bubble: true,
            percipitate: false,
            flame: false,
        }
    }
]

export const percipitate_list = [
    {
        idx: 0,
        name: "PERP_1",
        equation: (<div>{Items.PbNO32.display} + 2{Items.NaI.display} -> {Items.PbI2.display} + 2{Items.NaNO3.display}</div>),
        input: [Items.PbNO32, Items.NaI],
        output: [Items.PbI2, Items.NaNO3],
        animation: {
            clr_chg: false,
            bubble: false,
            percipitate: true,
            flame: false,
            clr: "#B7950B"
        }
    },
    {
        idx: 1,
        name: "PERP_2",
        equation: (<div>{Items.NaCl.display} + {Items.AgNO3.display} -> {Items.AgCl.display} + 2{Items.NaNO3.display}</div>),
        input: [Items.NaCl, Items.AgNO3],
        output: [Items.AgCl, Items.NaNO3],
        animation: {
            clr_chg: false,
            bubble: false,
            percipitate: true,
            flame: false,
            clr: "#FBFCFC"
        }
    },
    {
        idx: 2,
        name: "PERP_3",
        equation: (<div>{Items.CdSO4.display} + {Items.K2S.display} -> {Items.CdS.display} + {Items.K2SO4.display}</div>),
        input: [Items.CdSO4, Items.K2S],
        output: [Items.CdS, Items.K2SO4],
        animation: {
            clr_chg: false,
            bubble: false,
            percipitate: true,
            flame: false,
            clr: "#E5E7E9"
        }
    },
    {
        idx: 3,
        name: "PERP_4",
        equation: (<div>{Items.MgCl2.display} + 2{Items.NaOH.display} -> 2{Items.NaCl.display} + {Items.MgOH2.display}</div>),
        input: [Items.MgCl2, Items.NaOH],
        output: [Items.NaCl, Items.MgOH2],
        animation: {
            clr_chg: false,
            bubble: false,
            percipitate: true,
            flame: false,
            clr: "#E5E7E9"
        }
    },
]

export const heat_list = [
    {
        idx: 0,
        name: "HEAT_1",
        equation: (<div>{Items.CH4.display} + 2{Items.O2.display} -> {Items.CO2.display} + 2{Items.H2O.display} + heat</div>),
        input: [Items.CH4, Items.O2],
        output: [Items.CO2, Items.H2O],
        animation: {
            clr_chg: false,
            bubble: false,
            percipitate: false,
            flame: true,
            clr: "#5DADE2"
        }
    },
    {
        idx: 1,
        name: "HEAT_2",
        equation: (<div>{Items.C3H8.display} + 5{Items.O2.display} -> 3{Items.CO2.display} + 4{Items.H2O.display} + heat</div>),
        input: [Items.C3H8, Items.O2],
        output: [Items.CO2, Items.H2O],
        animation: {
            clr_chg: false,
            bubble: false,
            percipitate: false,
            flame: true,
            clr: "#F39C12"
        }
    },
    {
        idx: 2,
        name: "HEAT_3",
        equation: (<div>{Items.C4H10.display} + {Items.O2.display} -> {Items.CO2.display} + {Items.H2O.display} + heat</div>),
        input: [Items.C4H10, Items.O2],
        output: [Items.CO2, Items.H2O],
        animation: {
            clr_chg: false,
            bubble: false,
            percipitate: false,
            flame: true,
            clr: "#F39C12"
        }
    },
    {
        idx: 3,
        name: "HEAT_4",
        equation: (<div>{Items.C3H7OH.display} + {Items.O2.display} -> {Items.CO2.display} + {Items.H2O.display} + heat</div>),
        input: [Items.C3H7OH, Items.O2],
        output: [Items.CO2, Items.H2O],
        animation: {
            clr_chg: false,
            bubble: false,
            percipitate: false,
            flame: true,
            clr: "#F39C12"
        }
    }
]