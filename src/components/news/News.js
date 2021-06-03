import React from 'react'
import {useGlobalContext} from '../../context'

const News = () => {
    const { newsFeed } = useGlobalContext()
    console.log(newsFeed)
    
    // console.log(newsFeed.newsFeed)
    // const loadNews = newsFeed.newsFeed.map(async item=> {
    //     return (
    //         <div>
    //              <div className="news-item">
    //                     <div className="news-image">
    //                         item.urlToImage
    //                     </div>
    //                     <div className="news-description">
    //                         <p className="title">
    //                             <p>item.description</p>
    //                         </p>
    //                     </div>
    //                 </div>
                    
    //                 <div className="news-right-container">
    //                     <div className="news-right-item">
    //                         <div className="news-right-image">
    //                             item.urlToImage
    //                         </div>
    //                         <div className="news-right-description">
    //                             item.description
    //                         </div>
    //                     </div>
    //                 </div>
    //         </div>
    //     )
    // })
                        

    return (
        <>
            <div className="wrapper">
                <div className="search-container">
                    <div className="search-box">
                        <input type="text"/>
                    </div>
                </div>

                <div className="news-container">
                    {/* {loadNews} */}
                    <div className="news-item">
                        <div className="news-image">
                            image
                        </div>
                        <div className="news-description">
                            <p className="title">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, necessitatibus?</p>
                            </p>
                        </div>
                    </div>
                    
                    <div className="news-right-container">
                        <div className="news-right-item">
                            <div className="news-right-image">
                                image
                            </div>
                            <div className="news-right-description">
                                News flash
                            </div>
                        </div>
                        <div className="news-right-item">
                            <div className="news-right-image">
                                image
                            </div>
                            <div className="news-right-description">
                                News flash
                            </div>
                        </div>
                        <div className="news-right-item">
                            <div className="news-right-image">
                                image
                            </div>
                            <div className="news-right-description">
                                News flash
                            </div>
                        </div>
                        <div className="news-right-item">
                            <div className="news-right-image">
                                image
                            </div>
                            <div className="news-right-description">
                                News flash
                            </div>
                        </div>
                    </div>
                </div>

                <div className="news-body-container">
                    <div className="news-body">
                        <div className="news-body-item">
                            <div className="news-body-image">
                                image
                            </div>
                            <div className="news-body-article">
                                article
                            </div>
                        </div>
                        <div className="news-body-description">
                            <p className="body-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et.
                            </p>
                        </div>
                    </div>
                    <div className="news-body">
                        <div className="news-body-item">
                            <div className="news-body-image">
                                image
                            </div>
                            <div className="news-body-article">
                                article
                            </div>
                        </div>
                        <div className="news-body-description">
                            <p className="body-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et.
                            </p>
                        </div>
                    </div>
                    <div className="news-body">
                        <div className="news-body-item">
                            <div className="news-body-image">
                                image
                            </div>
                            <div className="news-body-article">
                                article
                            </div>
                        </div>
                        <div className="news-body-description">
                            <p className="body-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default News