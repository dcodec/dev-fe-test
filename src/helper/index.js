export const getQueryString = (options, prefix = '') => {
    if (typeof options !== 'object') {
        return '';
    }

    return prefix + Object.keys(options).map(key => key + '=' + options[key]).join('&');
};

export const getOptions = (str) => {
    let options = {
        orderBy: 'newest'
    };

    if (str) {
        let arr = str.split('&');

        arr.map(o => {
            let v = o.split('=');

            return options[v[0]] = v[1];
        });
    }

    return options;
}