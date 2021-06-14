import './App.css';
import ShoppingList from './ShoppingList';
import { useSelector } from 'react-redux';
import ShoppingCart from './ShoppingCart';

function App() {
  const products = useSelector(st => st.products);
  const cart = useSelector(st => st.shoppingCart);
  const cartTotal = useSelector(st => st.cartTotal);
  return (
    <div className="App">
      <ShoppingList products={products} />
      <ShoppingCart cart={cart} total={cartTotal} />
    </div>
  );
}

export default App;
