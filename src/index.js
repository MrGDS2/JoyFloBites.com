import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from '../src/Components/LandingPage/LandingPage';
import ProductsPage from '../src/Components/ProductPage/ProductPage';
import ItemPage from '../src/Components/ItemPurchase/ItemPurchase';
import OrderModule from './Components/OrderModule/OrderModule';
import NavigationBar from '../src/Components/NavigationBar/NavigationBar';
import HeaderPage from './Components/HeaderPage/HeaderPage';
import reportWebVitals from './reportWebVitals';
import SlackCommunityPage from './Components/SlackCommunityPage/SlackCommunityPage';
import Footer from './Components/Footer/Footer';
import './App.scss';




const routing = (
  <Router>
          <HeaderPage/>
           <NavigationBar/>
          <Switch>
                  <Route path='/' exact component={LandingPage} />
                  <Route path='/products' exact component={ProductsPage} />
                  <Route path='/item' exact component={ItemPage} />
                  <Route path='/order' exact component={OrderModule} />
                  <Route path='/community' exact component={SlackCommunityPage} />
                  {/* <Route path='/About' exact component={AboutPage} />
                  <Route path='/Services' exact component={ServicePage} />
                  <Route path='/Contact' exact component={ContactPage} /> */}
    </Switch>
    <Footer />

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