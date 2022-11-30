import React, { useEffect, useState } from 'react'
import { data } from '../App'
import { Navbar } from './navbar'

import '../style/planet.css'

export function ButtonPlanet(props){
    var classes = "button-planet "
    if (props.bg_color != 'transparent')
        classes = "button-planet-active"
    
    return <button className={classes} 
                   onClick={props.cliq}
                   style={{backgroundColor: props.bg_color}}>
            <h3 className='button-num'>{props.num}</h3>
            <h3 className='button-text'>{props.text}</h3>
        </button>
}

function PlanetContainer(props){
    const [view, setView] = useState('overview')
    const [bg_color_1, setColor1] = useState(props.color)
    const [bg_color_2, setColor2] = useState('transparent')
    const [bg_color_3, setColor3] = useState('transparent')
    const [img, setImg] = useState(props.img[0])

    useEffect(() => {
        setView('overview')
        setImg(props.img[0])
        setColor1(props.color)
        setColor2('transparent')
        setColor3('transparent')
    }, [props.color])

    const planet = data.find(elm => {
        return elm.name.toLocaleLowerCase() === props.planet.toLocaleLowerCase()
    })
    
    
    const handleClick = (e) => {
        const elm = e.target.innerText.toLocaleLowerCase()
        if (elm.includes('01') || elm.includes("overview")){
            setView('overview')
            setImg(props.img[0])
            setColor1(props.color)
            setColor2('transparent')
            setColor3('transparent')
        }else if(elm.includes('02') || elm.includes("structure")){
            setView('structure')
            setImg(props.img[1])
            setColor1('transparent')
            setColor2(props.color)
            setColor3('transparent')
        }else{
            setView('geology')
            setImg(props.img[0])
            setColor1('transparent')
            setColor2('transparent')
            setColor3(props.color)
        }
    }
 
    return <><div className='planet-button-navbar-container'>
        <div className="button-navbar-item " onClick={handleClick} 
                style={{borderBottomColor: bg_color_1}}>
            <span className={bg_color_1}>overview</span>
        </div>
        <div className="button-navbar-item " onClick={handleClick} 
                style={{borderBottomColor: bg_color_2}}>
            <span className={bg_color_2}>structure</span>
        </div>
        <div className="button-navbar-item " onClick={handleClick} 
                style={{borderBottomColor: bg_color_3}}>
            <span className={bg_color_3}>surface</span>
        </div>
    </div> 
    <div id='planet-container'>
        <div className='img-planet'>
            <img src={img} alt={props.planet} class='img-planet-img'/>
            <img src={props.img[2]} className={`${view} geology-planet`}/>
        </div>

        <div className='planet-info'>
            <div className='planet-info-1'>
                <h1>{planet.name}</h1>
                <p>{planet[`${view}`].content}</p>
                <div className='planet-source'>
                    <span>Source : <a href={planet[`${view}`].source}>Wikipédia</a></span> 
                </div>
            </div>
            <div className='planet-button-container'>
                <ButtonPlanet text="overview" num='01' cliq={handleClick}
                              bg_color={bg_color_1}/>
                <ButtonPlanet text="internal structure" num='02' cliq={handleClick}
                              bg_color={bg_color_2}/>
                <ButtonPlanet text="surface geology" num='03' cliq={handleClick}
                              bg_color={bg_color_3}/>
            </div> 
        </div>
    </div>
    </>
}

export function PlanetLearn(props){
    const planet = data.find(elm => {
        return elm.name.toLocaleLowerCase() === props.planet.toLocaleLowerCase()
    })

    return  <div className='planet-learn-container'>
        <div className='planet-item'>
            <h4>Rotation time</h4>
            <h2>{planet.rotation}</h2>
        </div>
        <div className='planet-item'>
            <h4>Revolution Time</h4>
            <h2>{planet.revolution}</h2>
        </div> 
        <div className='planet-item'>
            <h4>Radius</h4>
            <h2>{planet.radius}</h2>
        </div>
        <div className='planet-item' id='planet-temp'>
            <h4>Average Temp</h4>
            <h2>{planet.temperature}</h2>
        </div>
    </div>  
}

export function Planet(props){
    const color = props.color
    const img = props.img

    return <>
        <Navbar/>
        <PlanetContainer planet={props.planet} color={color} img={img}/>
        <PlanetLearn planet={props.planet}/>
    </>
}