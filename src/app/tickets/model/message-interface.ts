export interface Message {

    id: string;
    tenantId: string;
    tokenId: string;
    content: string;
    read: boolean;
    readAt: Date;
    createdAt: Date;
    createdBy: string;

}