import logo from './logo.svg';
import './App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import { Navbar } from './component/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './component/Home';
import { Footer } from './component/Footer';
import Login from './component/Login';
function App() {
  return (
    <>
     <div>
     <Router>
     <Navbar />
     
      <div className="app-container">
        <Switch>  
        <Route exact path="/"  component={Home}  > <Home /> </Route> 
          <Route path="/Navbar" component={Navbar} > <Navbar/> </Route>
          <Route path="/Footer" component={Footer} > <Footer/> </Route>
          <Route path="/Login" component={Login} > <Login/> </Route>
        </Switch>   
      </div> <br />
     <Footer />
    </Router>   
     </div>
    </>
  );
}

export default App;
