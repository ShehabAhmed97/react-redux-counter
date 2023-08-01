import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./State/Slices/Users.slice";
import "./App.css";
import { getProducts } from "./State/Slices/Products.slice";

function App() {
  const { products, users } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>My RTK app</h1>
      <button onClick={() => dispatch(getUsers())}>Get users</button>
      <button onClick={() => dispatch(getProducts())}>Get products</button>

      <h3>Users list</h3>
      {users.users.map((user) => (
        <p>{user}</p>
      ))}

      <h3>Products list</h3>
      {products.products.map((user) => (
        <p>{user}</p>
      ))}
    </div>
  );
}

export default App;
