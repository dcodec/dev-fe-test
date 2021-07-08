import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { observer } from 'mobx-react';

import { getOptions, getQueryString } from '../helper';
import stores from "../stores";

const TopStories = withRouter(observer(({ history, match }) => {
    const [loading, setLoading] = useState(false);
    const options = getOptions(match.params.q);
    const orderBy = (e) => {
        let el = e.target;
        let opt = options;

        opt.orderBy = el.value;
        history.push('/' + getQueryString(opt));
    };

    useEffect(() => {
        setLoading(false);
        stores.stories.getTopStoriesAsync({
            'q': options.q || '',
            'order-by': options.orderBy || 'newest',
            'show-fields': 'thumbnail'
        }).then(() => {
            setLoading(true);
        });
    }, [options.q, options.orderBy]);

    const renderTopStories = () => {
        const stories = stores.stories.stories;
        let lists = [];

        if (!loading) {
            return (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            );
        }

        if (!stories.length) {
            return (
                <div className="col text-muted text-center">
                    Not found..
                </div>
            );
        }

        stories.map((item, index) => {
            return lists.push(
                <div key={index} className="col">
                    <div className="card">
                        {item.fields?.thumbnail ? <img src={item.fields.thumbnail} className="card-img-top" alt={item.webTitle} /> : null}
                        <div className="card-body">{item.webTitle}</div>
                    </div>
                </div>
            );
        });

        return lists;
    }

    return (
        <div className="container">
            <div className="card border-0 mt-4">
                <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between">
                        <h1 className="card-title fw-bold">Top Stories</h1>
                        <div className="d-flex gap-2 flex-warp justify-content-between align-items-center">
                            <button type="button" className="btn btn-primary btn-bookmark text-uppercase">
                                <span className="icon"></span>
                                View Bookmark
                            </button>

                            <select className="form-select" value={options.orderBy} onChange={orderBy}>
                                <option value="newest">Newest first</option>
                                <option value="oldest">Oldest firt</option>
                                <option value="relevance">Most popular</option>
                            </select>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-1 mt-4">
                        {renderTopStories()}
                    </div>
                </div>
            </div>
        </div>
    );
}));

export default TopStories;