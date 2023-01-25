import { ITicket } from "../../types/ticket";
import { TicketItem } from "../TicketItem/TicketItem";
import {classNames} from "../../helpers/classNames";
import cls from './TicketList.module.scss';

interface TicketListProps {
    className?: string;
    tickets: ITicket[];
}

export const TicketList = (props: TicketListProps) => {
    const {
        className,
        tickets
    } = props;

    return (
        <div className={classNames(cls.ticketList, {} , [className])}>
            {tickets.map((ticket) => <TicketItem key={ticket.id} ticket={ticket} />)}
        </div>
    );
};
