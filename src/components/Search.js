import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { getOptions, getQueryString } from '../helper';

const Search = withRouter(({ history, match }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let options = getOptions(history.location.pathname, searchTerm);

            history.push('/' + getQueryString(options));
        }, 800);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, history, match]);

    const query = (e) => {
        let el = e.target;

        setSearchTerm(el.value);
    };

    const select = (e) => {
        let el = e.target;

        el.select();
    };

    return (
        <div className="search">
            <input type="text" className="form-control" placeholder="Search" onClick={select} onChange={query} />
        </div>
    );
});

export default Search;