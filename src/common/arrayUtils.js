import _ from "lodash";

export const isNextItemExists = (itemsList, indexOfCurrentItem) => !_.isUndefined(itemsList[indexOfCurrentItem + 1]);
