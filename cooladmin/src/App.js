import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Userlist from './Components/Userlist';
import Adduser from './Components/Adduser';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <div className="page-wrapper">
          <div className="page-container">
            <Header />,
            <Sidebar />,
            <div className="main-content">
              <div className="section__content section__content--p30">
                <div className="container-fluid">

                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/userlist" component={Userlist} />
                    <Route exact path="/adduser" component={Adduser} />
                  </Switch>

                  {/* <Dashboard/>,  */}

                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
