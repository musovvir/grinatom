export interface Route {
    route: string;
    time: string;
    title: string;
    travelTime: string;
    transplantsCount: string;
    transplants: string;
}

export interface ITicket {
    id: number;
    price: number;
    logoURL: string;
    to: Route;
    from?: Route;
}

export interface MapFilters {
    id: string;
    title: string;
}
