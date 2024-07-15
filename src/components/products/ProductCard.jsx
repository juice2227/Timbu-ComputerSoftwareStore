
import  { useState, useEffect } from 'react';

function App() {
const [data, setData] = useState([])

 const api = `https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=8347d91c502a4a5a92f0f85951d2557a&reverse_sort=false&size=10&Appid=EBUZO6O78AP33DC&Apikey=${import.meta.env.VITE_APP_KEY}`

 useEffect(()=> {


    fetch(api)
     .then(response => response.json())
     .then(json => setData(json.items))
     .catch(error => {
      setData(error,console.log("products not found"))
     });
    },[api])
   
  return (
    <div className="App">
      {data.map(item =>{
      return(
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <img src={`https://api.timbu.cloud/images/${item.photos[0].url}`} alt={item.name} height={200} width={200} />
          <h4>{item.current_price[0].NGN}</h4>
          <h4>{item.categories[0].name}</h4>
        </div>
      )

      })}
    </div>
  );
}

export default App;
