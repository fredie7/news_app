import React,{useReducer,useContext,useEffect} from 'react';

import {SET_NEWS, HANDLE_SEARCH,} from './actions'
import reducer from './reducer';

const initialState = {
    newsFeed : [],
    query: 'technology',
}
const API_KEY = '09f20bd7125649cd8f8d8f550863dd13'

const AppContext = React.createContext()

const AppProvider = ({children})=> {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchNews = async (url)=> {
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            let newsData = []
            data.articles.forEach((news, i)=> {
                let singleNews = {...news}
                singleNews.newsID = i + 1
                newsData = [...newsData, singleNews]
            })
            console.log(newsData)
            dispatch({
                type: SET_NEWS,
                payload: {newsFeed: newsData}
            })
            // console.log(data.articles)
        } catch (error) {
            console.log('ERROR',error)
        }
    }

const handleSearch = query => {
    dispatch({ type: HANDLE_SEARCH, payload: query })
}

    useEffect(()=> {
        // fetchNews(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        fetchNews(`https://newsapi.org/v2/everything?q=${state.query}&apiKey=${API_KEY}`)
    },[state.query])

    return(
        <AppContext.Provider value={{...state, handleSearch,}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export {AppContext, AppProvider}