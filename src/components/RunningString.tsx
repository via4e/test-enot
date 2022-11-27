import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { Context } from '../App'

export default function RunningString() {
    const appContext = useContext(Context)
    const visible = appContext?.runningVisible

    const getNews = async () => {
        const res = await fetch('https://newsdata.io/api/1/news?apikey=pub_134495cb959875c34d05d0a247f581596ca0a&q=crypto ');
        return res.json();
    };

    const { data, error, isLoading } = useQuery('randomNews', getNews);

    if (error) return <div className = { visible? 'running': 'none' }>Request Failed</div>;
    if (isLoading) return <div className={visible ? 'running' : 'none'}>Loading...</div>;

    const newsCount = data.results.length ?? null
    const randomIndex = typeof newsCount === 'number' ? Math.trunc(Math.random(0) * newsCount) : null
    const randomTitle = data.results[randomIndex].title

    return (
        <div className={visible ? 'running' : 'none'}>
            <p>{ randomTitle }</p>
        </div>
    );
}

