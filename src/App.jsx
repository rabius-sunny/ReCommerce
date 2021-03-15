import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';

import Header from './components/header/Header';
import Shop from './components/shop/Shop'
import Review from './components/review/Review'
import Inventory from './components/inventory/Inventory'
import ProductDetail from './components/productDetails/ProductDetails'
import NotFound from './components/404/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
