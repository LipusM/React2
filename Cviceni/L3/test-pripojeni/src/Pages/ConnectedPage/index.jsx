const c = console.log.bind(document);

import "./style.scss";
import Offline from "../../components/Offline";


const ConnectedPage = () => {

  return (
    <div className="container">
      <h1>Test připojení</h1>
        <Offline />
    </div>
  )

}

export default ConnectedPage;
