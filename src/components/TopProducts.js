import React, { useEffect, useState } from "react";
import axios from "axios";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/component_6") 
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Invalid response format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  if (products.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Top Products</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b text-left p-2 text-gray-600">Product</th>
            <th className="border-b text-left p-2 text-gray-600">Sold Amount</th>
            <th className="border-b text-left p-2 text-gray-600">Unit Price</th>
            <th className="border-b text-left p-2 text-gray-600">Revenue</th>
            <th className="border-b text-left p-2 text-gray-600">Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border-b p-2 text-gray-800">{product.product_name}</td>
              <td className="border-b p-2 text-gray-800">{product.sold_amount}</td>
              <td className="border-b p-2 text-gray-800">${product.unit_price}</td>
              <td className="border-b p-2 text-gray-800">${product.revenue}</td>
              <td className="border-b p-2 text-gray-800">{product.rating} ⭐</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;
