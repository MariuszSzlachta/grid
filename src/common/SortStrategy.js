import { SORT_ORDERS } from "Common/Enums";
import _ from "lodash";

const _data = Symbol();
const _column = Symbol();
const _order = Symbol();
const _sortAscending = Symbol();
const _sortDescending = Symbol();

export class SortStrategy {
    constructor(data, { column, order }) {
        this[_data] = data;
        this[_column] = column;
        this[_order] = order;
    }

    [_sortAscending](a, b) {
        if (_.isString(a[this[_column]]) && _.isString(b[this[_column]])) {
            return a[this[_column]] < b[this[_column]] ? -1 : 1;
        }

        return a[this[_column]] - b[this[_column]];
    }

    [_sortDescending](a, b) {
        if (_.isString(a[this[_column]]) && _.isString(b[this[_column]])) {
            return a[this[_column]] < b[this[_column]] ? 1 : -1;
        }

        return b[this[_column]] - a[this[_column]];
    }


    sort() {
        switch (this[_order]) {
            case SORT_ORDERS.ASC:
                return this[_data].sort((a, b) => this[_sortAscending](a, b));

            case SORT_ORDERS.DESC:
                return this[_data].sort((a, b) => this[_sortDescending](a, b));

            case SORT_ORDERS.NONE:
            default:
                return this[_data];
        }
    }
}
