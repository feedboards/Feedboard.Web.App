import { useParams } from '../hooks';

const Team = (): JSX.Element => {
    const { queryParams } = useParams('id');

    return <div>team id - {queryParams.get('id')}</div>;
};

export default Team;
