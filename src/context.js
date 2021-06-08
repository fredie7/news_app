import React,{useReducer,useContext,useEffect} from 'react';
import {uuid} from 'uuidv4';

import {SET_NEWS} from './actions'
import reducer from './reducer';

const initialState = {
    newsFeed : [],
    query: 'arsenal',
}
const API_KEY = '09f20bd7125649cd8f8d8f550863dd13'

const AppContext = React.createContext()

const AppProvider = ({children})=> {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchNews = async (url)=> {
        try {
            const response = await fetch(url)
            const data = await response.json()
            let newsData = []
            // let id = new Date().getTime()
            let id = uuid()
            data.articles.forEach((news, i)=> {
                let singleNews = {...news}
                singleNews.newsID = i + 1
                newsData = [...newsData, singleNews]
            })
            dispatch({
                type: SET_NEWS,
                payload: {newsFeed: newsData}
            })
            // console.log(data.articles)
        } catch (error) {
            console.log('ERROR',error)
        }
    }

    useEffect(()=> {
        fetchNews(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        // fetchNews()
    },[])

    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export {AppContext, AppProvider}