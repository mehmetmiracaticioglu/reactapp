import './App.css';
import Navbar from './component/Navbar';
import User from './component/User';

function App() {
  return (
    <div className="container">
    <Navbar title ="User App "/>
    <hr/>
    <User
    name="Mehmet"
    departman="Yazılım"
    salary="5000"/>

  <User
    name="can"
    departman="servis"
    salary="5500"/>
    </div>
  );
}

export default App;
