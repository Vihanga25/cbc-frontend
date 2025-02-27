import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

export default function AdminProductPage() {
    const [products, setProducts] = useState([]);

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
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Admin Product Page</h1>
            
            <div className="overflow-x-auto shadow-xl rounded-lg bg-white">
                <table className="min-w-full table-auto bg-white border-separate border-spacing-0 rounded-lg">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            {['Product ID', 'Product Name', 'Price', 'Last Price', 'Stock', 'Description', 'Action'].map((header) => (
                                <th key={header} className="px-6 py-3 text-left font-medium text-sm uppercase tracking-wider">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                                <td className="px-6 py-4 border-b border-gray-200">{product.productId}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{product.productName}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-green-600 font-semibold">${product.price}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-red-600 ">${product.lastPrice}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{product.stock}</td>
                                <td className="px-6 py-4 border-b border-gray-200 max-w-xs truncate">{product.description}</td>
                                <td className="px-6 py-4 border-b border-gray-200 flex items-center gap-4">
                                    <button className="text-red-500 hover:text-red-700 transition-colors duration-200 p-2 rounded-lg hover:bg-red-100">
                                        <FaTrash />
                                    </button>
                                    <button className="text-blue-500 hover:text-blue-700 transition-colors duration-200 p-2 rounded-lg hover:bg-blue-100">
                                        <FaPencilAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
