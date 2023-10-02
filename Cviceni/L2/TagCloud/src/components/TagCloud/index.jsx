const c = console.log.bind(document)

import { useState } from "react"
import './style.scss'

const TagCloud = () => {
    const loadedValues = ["Auto", "Brambora", "Ananas", "Jablko", "Fotbal"]
    const [tags, setTags] = useState(loadedValues)

    const [newTag, setNewTag] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()


        const trimmedTag = newTag.trim();

        //Kontrola, zda tag již existuje či ne
        if( !tags.includes(newTag) && trimmedTag.length > 0){
            setTags([...tags, newTag])

            setNewTag("")
        }
        
        c(tags)
    }

    const removeFirst = () => {
        /* const customized = [...tags]
        customized.splice(0, 1) */

        /* setTags([...customized]) */
        
        setTags(tags.slice(1))
        c(tags)
    }


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input id="tagValue" type="text" value={newTag} onChange={ e => setNewTag(e.currentTarget.value)}/>
                    <button type='submit' disabled={!newTag}>Přidat</button>
                    <button onClick={removeFirst} disabled={tags.length === 0}>Odstraň první prvek</button>
                </form>
            </div>

            <div id="allTags">
                {tags.map( (tag, index) => <div className='element' key={tag}>{tag}</div>)}
            </div>
        </>
    )
}

export default TagCloud