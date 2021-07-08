export const getQueryString = (options, prefix = '') => {
    if (typeof options !== 'object') {
        return '';
    }

    return prefix + Object.keys(options).map(key => key + '=' + options[key]).join('&');
};