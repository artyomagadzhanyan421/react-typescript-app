import { useEffect, useState } from 'react';

type fetchStates<T> = {
    data: T | null;
    loading: boolean;
    error: boolean;
}

function useFetch<T>(url: string): fetchStates<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data: T) => {
                setLoading(false);
                setError(false);
                setData(data);
                console.log(data);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
                console.log(err);
            });
    }, [url]);

    return { data, loading, error };
}

export default useFetch;