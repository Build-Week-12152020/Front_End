import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from './components/login_page/login_page.component'
import './App.css'

function App() {

    // logout function for nav
    const logout = () => {
        localStorage.removeItem('token');
        console.log(`WaterMyPlants: App.js: logout: "log back in`)
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <div className="App-logo">
                        <h1> Water My Plants</h1>
                    </div>
                    {/* nav bar */}
                    <ul className="nav" >
                        <li>
                            <Link to="/login"> Login</Link>
                        </li>
                        <li>
                            <Link to="/myplants">My Plants</Link>
                        </li>
                        <li>
                            <Link to="/add">Add Plant</Link>
                        </li>
                        <li>
                            <Link to="/login" onClick={logout}>Log Out</Link>
                        </li>
                    </ul>
                </header>

                

                {/* main content */}
                <div className="main-content">
                    <Switch>
                        {/* <PrivateRoute exact path="/myplants" component={PlantList} /> */}
                        <Route path="/login" component={LoginPage} />
                    </Switch>
                </div>
               
            </div>
        </Router>
    )
}

export default App
