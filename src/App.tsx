import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, AccountLayout } from './layouts';
import { Button } from './conponents';
import { lazy, Suspense } from 'react';
import './assets/scss/app.scss';

const App = (): JSX.Element => {
    const Team = lazy(() => import('./pages/Team'));

    const Error404 = lazy(() => import('./pages/error/404'));
    const SingIn = lazy(() => import('./pages/account/SingIn'));

    return (
        <Router>
            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Button to="account/sing-in">sing in</Button>} />

                        <Route path="/dashboard" element={<>dashboard</>} />
                        <Route path="/projects" element={<>projects</>} />
                        <Route path="/calendar" element={<>calendar</>} />
                        <Route path="/documents" element={<>documents</>} />
                        <Route path="/reports" element={<>reports</>} />
                        <Route path="/team" element={<Team />} />

                        <Route path="*" element={<Error404 />} />
                    </Route>
                    <Route path="/account" element={<AccountLayout />}>
                        <Route index element={<Error404 />} />
                        <Route path="/account/sing-in" element={<SingIn />} />
                        <Route path="*" element={<Error404 />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
