const c = console.log.bind(document)

import React, {useState,  useEffect} from "react";


import "./style.css"


const Planets = () => {

    const [planets, setPlanets] = useState([])

    useEffect( () => {

        fetch(`https://swapi.dev/api/planets`)
        .then(response => response.json())
        .then(data => {
            setPlanets(data.results)
        })

    }, [])

    return (
        <div className="planets">
            <ul>
                {planets.map(planet => <li>{planet.name}</li>)}
            </ul>
        </div>
    )
}

export default Planets