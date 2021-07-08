import {
    BrowserRouter,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import {
    Header,
    Footer
} from '../components';
import {
    Home
} from '../pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />

            <main>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>

                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default Routes;