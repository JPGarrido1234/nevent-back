export interface PurchaseDetail {

    id: string;
    eventName: string;
    tickets: TicketOwnerDetail[];
    ticketOwners: string[];
    movements: PurchaseMovements[];
    totalDiscount: string;
    totalItems: string;
    totalFee: string;
    totalVat: string;
    totalPrice: number;
    purchasedAt: Date;
    state: string;
}

export interface PurchaseMovements {
    description: string;
    type: string;
    quantity: number;
    subtotal: number;
}

export interface TicketOwnerDetail {
    ticketId: string;
    ownerId: string;
    ownerName: string;
    ownerEmail: string;
    assignedAt: Date;
}
