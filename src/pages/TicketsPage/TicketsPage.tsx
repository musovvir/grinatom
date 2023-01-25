import cls from './TicketsPage.module.scss';
import { TicketsPageFilters } from "../../components/TicketsPageFilters/TicketsPageFilters";
import { TicketsSort } from "../../components/TicketsSort/TicketsSort";
import { classNames } from "../../helpers/classNames";
import { TicketList } from "../../components/TicketList/TicketList";
import useStore from "../../hooks/useStore";
import { observer } from 'mobx-react-lite'
import { useState } from "react";
import { ITicket } from "../../types/ticket";
import { sortTime } from "../../helpers/sortTime";

interface TicketsPageProps {
    className?: string;
}

export const TicketsPage = observer(({ className }: TicketsPageProps) => {
    const { tickets } = useStore();

    const ticketsList = tickets.tickets.toJSON();

    const [currentTickets, setCurrentTickets] = useState(ticketsList);
    const [sort, setSort] = useState('');

    const onChangeFilters = (value: string) => {
        if(value === 'Все') {
            setCurrentTickets(ticketsList);
            return;
        }
        let ttt = ticketsList.filter(el => el.to.transplantsCount === value);

        setCurrentTickets(ttt);
    }

    const onChangeSort = (value: string) => {
        setSort(value);
        if(value === 'price') {
            currentTickets.sort((a: ITicket, b: ITicket) => a.price - b.price)
        }
        if(value === 'travelTime') {
            currentTickets.sort((a, b) => sortTime(a, b))
        }
    }

    return (
        <div className={classNames(cls.ticketsPage, {}, [className])}>
            <div className={cls.ticketsFilters}>
                <TicketsPageFilters onChangeFilters={onChangeFilters} />
            </div>
            <div className={cls.mainContent}>
                <TicketsSort onChangeSort={onChangeSort} sortType={sort} />
                <TicketList tickets={currentTickets} />
            </div>
        </div>
    );
});
