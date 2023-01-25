import cls from './TicketItem.module.scss';
import { classNames } from "../../helpers/classNames";
import { Text } from "../Text/Text";
import { ITicket } from "../../types/ticket";

interface TicketProps {
    className?: string;
    ticket: ITicket;
}

export const TicketItem = (props: TicketProps) => {
    const {
        className,
        ticket
    } = props;

    return (
        <div className={classNames(cls.ticketItem, {}, [className])}>
            <div className={cls.header}>
                <div className={cls.price}>
                    {`${ticket.price} Р`}
                </div>
                <div>
                    <img src={ticket.logoURL} alt="alt" className={cls.logo}/>
                </div>
            </div>
            <div className={cls.flight}>
                <div className={cls.route}>
                    <Text title={ticket.to.route} text={ticket.to.time} />
                </div>
                <div className={cls.time}>
                    <Text title={ticket.to.title} text={ticket.to.travelTime} />
                </div>
                <div className={cls.transplants}>
                    <Text title={ticket.to.transplantsCount.toUpperCase()} text={ticket.to.transplants} />
                </div>
            </div>
            <div  className={cls.flight}>
                <div className={cls.route}>
                    <Text title={ticket.from?.route} text={ticket.from?.time} />
                </div>
                <div className={cls.time}>
                    <Text title={ticket.from?.title} text={ticket.from?.travelTime} />
                </div>
                <div className={cls.transplants}>
                    <Text title={ticket.from?.transplantsCount.toUpperCase()} text={ticket.from?.transplants} />
                </div>
            </div>
        </div>
    );
};
