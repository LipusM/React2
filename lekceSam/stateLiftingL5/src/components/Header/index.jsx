const c = console.log.bind(document)

import './style.scss'

const Header = () => {
  return (
    <header>
      <div className="brand">
        Hračkorama
      </div>
      <span>
        Košík: 450 kč
      </span>
    </header>
  )
}

export default Header