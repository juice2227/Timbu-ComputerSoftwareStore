
import { useEffect, useState } from 'react';

const Test = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products?organization_id=8347d91c502a4a5a92f0f85951d2557a&reverse_sort=false&page=1&size=10&Appid=EBUZO6O78AP33DC&Apikey=6c29885f9d4d4469929c4e8c9d463dcf20240710083326482098');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data.items);
            console.log(products)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            {products.map((product) => {
                return (
                    <>
                        <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt="" />
                        <p>{product.name}</p>
                    </>
                )            })}
        </div>
    );
};
export default Test;
