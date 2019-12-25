import _ from "lodash";

export const isNextItemExists = (itemsList, indexOfCurrentItem) => !_.isUndefined(itemsList[indexOfCurrentItem + 1]);

export const areParametersPresent = parameters => parameters.every(param => !_.isNil(param));
