import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
return (<div>
  <nav className='navbar navbar-expand navbar-dark bg-dark'>
     <a href='/tutorials' className='navbar-brand'>
       Sean Rogan Dev
     </a>
     <div className='navbar-nav mr-auto'>
     <li className='nav-item'>
<Link to={"/tutorials"} className='nav-link'>
Tutorials
</Link>
     </li>
     <li className='nav-item'>
     <Link to={"/tutorials"} className='nav-link'>
     Add
     </Link>
     </li>
     </div>
  </nav>
  <div className='container mt-3'>
    <BrowserRouter>
      <Routes>
      <Route path={["/","/tutorials"]} element={<TutorialsList/>}/>
      <Route path="/add" element={<AddTutorial/>}/>
      <Route path="/tutorials/:id" element={<Tutorial/>}/>
      </Routes>
      </BrowserRouter>
  </div>
</div>);
  }
}
export default App;
