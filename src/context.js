import React,{useReducer,useContext,useEffect} from 'react';

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
            dispatch({
                type: SET_NEWS,
                payload: {newsFeed: data.articles}
            })
            // console.log(data.articles)
        } catch (error) {
            console.log('ERROR',error)
        }
    }

    useEffect(()=> {
        // fetchNews(`https://newsapi.org/v2/everything?q=${state.query}&from=2021-04-20&sortBy=publishedAt&apiKey=${API_KEY}`)
        fetchNews(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
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