import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom'
import { Planet } from './component/planet';

import mercury from './assets/planet-mercury.svg'
import venus from './assets/planet-venus.svg'
import earth from './assets/planet-earth.svg'
import mars from './assets/planet-mars.svg'
import jupiter from './assets/planet-jupiter.svg'
import saturn from './assets/planet-saturn.svg'
import uranus from './assets/planet-uranus.svg'
import neptune from './assets/planet-neptune.svg'
import mercury_internal from './assets/planet-mercury-internal.svg'
import venus_internal from './assets/planet-venus-internal.svg'
import earth_internal from './assets/planet-earth-internal.svg'
import mars_internal from './assets/planet-mars-internal.svg'
import jupiter_internal from './assets/planet-jupiter-internal.svg'
import saturn_internal from './assets/planet-saturn-internal.svg'
import uranus_internal from './assets/planet-uranus-internal.svg'
import neptune_internal from './assets/geology-neptune.png'
import mercury_geology from './assets/geology-mercury.png'
import venus_geology from './assets/geology-venus.png'
import earth_geology from './assets/geology-earth.png'
import mars_geology from './assets/geology-mars.png'
import jupiter_geology from './assets/geology-jupiter.png'
import saturn_geology from './assets/geology-saturn.png'
import uranus_geology from './assets/geology-uranus.png'
import neptune_geology from './assets/geology-neptune.png'

export const img_planet = {'Mercury': [mercury, mercury_internal, mercury_geology],
                           'Venus': [venus, venus_internal, venus_geology],
                           'Earth': [earth, earth_internal, earth_geology],
                           'Mars': [mars, mars_internal, mars_geology],
                           'Jupiter': [jupiter, jupiter_internal, jupiter_geology],
                           'Saturn': [saturn, saturn_internal, saturn_geology],
                           'Uranus': [uranus, uranus_internal, uranus_geology],
                           'Neptune': [neptune, neptune_internal, neptune_geology]}

export const planets = ['Mercury',
                        'Venus',
                        'Earth',
                        'Mars',
                        'Jupiter',
                        'Saturn',
                        'Uranus',
                        'Neptune']

export const color_planet = {
  Mercury: '#419EBB',
  Venus: '#EDA249',
  Earth: '#6f2ed6',
  Mars: '#D14C32',
  Jupiter: '#D83A34',
  Saturn: '#CD5120',
  Uranus: '#1ec2a4',
  Neptune: '#2d68f0'
}

export const data = require('./data.json');

function App() {
  const routes = planets.map(elm => <Route path={`/${elm}`} 
                                           element={<Planet planet={elm}
                                                            color={color_planet[`${elm}`]}
                                                            img={img_planet[`${elm}`]}/>}
                                           />)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Planet planet="mercury"
                                         color={color_planet[`Mercury`]}
                                         img={img_planet[`Mercury`]}/>}/>
        {routes}
      </Routes>
    </div>
  );
}

export default App;
