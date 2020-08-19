import isBooleanQuery from "./isBooleanQuery";

export default (params) => {
    let query = {};

    for (const key in params) {
        if (params.hasOwnProperty(key) && isBooleanQuery(params[key])) {
            query[key] = params[key];
        }
    }

    return query;
}
