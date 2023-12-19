export type Accessory = {
    id: number;
    name: string;
    total: number;
    count: number;
}

export type Asset = {
    id: number;
    name: string;
    title: string;
    value: string;
    map: string;
    img?: string;
};

export type Update = {
    id: number;
    name: string;
    value: number | string;
};

export type Cookie = {
    value: number;
    totalRank: string;
    currentRank: string;
    time: string;
};