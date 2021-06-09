import React from 'react'
import {useGlobalContext} from '../../context'


const Menu = () => {
    const { newsFeed, handleClick, query } = useGlobalContext()
    // const [node, setNode] = React.useState('')
    // const handleClick = (e)=> {
    //     let val =  e.currentTarget.innerText
    //     setNode(val)
    // }
    // console.log(node)
    return (

        <>
          <div className="men-container">
              <div className="menu-items">
                  <div className="menu-item" onClick={handleClick}><h4>business</h4></div>
                  <div className="menu-item"><h4>lifestyle</h4></div>
                  <div className="menu-item"><h4>politics</h4></div>
                  <div className="menu-item"><h4>fashion</h4></div>
                  <div className="menu-item"><h4>covid19</h4></div>
                  <div className="menu-item"><h4>sports</h4></div>
                  <div className="menu-item"><h4>health</h4></div>
                  <div className="menu-item"><h4>law</h4></div>
              </div>
          </div>
        </>
    )
}

export default Menu
