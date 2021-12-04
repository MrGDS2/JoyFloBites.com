import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from '../src/Components/LandingPage/LandingPage';
import ProductsPage from '../src/Components/ProductPage/ProductPage';
import ItemPage from '../src/Components/ItemPurchase/ItemPurchase';
import NavigationBar from '../src/Components/NavigationBar/NavigationBar';
import './App.scss';
import HeaderPage from './Components/HeaderPage/HeaderPage';
import reportWebVitals from './reportWebVitals';


const routing = (
  <Router>
          <HeaderPage/>
           <NavigationBar/>
          <Switch>
                  <Route path='/' exact component={LandingPage} />
                  <Route path='/Products' exact component={ProductsPage} />
                  <Route path='/Item' exact component={ItemPage} />
                  {/* <Route path='/About' exact component={AboutPage} />
                  <Route path='/Services' exact component={ServicePage} />
                  <Route path='/Contact' exact component={ContactPage} /> */}
          </Switch>
          
        
  </Router>

)

ReactDOM.render(
routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
