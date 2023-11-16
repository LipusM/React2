const c = console.log.bind(document)

import "./style.scss"

const SideBar = ({title, children}) => {

    return (
        <aside className="sidebar">
            <h2>{title}</h2>
            {children}
            <hr />
        </aside>
    )
}

export default SideBar