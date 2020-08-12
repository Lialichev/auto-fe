export default () => {
    const maxYear = new Date().getFullYear(); // current Year
    const minYear = 1900;

    let rangeYear = [];

    for (let year = maxYear; year >= minYear; year--) {
        rangeYear.push({ text: year, value: year });
    }

    return rangeYear;
}
