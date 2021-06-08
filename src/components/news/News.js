import React from 'react'
import {useGlobalContext} from '../../context'
import { useHistory } from 'react-router-dom';

const News = () => {
    const history = useHistory()
    const { newsFeed, handleSearch, query } = useGlobalContext()
    console.log(newsFeed)
    let firstNews = newsFeed.slice(0,1)

    const first = firstNews.map(item=> {
        return(
            <div className="news-item" onClick={()=> {history.push({pathname:`/newsDetails/${item.newsID}`,news:item})}}>
                <div className="news-image">
                    <img src={item.urlToImage} alt=""/>
                </div>
                <div className="news-description">
                    <p className="title">
                    <p>{!item.description ? <p>NO DETAILS ON THIS YET</p> : item.content.substring(0,50)}</p>
                    </p>
                </div>
                <div className="news-body-headline">
                    <p className="body-headline">
                        {item.title}
                    </p>
                </div>
            </div>
        )
    })
    
    let secondToFifth = newsFeed.slice(1,5)
    
    const second = secondToFifth.map(item=> {
        return (
            <div className="news-right-item" onClick={()=>{history.push({pathname:`/newsDetails/${item.newsID}`,news:item})}}>
                <div className="news-right-image">
                    <img src={item.urlToImage} alt=""/>
                </div>
                <div className="news-right-description">
                    <p>{!item.content ? <p>NO DETAILS ON THIS YET</p> : item.content.substring(0,50)}</p>
                </div>
                <div className="news-body-headline">
                    <p className="body-headline">
                        {item.title}
                    </p>
                </div>
            </div>
        )
    })

    let fifthToEnd = newsFeed.slice(5,newsFeed.length - 1)
    let third = fifthToEnd.map(item=> {
        return (
            <div className="news-body" onClick={()=> {history.push({pathname:`/newsDetails/${item.newsID}`,news:item})}}>
                <div className="news-body-item">
                    <div className="news-body-image">
                        <img src={item.urlToImage} alt=""/>
                    </div>                    
                </div>
                <div className="news-body-description">
                    <p className="body-description">
                        {/* {item.description.substring(0,200)} */}
                        {item.description === null ? 
                        <p>NO DETAILS ON THIS AT THIS TIME</p> : 
                        item.description.substring(0,200)}
                    </p>
                </div>
                <div className="news-body-headline">
                    <p className="body-headline">
                        {item.title}
                    </p>
                </div>
            </div>
        )
    })
    
    return (
        <>
            <div className="wrapper">
                <div className="search-container">
                    <form className="search-box" onSubmit={e => e.preventDefault()}>
                        <input type="text" 
                            value={query}
                            onChange={e=>handleSearch(e.target.value)}
                        />
                    </form>
                </div>
                <div className="news-body-wrapper">
                    <div className="news-container">
                            {first}
                        <div className="news-right-container">
                            {second}
                        </div>
                    </div>
                    <div className="news-body-container">
                        {third}
                    </div>
                </div>
            </div>
        </>


    )
}

export default News