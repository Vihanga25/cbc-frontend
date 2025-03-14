import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductNotFound from "./productNotFound";
import ImageSlider from "../../component/imageSlider";
import { addToCart } from "../../utils/cartFunction";
import toast from "react-hot-toast";

export default function ProductOverview() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(productId);
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId)
      .then((res) => {
        console.log(res.data);

        if (res.data == null) {
          setStatus("not-found");
        }

        if (res.data != null) {
          setProduct(res.data);
          setStatus("found");
        }
      });
  }, []);

  function onAddtoCartClick() {
    addToCart(product.productId, 1);
    toast.success(product.productId + " Added to cart");
  }

  function onBuyNowClick() {
    navigate("/shipping", {
      state: {
        items: [
          {
            productId: product.productId,
            qty: 1,
          },
        ],
      },
    });
  }

  return (
    <div className="w-full h-[calc(100vh-100px)] bg-gray-50">
      {status == "loading" && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-4 border-gray-300 border-t-accent"></div>
        </div>
      )}
      {status == "not-found" && <ProductNotFound />}
      {status == "found" && (
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 p-4">
          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-4">
            <h1 className="text-3xl font-semibold text-gray-800 text-center lg:hidden">
              {product.productName}
            </h1>
            <p className="text-xl text-gray-600 text-center lg:hidden">
              {product.price > product.lastPrice && (
                <span className="line-through text-red-500">
                  LKR.{product.price}
                </span>
              )}
              <span className="block text-lg text-gray-800">LKR.{product.lastPrice}</span>
            </p>
            <div className="w-full border-2 border-blue-900 rounded-lg overflow-hidden">
              <ImageSlider images={product.images} />
            </div>
          </div>
          <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-semibold text-gray-800 hidden lg:block">
              {product.productName}
            </h1>
            <h1 className="text-xl font-medium text-gray-500 mb-4">
              {product.altName.join(" | ")}
            </h1>
            <p className="text-xl text-gray-600">
              {product.price > product.lastPrice && (
                <span className="line-through text-red-500">
                  LKR.{product.price}
                </span>
              )}
              <span className="text-xl font-semibold text-gray-900">
                LKR.{product.lastPrice}
              </span>
            </p>
            <p className="text-lg text-gray-600 line-clamp-3 mt-4">{product.description}</p>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={onAddtoCartClick}
                className="bg-accent text-white py-2 px-4 rounded-lg shadow-md hover:bg-accent-dark transition-all"
              >
                Add to Cart
              </button>
              <button
                onClick={onBuyNowClick}
                className="text-accent border-2 border-accent py-2 px-4 rounded-lg shadow-md hover:bg-accent-light hover:text-white transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
