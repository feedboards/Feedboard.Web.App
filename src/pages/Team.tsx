import { useLocation } from 'react-router-dom';

const Team = (): JSX.Element => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    return <div>team id - {queryParams.get('id')}</div>;
};

export default Team;
