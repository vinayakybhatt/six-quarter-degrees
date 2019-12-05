function TimeFormatter(value, is24HrFormat) {
    if (value) {
        const date = new Date(Date.parse(value));
        var hours = date.getHours();
        const min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        if (!is24HrFormat) {
            const time = hours > 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            return hours + ':' + min + ' ' + time
        }
        return hours + ':' + min
    } else {
        return 'Required Params Are Missing'
    }
}

function DateFormatter(value, fullDate) {
    if (value) {
        const date = value.slice(8, 10).trim();
        const month = value.slice(5, 7).trim();
        const year = value.slice(0, 4);
        if (!fullDate) {
            return date + '-' + month
        } else {
            return date + '-' + month + '-' + year
        }
    } else {
        return 'Required Params Are Missing'
    }
}

module.exports = {
    date: DateFormatter,
    time: TimeFormatter
};
