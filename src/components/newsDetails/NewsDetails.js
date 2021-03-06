import React from 'react';
import { useGlobalContext } from '../../context';

const NewsDetails = (props) => {
    let newsId = props.match.params.id
    const { newsFeed } = useGlobalContext()
    const selectedNews = newsFeed.find(item => item.newsID === newsId) || {}
    const { urlToImage, content, title, publishedAt,description,url } = selectedNews
    console.log(urlToImage, content, title, publishedAt, description, url)
    return (
        <>
          <div className="details-container">
            <div className="details-item">
                <div className="details-header">
                    <h3>{title}</h3>
                </div>
                <div className="details-image">
                    <img src={urlToImage} alt=""/>
                </div>
            </div> 
            <div className="updated">
                <div className="updatedAt">
                    <span className="time">time</span>
                    <span className="date">date</span>
                </div>
            </div> 
            <div className="details-story">
                <p>{description} 
                    <a target='_blank' rel='noreferrer' className='link' href={url}>
                        <span>.........read more</span>
                    </a>
                </p>
            </div>
          </div>  
        </>
    )
}

export default NewsDetails
