import axios from "axios";
import { useEffect, useState } from "react"; 

export default function AdminProductPage() {
    const [products, setProducts] = useState([

        {
            "_id": "67b8c1f4264e346d4e71f6c4",
            "productId": "CSM001",
            "productName": "Hydrating Face Serum",
            "altName": [
                "Moisturizing Serum",
                "Glow Booster"
            ],
            "images": [
                "https://example.com/images/hydrating-serum-1.jpg",
                "https://example.com/images/hydrating-serum-2.jpg"
            ],
            "price": 29.99,
            "lastPrice": 34.99,
            "stock": 50,
            "description": "A lightweight, fast-absorbing serum infused with hyaluronic acid and vitamin C to deeply hydrate and brighten your skin.",
            "__v": 0
        },
        {
            "_id": "67b8c79bc0a163e0cdda96b6",
            "productId": "CSM002",
            "productName": "Hydrating Face Serum",
            "altName": [
                "Moisturizing Serum",
                "Glow Booster"
            ],
            "images": [
                "https://example.com/images/hydrating-serum-1.jpg",
                "https://example.com/images/hydrating-serum-2.jpg"
            ],
            "price": 29.99,
            "lastPrice": 34.99,
            "stock": 50,
            "description": "A lightweight, fast-absorbing serum infused with hyaluronic acid and vitamin C to deeply hydrate and brighten your skin.",
            "__v": 0
        },
        {
            "_id": "67b9dec2c6f70593ab89f1b4",
            "productId": "CSM003",
            "productName": "Blue Butter Body lotion",
            "altName": [
                "Moisturizing Serum",
                "Glow Booster"
            ],
            "images": [
                "https://example.com/images/hydrating-serum-1.jpg",
                "https://example.com/images/hydrating-serum-2.jpg"
            ],
            "price": 29.99,
            "lastPrice": 34.99,
            "stock": 100,
            "description": "A lightweight, fast-absorbing serum infused with hyaluronic acid and vitamin C to deeply hydrate and brighten your skin.",
            "__v": 0
        }

    ]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
            });
    }, []);

    return (
        <div>
            <h1>Admin Product Page</h1>

            {
            products.map(
                (product,index) => (
                    return{
                        <div key={product._id}>
                         {index}
                         {product.productName}
                     </div>
                    }
                
            ))}
        </div>
    );
}
