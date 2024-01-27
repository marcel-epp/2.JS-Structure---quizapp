import App from "./components/App/App.js";
import Card from "./components/Card/Card.js";
import Header from "./components/Header/Header.js";
import CardList from "./components/CardList/Cardlist.js";
import Bookmark from "./components/Bookmark/Bookmark.js";
import Form from "./components/Form/Form.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
