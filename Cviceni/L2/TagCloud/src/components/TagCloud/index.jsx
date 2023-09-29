const c = console.log.bind(document)

import { useState } from "react"
import './style.scss'

const TagCloud = () => {
    const loadedValues = ["Auto", "Brambora", "Ananas", "Byt", "Fotbal"]
    const [tags, setTags] = useState(loadedValues)

    const [newTag, setNewTag] = useState("")

    /* let keyValue = 0 */

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const tagValue = document.querySelector("#tagValue")
        
        /* setTags([...tags, tagValue.value]) */
        setTags([...tags, newTag])
        /* tagValue.value = "" */
        
        setNewTag("")
        c(loadedValues)
    }

    const removeFirst = () => {
        /* const customized = [...tags]
        customized.splice(0, 1) */

        /* setTags([...customized]) */
        setTags(tags.slice(1))
        c(loadedValues)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input id="tagValue" type="text" value={newTag} onChange={ e => setNewTag(e.currentTarget.value)}/>
                    <button type='submit'>Přidat</button>
                    <button onClick={removeFirst}>Odstraň první prvek</button>
                </form>
            </div>

            <div>
                {tags.map( (tag, index) => <div className='element' key={index}>{tag}</div>)}
            </div>
        </>
    )
}

export default TagCloud