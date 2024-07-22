import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useParams = (requireParams: string[] | string, redirectTo?: string) => {
    const [queryParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (typeof requireParams === 'string') {
            if (!queryParams.get(requireParams)) {
                navigate(redirectTo ? redirectTo : '/error-404');
            }
        } else {
            const missingParams = requireParams.filter((x) => !queryParams.get(x));

            if (missingParams.length > 0) {
                navigate(redirectTo ? redirectTo : '/error-404');
            }
        }
    }, []);

    return {
        navigate,
        queryParams,
    };
};
