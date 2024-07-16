import { useState, useEffect } from 'react';

function ProductCard() {
  const [data, setData] = useState([]);

  const api = `https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=8347d91c502a4a5a92f0f85951d2557a&reverse_sort=false&size=10&Appid=EBUZO6O78AP33DC&Apikey=${import.meta.env.VITE_APP_KEY}`;

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(json => setData(json.items))
      .catch(error => {
        console.log("Products not found", error);
      });
  }, [api]);

  console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
      {data.map(item => (
        <div key={item.id} className="border border-yellow-500 rounded-lg overflow-hidden flex flex-col">
          <img 
            src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`} 
            alt={item.name} 
            className="w-full h-auto object-cover"
          />
          <div className="p-4 flex-grow">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <h4 className="text-green-500">{item.current_price[0]?.NGN}</h4>
            <h4 className="text-gray-700">{item.categories.length > 0 ? item.categories[0].name : ""}</h4>
          </div>
          <p className="text-gray-600 p-4">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
