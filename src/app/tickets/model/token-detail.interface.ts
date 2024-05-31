import { Sponsor } from "./sponsor.interface";

export interface TokenDetail {
    items: TokenDetailItem[];
}

export interface TokenDetailItem {
    _id: string;
    type: string;
    name: string;
    description: string;
    images: string[];
    sponsor: Sponsor;
    quantity: number;
    delivered: boolean;
    deliveredCount: number;
}