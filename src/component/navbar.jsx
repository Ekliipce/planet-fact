import React, { useEffect, useState } from 'react'
import '../style/navbar.css'
import { Link, useResolvedPath } from 'react-router-dom'
import { planets, color_planet } from '../App'

function MenuDropdown(props){
    const items = planets.map((elm) => {
        return <Link to={`/${elm}`}>
            <div key={elm} id={`menu-dropdown-item-` + elm} 
                 className='menu-dropdown-item'
                 onClick={() => {props.setShow("none")}}>
                <div className='menu-dropdown-subitem-1'>
                    <div className='color' style={{backgroundColor : color_planet[elm]}}></div>
                    <h4 className='menu-dropdown-title'>{elm}</h4>
                </div>
                <div className='menu-dropdown-subitem-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg>
                </div>
            </div>
        </Link>
    })

    return <div className="menu-dropdown-container" style={{display: props.show}}>
        {items}
    </div>
}   

export function Navbar(){
    const [show, setShow] = useState("none");
    const planet_links = planets.map(elm => {
        // const path = useResolvedPath(`/${elm}`)
        return <div className='planet-link'>
            <Link to={`/${elm}`}>
                <h4>{elm}</h4>
            </Link>
        </div> 
        })
    
    const handleClick = () => {
        if (show === "none") setShow("flex")
        else setShow("none")
    }

    return <>
            <div id='navbar'>
                <div id='navbar-title'>
                    <h2>The Planets</h2>
                </div>

                <div id="navbar-planet">
                    {planet_links}
                </div>

                <div id="dropdown-menu" onClick={handleClick}>
                    <div id="button-hambuger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
                    </div>
                </div>
            </div>
            <MenuDropdown show={show} setShow={setShow}/>
        </>
}