import { FilterItem } from "./FilterItem/FilterItem";
import { MapFilters } from "../../../types/ticket";

interface FiltersListProps {
    filters: MapFilters[];
    onChangeFilters: (value: string) => void;
}

export const FiltersList = (props: FiltersListProps) => {
    const { filters, onChangeFilters } = props;

    return (
        <>
            {
                filters.map(filter => <FilterItem key={filter.id} filter={filter} onChangeFilters={onChangeFilters} />)
            }
        </>
    );
};
