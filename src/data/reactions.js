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
            clr: "blue"
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
            bubble: true
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
            clr: "#EBDCBE"
        }
    }
]

export const percipitate_list = [
    {
        idx: 0,
        name: "PERP_1",
        equation: (<div>{Items.PbNO32.display} + 2{Items.NaI.display} -> {Items.PbI2.display} + 2{Items.NaNO3}</div>),
        input: [Items.PbNO32, Items.NaI],
        output: [Items.PbI2, Items.NaNO3],
        animation: {}
    },
    {
        idx: 1,
        name: "PERP_2",
        equation: (<div>{Items.NaCl.display} + {Items.AgNO3.display} -> {Items.AgCl.display} + 2{Items.NaNO3}</div>),
        input: [Items.NaCl, Items.AgNO3],
        output: [Items.AgCl, Items.NaNO3],
        animation: {}
    }
]

export const heat_list = [
    {
        idx: 0,
        name: "HEAT_1",
        equation: (<div>{Items.CH4.display} + 2{Items.O2.display} -> {Items.CO2.display} + 2{Items.H2O} + heat</div>),
        input: [Items.CH4, Items.O2],
        output: [Items.CO2, Items.H2O],
        animation: {}
    },
    {
        idx: 1,
        name: "HEAT_2",
        equation: (<div>{Items.C3H8.display} + 5{Items.O2.display} -> 3{Items.CO2.display} + 4{Items.H2O} + heat</div>),
        input: [Items.C3H8, Items.O2],
        output: [Items.CO2, Items.H2O],
        animation: {}
    }
]