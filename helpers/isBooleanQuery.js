export default (param) => {
    if (!param) return false;

    if (param === 'false') return false;

    return Boolean(param);
}
