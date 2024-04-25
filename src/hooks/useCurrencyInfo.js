import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/bc0da466d6c033c574c9f367/latest/${currency}`)
            .then(r => r.json())
            .then(r => setData(r.conversion_rates))
        console.log(data)
    }, [currency])
    console.log(data);
    return data
}