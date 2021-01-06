import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from './components/login_page/login_page.component';
import PlantPage from './components/plant_page/plant_page.component';
// import AddPlant from './components/AddPlantForm';

import thunk from "redux-thunk";
import rootReducer from "./components/reducers/plantReducer";
import './App.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {

    // logout function for nav
    const logout = () => {
        localStorage.removeItem('token');
        console.log(`WaterMyPlants: App.js: logout: "log back in`)
    };

    return (
        <Provider store={store}>
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
                                <Link to="/plantlist">My Plants</Link>
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
                            <PrivateRoute exact path="/plantlist" component={PlantPage} />
                            <Route path="/login" component={LoginPage}  />
                        </Switch>
                    </div>
                
                </div>
            </Router>
        </Provider>
    );
}


