export interface Ticket {
    _id: string;
    validationUrl: string;
    eventId: string;
    name: string;
    experiences: Experience[];
    items: Item[];
    event: EventPublicInfo;
    hasPassphrase: boolean;
}

export interface EventPublicInfo {
    description: EventPublicDescription;
    url: string;
    future: boolean;

    venue: EventPublicVenue;
}

export interface EventPublicDescription {
    name: string;
    imageUrl: string;
    subtitle: string;
    description: string;
}

export interface EventPublicVenue {
    startDate: Date;
    location: EventPublicLocation;
    hiddenLocation: boolean;
    revealLocationAt: Date;
}

export interface EventPublicLocation {
    name: string;
    formattedAddress: string;
    placeId: string;
    point: Point;
}

export interface Point {
    coordinates: number[];
    type: string;
    x: number;
    y: number;
}

export interface Experience {
    id: string;
    quantity: number;
    name: string;
    description: string;
}

export interface Item {
    id: string;
    quantity: number;
    name: string;
}
