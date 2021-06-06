import React from 'react'

const Navigation = () => {
    return (
        <>
           <div className="header-container">
                <div className="page-header">
                    <div className="header-title-wrapper">
                        <h3 className="header-title">fredieHillz news</h3>
                        <div className="updated">
                            <span className="at">@</span>
                            <span className="time">{new Date().toLocaleTimeString()}</span>
                            <span className="date">{new Date().toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div className="header-menu-wrapper">
                        <div className="header-menu"></div>
                        <div className="header-menu"></div>
                        <div className="header-menu"></div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Navigation
