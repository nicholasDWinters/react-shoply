import './App.css';
import ShoppingList from './ShoppingList';
import ShoppingCart from './ShoppingCart';
import NavBar from './NavBar';
import ProductDetails from './ProductDetails';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

function App() {
  const products = useSelector(st => st.products);
  const cart = useSelector(st => st.shoppingCart);
  const cartTotal = useSelector(st => st.cartTotal);
  return (
    <div className="App">
      <NavBar cart={cart} total={cartTotal} />
      <Switch>
        <Route exact path='/'><ShoppingList products={products} /></Route>
        <Route exact path='/cart'><ShoppingCart cart={cart} total={cartTotal} /></Route>
        <Route path='/products/:id'><ProductDetails products={products} /></Route>
      </Switch>


    </div>
  );
}

export default App;
