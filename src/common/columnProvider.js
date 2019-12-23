import { SORT_ORDERS } from "Common/Enums";
import { getColumnNames } from "Common/gridUtils";

export const columnProvider = data => {
    const columnNames = getColumnNames(data);
    return columnNames.map(column => ({
        columnName: column,
        sortedBy: SORT_ORDERS.NONE
    }));
};
