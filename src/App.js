import './App.css';
import {Wishlist} from './component/Wishlist';
import {Vegetables} from "./component/Vegetables"
function App() {
  return (
    <>
      <Wishlist />
      <Vegetables tomatoes={10} potatoes={8} carrots={5} onions={7}/>
    </>
  );
}

export default App;
