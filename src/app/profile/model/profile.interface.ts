export interface Profile {

    name: string;
    surname1: string;
    surname2: string;
    email: string;
    fiscalId: string;
    birthDate: Date;
    billingAddress: BillingAddress;

}

export interface BillingAddress {

    city: string;
    country: string;
    addressLine1: string;
    addressLine2: string;
    postalCode: string;
    state: string;

}