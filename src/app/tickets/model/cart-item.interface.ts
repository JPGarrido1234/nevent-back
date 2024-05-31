export interface CartItem {
    type: TokenUpgradeType;
    id: string;
    quantity: number;
    price: number;
    // just for merch
    variants: string[];
}

export enum TokenUpgradeType {
    EXPERIENCE = "EXPERIENCE", ADVERTISEMENT = "ADVERTISEMENT"
}
