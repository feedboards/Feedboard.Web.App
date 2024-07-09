import { Navigate, useLocation } from 'react-router-dom';
import { RequireQueryParamProps } from '../interfaces';

const RequireQueryParam = ({ children, paramName }: RequireQueryParamProps) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    if (!queryParams.get(paramName)) {
        return <Navigate to="/error-404" replace />;
    }

    return <>{children}</>;
};

export default RequireQueryParam;
