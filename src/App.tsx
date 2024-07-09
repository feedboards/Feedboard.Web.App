import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts';
import './assets/scss/app.scss';
import { Button } from './conponents';
import { lazy, Suspense } from 'react';
import { AccountLayout } from './layouts/AccountLayout';

const Error404 = lazy(() => import('./pages/error/404'));
const SingIn = lazy(() => import('./pages/account/SingIn'));

const App = (): JSX.Element => {
    return (
        <Router>
            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    <Route path="/*" element={<Layout />}>
                        <Route index element={<Button to="account/singin">sing in</Button>} />
                        <Route path="*" element={<Error404 />} />
                    </Route>
                    <Route path="/account" element={<AccountLayout />}>
                        <Route index element={<Error404 />} />
                        <Route path="/account/singin" element={<SingIn />} />
                        <Route path="*" element={<Error404 />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
