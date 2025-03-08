import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utils/mediaUpload";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit() {
    setLoading(true);
    try {
      const altNames = alternativeNames.split(",");

      let imgUrls = [];
      if (imageFiles.length > 0) {
        const uploadPromises = imageFiles.map((file) => uploadMediaToSupabase(file));
        imgUrls = await Promise.all(uploadPromises);
      }

      const product = {
        productId,
        productName,
        altNames,
        images: imgUrls,
        price,
        lastPrice,
        stock,
        description,
      };

      const token = localStorage.getItem("token");

      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/products", product, {
        headers: { Authorization: "Bearer " + token },
      });

      if (response.status === 201) {
        toast.success("Product added successfully");
        navigate("/admin/products");
      } else {
        toast.error("Failed to add product");
      }
    } catch (err) {
      toast.error("Error: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Add Product Form</h1>
        <div className="space-y-4">
          <Input label="Product ID" value={productId} onChange={setProductId} />
          <Input label="Product Name" value={productName} onChange={setProductName} />
          <Input label="Alternative Names" value={alternativeNames} onChange={setAlternativeNames} placeholder="Comma-separated" />
          <FileInput label="Product Images" onChange={(e) => setImageFiles([...e.target.files])} multiple />
          <Input label="Price" type="number" value={price} onChange={setPrice} />
          <Input label="Last Price" type="number" value={lastPrice} onChange={setLastPrice} />
          <Input label="Stock" type="number" value={stock} onChange={setStock} />
          <Textarea label="Description" value={description} onChange={setDescription} />

          <button
            type="submit"
            className={`w-full px-4 py-2 text-white font-medium rounded-md focus:outline-none ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </div>
      </div>
    </div>
  );
}

const Input = ({ label, type = "text", value, onChange, placeholder = "" }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 font-medium">{label}</label>
    <input
      type={type}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const FileInput = ({ label, onChange, multiple = false }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 font-medium">{label}</label>
    <input type="file" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none" onChange={onChange} multiple={multiple} />
  </div>
);

const Textarea = ({ label, value, onChange }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 font-medium">{label}</label>
    <textarea
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
