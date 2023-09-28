const c = console.log.bind(document)

import React from 'react';
import { useState, useEffect } from "react"

import "./style.css"

const TagCloud = () => {

    const loadedValues = ["Auto", "Brambora", "Ananas", "Byt", "Fotbal"]
    const [tags, setTags] = useState(loadedValues)

    let keyValue = 0

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const tagValue = document.querySelector("#tagValue")
        
        setTags([...tags, tagValue.value])
        tagValue.value = ""
    }

    const removeFirst = () => {
        const customized = [...tags]
        customized.splice(0, 1)

        setTags([...customized])
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input id="tagValue" type="text" />
                    <button type='submit'>Přidat</button>
                    <button onClick={removeFirst}>Odstraň první prvek</button>
                </form>
            </div>

            <div>
                {tags.map(tag => <div className='element' key={keyValue++}>{tag}</div>)}
            </div>
        </>
    )
}

export default TagCloud