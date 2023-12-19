import { Accessory, Asset, Cookie, Update } from "./types";

export const accessories: Accessory[] = [
    {
        id: 1,
        name: 'weapons',
        count: 134,
        total: 185,
    },
    {
        id: 2,
        name: 'kits',
        count: 46,
        total: 64,
    },
    {
        id: 3,
        name: 'vehicles',
        count: 77,
        total: 182,
    },
    {
        id: 4,
        name: 'medals',
        count: 11,
        total: 54,
    },
    {
        id: 5,
        name: 'assignments',
        count: 21,
        total: 210,
    },
    {
        id: 6,
        name: 'dog tags',
        count: 357,
        total: 720,
    },
    {
        id: 7,
        name: 'battlepacks',
        count: 0,
        total: 0,
    },
];

export const updates:Update[] = [
    {
        id: 1,
        name: 'wins',
        value: '44%',
    },
    {
        id: 2,
        name: 'score/win',
        value: 592,
    },
    {
        id: 3,
        name: 'kills/min',
        value: 0.60
    },
];

export const assets: Asset[] = [
    {
        id: 1,
        name: 'top vehicle',
        title: 'Main Battle Tank',
        value: '33 kills',
        map: 'top_vehicle',
    },
    {
        id: 2,
        name: 'top primary',
        title: 'acw-r',
        value: '495 kills',
        map: 'top_primary',
    },
    {
        id: 3,
        name: 'top class',
        title: 'engineer',
        value: '828,514 score',
        map: 'top_class',
    },
    {
        id: 4,
        name: 'top sidearm',
        title: 'm9',
        value: '112 kills',
        map: 'top_sidearm',
    },
];

export const cookie: Cookie = {
    value: 63,
    totalRank: '110,000',
    currentRank: '69,840',
    time: '1h'
};