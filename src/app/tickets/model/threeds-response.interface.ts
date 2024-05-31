export interface ThreeDSResponse {
    purchaseId: string;
    type: string;
    status: string;
    secret: string;
    urlRedirect: string;
    declineCode: string;
    errorMessage: string;
    paymentIntentId: string;
}