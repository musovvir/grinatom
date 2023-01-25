import cls from './TicketsPageFilters.module.scss';
import { FiltersList } from "./FiltersList/FiltersList";
import { classNames } from "../../helpers/classNames";
import { MapFilters } from "../../types/ticket";

interface TicketsPageFiltersProps {
    className?: string;
    onChangeFilters: (value: string) => void;
}

export const TicketsPageFilters = (props: TicketsPageFiltersProps) => {
    const { className, onChangeFilters } = props;

    const filters: MapFilters[] = [
        {
            id: 'all',
            title: 'Все',
        },
        {
            id: 'without',
            title: 'Без пересадок',
        },
        {
            id: 'one',
            title: '1 пересадка',
        },
        {
            id: 'two',
            title: '2 пересадки',
        },
        {
            id: 'tree',
            title: '3 пересадки',
        },
    ];

    return (
        <div className={classNames(cls.ticketsPageFilters, {}, [className])}>
            <div className={cls.title}>
                КОЛИЧЕСТВО ПЕРЕСАДОК
            </div>
            <FiltersList filters={filters} onChangeFilters={onChangeFilters} />
        </div>
    );
};
