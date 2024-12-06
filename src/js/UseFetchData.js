import React, { useEffect, useState } from 'react';

export default function useFetchData(table, col = '*', param = '', values = []) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/db', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ table, col, param, values }),
        })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error: ', error));
    }, []);

    return data;
}
