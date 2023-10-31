const c = console.log.bind(document);

import { usePrefs } from "../../prefs-context";
import "./style.scss";

const Header = () => {
  const { handleVegan } = usePrefs();

  const handleChange = (e) => {
    if (e.target.value === "false") {
      handleVegan(false);
    } else {
      handleVegan(true);
    }
  };

  return (
    <header>
      <div className="pizza" />
      <h1>Build your own pizza</h1>
      <select onChange={handleChange}>
        <option value={true}>Vegan only</option>
        <option value={false}>All</option>
      </select>
    </header>
  )
}

export default Header;
