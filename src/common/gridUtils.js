import _ from "lodash";

export const getColumnNames = tableData => Object.keys(_.first(tableData));
