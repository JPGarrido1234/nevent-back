import { Sponsor } from "./sponsor.interface";

export interface Customization {
    merch: Advertisment[];
    experiences: Experience[];
}

export interface Advertisment {
    id: string;
    itemName: string;
    description: string;
    images: string[];
    sponsor: Sponsor;
    stock: number;
    regularPrice: number;
    displayPrice: number;
    fanDiscount: number;
    variable: number;
}

export interface Experience {
    id: string;
    name: string;
    sponsor: Sponsor;
    description: string;
    regularPrice: number;
    displayPrice: number;
    available: number;
    allowMultiple: boolean;
}