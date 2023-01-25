import cls from './FilterItem.module.scss';
import { useState } from "react";
import {MapFilters} from "../../../../types/ticket";

interface FilterItemProps {
    onChangeFilters: (value: string) => void;
    filter: MapFilters;
}

export const FilterItem = (props: FilterItemProps) => {
    const { filter, onChangeFilters } = props;
    const [isChecked, setIsChecked] = useState(false);

    const changeClick = () => {
        if(!isChecked) {
            setIsChecked(true);
            onChangeFilters(filter.title);
        } else {
            setIsChecked(false);
            onChangeFilters('');
        }
    }

    return (
        <div className={cls.filterItem}>
            <input className={cls.input} type="checkbox" id={filter.title} onChange={changeClick} checked={isChecked} />
            <label htmlFor={filter.title}>
                {filter.title}
            </label>
        </div>
    );
};
