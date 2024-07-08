import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts';
import './assets/scss/app.scss';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                <Route path="/" element={<>asdasdasss</>} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
