import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App() {
  return (
  <div className={"container"}>
    <Header/>
    <Navbar/>
    <Content/>
  </div>
  );
}

export default App;
