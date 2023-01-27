import { useEffect, useState } from "react";
import { isTemplateExpression } from "typescript";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  // add a side effect to a component when it loads
  // fetching the products from the db [PROMISE]
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  function addProduct() {
    //setProducts([...products, {name: 'prod3', price: 300.00}])
    setProducts(prevState => [...prevState,
      {
        id: prevState.length + 101,
        name: 'prod' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        brand: 'some brand',
        description: 'some desc',
        pictureUrl: 'http://picsum.photos/200'
      }])
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        <li>Products count: {products.length}</li>
        {products.map(product => (
          <li key={product.id}>Name: {product.name} - Price: {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
