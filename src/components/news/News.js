import React from 'react'
import {useGlobalContext} from '../../context'
import { news } from '../../data'

const News = () => {
    const { newsFeed } = useGlobalContext()

    let firstNews = newsFeed.slice(0,1)

    const first = firstNews.map(item=> {
        console.log(item)
        return(
            <div className="news-item">
            <div className="news-image">
                <img src={item.urlToImage} alt=""/>
            </div>
            <div className="news-description">
                <p className="title">
                    <p>{item.description.substring(0,300)}</p>
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
            <div className="news-right-item">
            <div className="news-right-image">
                <img src={item.urlToImage} alt=""/>
            </div>
            <div className="news-right-description">
                <p>{item.content.substring(0,50)}</p>
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
    // console.log(fifthToEnd)

    let third = fifthToEnd.map(item=> {
        return (
            <div className="news-body">
                <div className="news-body-item">
                    <div className="news-body-image">
                        <img src={item.urlToImage} alt=""/>
                    </div>                    
                </div>
                <div className="news-body-description">
                    <p className="body-description">
                        {item.content.substring(0,200)}
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
                    <div className="search-box">
                        <input type="text"/>
                    </div>
                </div>
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
        </>


    )
}

export default News
                    
                        

