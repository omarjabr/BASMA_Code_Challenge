// import logo from "./logo.svg";
import { ReactComponent as Logo } from "./icons/bulb.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo fill="red" stroke="green" size="200px" />
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faAngleDoubleRight} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
