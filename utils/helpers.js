module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_plural: (word, quantity) => {
        if (quantity !== 1) {
            return `${word}s`;
        }

        return word;
    },
    format_url: url => {
        return url
            .replace('https://', '')
            .replace('http://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?')[0];
    }
}