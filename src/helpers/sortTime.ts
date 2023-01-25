import { ITicket } from "../types/ticket";

export const sortTime = (a: ITicket, b: ITicket) => {
    let aN = a.to.travelTime.match(/\d/g) ?? [];
    let bN = b.to.travelTime.match(/\d/g) ?? [];

    return +aN.join('') - +bN.join('');
};
