import { makeAutoObservable } from 'mobx';

class Bookmark {
    stories = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getTopStoriesAsync() {
        if (this.stories.length) {
            return true;
        }

        // call api
        this.stories = [];
    }
}

export default Bookmark;