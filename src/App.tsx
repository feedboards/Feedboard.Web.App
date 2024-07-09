import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts';
import React from 'react';
import './assets/scss/app.scss';

const App = () => {
    const Team = React.lazy(() => import('./pages/Team'));

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/dashboard" element={<>dashboard</>} />
                    <Route path="/projects" element={<>projects</>} />
                    <Route path="/calendar" element={<>calendar</>} />
                    <Route path="/documents" element={<>documents</>} />
                    <Route path="/reports" element={<>reports</>} />
                    <Route
                        path="/team"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Team />
                            </React.Suspense>
                        }
                    />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
