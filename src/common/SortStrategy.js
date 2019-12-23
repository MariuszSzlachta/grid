import { SORT_ORDERS } from "Common/Enums";

const _initialData = Symbol();
const _data = Symbol();
const _column = Symbol();
const _order = Symbol();
const _sortAscending = Symbol();
const _sortDescending = Symbol();

export class SortStrategy {
    constructor(data, { column, order }) {
        console.log("constructo", data);
        this[_initialData] = data;
        this[_data] = data;
        this[_column] = column;
        this[_order] = order;
    }

    [_sortAscending](a, b) {
        if (a[this[_column]] === b[this[_column]]) {
            return 0;
        }

        if (typeof a[this[_column]] === typeof b[this[_column]]) {
            return a[this[_column]] < b[this[_column]] ? -1 : 1;
        }

        return typeof a[this[_column]] < typeof b[this[_column]] ? -1 : 1;
    }

    [_sortDescending](a, b) {
        return Array.from(this[_sortAscending](a, b)).reverse();
    }


    sort() {
        switch (this[_order]) {
            case SORT_ORDERS.ASC:
                return this[_data].sort((a, b) => this[_sortAscending](a, b));

            case SORT_ORDERS.DESC:
                return this[_data].sort((a, b) => this[_sortDescending](a, b));

            case SORT_ORDERS.NONE:
            default:
                console.log("data", this[_initialData]);
                return this[_initialData];
        }
    }
}
