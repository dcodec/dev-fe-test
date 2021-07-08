import { makeAutoObservable } from 'mobx';

const apiKey = '77f3c2ed-6657-4e55-993d-fe913bd7708f';
const url = 'https://content.guardianapis.com/search?api-key=' + apiKey;

class Stories {
    stories = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getTopStoriesAsync(order = 'newest') {
        if (this.stories.length) {
            return true;
        }

        try {
            let res = await fetch(url + '&show-fields=thumbnail&order-by=' + order);
            let data = await res.json();

            if (data.response && data.response.status === 'ok') {
                this.setData('stories', data.response.results);
            }
        } catch (err) {
            console.log(err);
        }
    }

    setData(item, data) {
        this[item] = data;
    }
}

export default Stories;