import { TicketOwnerDetail } from "./purchase-detail";

export interface PurchasePreview {

    id: string;
    purchasedAt: Date;
    state: string;
    tickets: TicketOwnerDetail[];
    products: any[];
    experiences: any[];
    eventName: string;
    totalPrice: number;

}
