import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { observer } from 'mobx-react';

import stores from "../stores";

const renderTopStories = () => {
    const stories = stores.stories.stories;
    let lists = [];

    if (!stories.length) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    stories.map((item, index) => {
        return lists.push(
            <div key={index} className="col">
                <div className="card">
                    <img src={item.fields.thumbnail} className="card-img-top" alt={item.webTitle} />
                    <div className="card-body">{item.webTitle}</div>
                </div>
            </div>
        );
    });

    return lists;
}

const TopStories = withRouter(observer(({ match }) => {
    console.log(match);
    useEffect(() => {
        stores.stories.getTopStoriesAsync({
            'order-by': 'newest',
            'show-fields': 'thumbnail'
        });
    }, []);

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

                            <select className="form-select">
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