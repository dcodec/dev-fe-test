import { makeAutoObservable } from 'mobx';

import { getQueryString } from '../helper';

const apiKey = '77f3c2ed-6657-4e55-993d-fe913bd7708f';
const url = 'https://content.guardianapis.com/search?api-key=' + apiKey;

class Stories {
    stories = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getTopStoriesAsync(options, refresh = false) {
        if (this.stories.length && !refresh) {
            return true;
        }

        let query = getQueryString(options, '&');

        try {
            let res = await fetch(url + query);
            let data = await res.json();

            if (data.response && data.response.status === 'ok') {
                this.setData('stories', data.response.results);
            }
        } catch (err) {
            console.log('topstories: ', err);
        }
    }

    setData(item, data) {
        this[item] = data;
    }
}

export default Stories;