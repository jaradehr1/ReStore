import { useState } from "react";
import { isTemplateExpression } from "typescript";

function App() {
  const [products, setProducts] = useState([
    {name: 'prod1', price: 100.00},
    {name: 'prod2', price: 200.00}]
  );

  function addProduct() {
    //setProducts([...products, {name: 'prod3', price: 300.00}])
    setProducts(prevState => [...prevState,
      {name: 'prod' + (prevState.length + 1), price: (prevState.length * 100) + 100}])
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        <li>Products count: {products.length}</li>
        {products.map((product, index) => (
          <li key={index}>Name: {product.name} - Price: {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;