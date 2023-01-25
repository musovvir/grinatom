import cls from './TicketsSort.module.scss';
import { classNames } from "../../helpers/classNames";
import { useState } from "react";
import { observer } from "mobx-react-lite";

interface TicketsPageHeaderProps {
    className?: string;
    onChangeSort: (value: string) => void;
    sortType: string;
}

export const TicketsSort = observer((props: TicketsPageHeaderProps) => {
    const {className, sortType, onChangeSort} = props;

    const [isActiveCheaper, setIsActiveCheaper] = useState(false);
    const [isActiveFaster, setIsActiveFaster] = useState(false);

    const changeActiveCheaper = () => {
        setIsActiveCheaper(true);
        setIsActiveFaster(false);
        onChangeSort('price')
    }

    const changeActiveFaster = () => {
        setIsActiveCheaper(false);
        setIsActiveFaster(true);
        onChangeSort('travelTime')
    }

    return (
        <div className={classNames(cls.ticketsPageHeader, {}, [className])}>
            <button
                className={classNames(cls.cheaperBtn, {[cls.active]: isActiveCheaper}, [cls.btn] )}
                onClick={changeActiveCheaper}>
                САМЫЙ ДЕШЕВЫЙ
            </button>
            <button
                className={classNames(cls.fasterBtn, {[cls.active]: isActiveFaster}, [cls.btn] )}
                onClick={changeActiveFaster}>
                САМЫЙ БЫСТРЫЙ
            </button>
        </div>
    );
});
