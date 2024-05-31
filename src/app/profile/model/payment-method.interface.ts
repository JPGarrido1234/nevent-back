export interface PaymentMethod {
    id: string;
    card: Card;
}

export interface Card {
    brand: string;
    last4: string;
    expMonth: number;
    expYear: number;
}