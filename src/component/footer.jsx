import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="w-full bg-secondary text-primary py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          
          <div>
            <h3 className="font-semibold text-lg text-accent">Contact Us</h3>
            <p className="mt-2 flex items-center gap-2">
              📞 +94 12345678
            </p>
            <p className="mt-2 flex items-center gap-2">
              📧 info@crystalbeautycare.com
            </p>
            <p className="mt-2 flex items-center gap-2">
              📍 Sri Lanka
            </p>
           
            <div className="flex gap-3 mt-3">
              <a href="#" className=" rounded-full"><FaFacebook /></a>
              <a href="#" className=" rounded-full"><FaYoutube /></a>
              <a href="#" className=" rounded-full"><AiFillTikTok /></a>
            </div>
          </div>
  
          
          <div>
            <h3 className="font-semibold text-lg text-accent">Top Categories</h3>
            <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/products" className="hover:text-accent">Products</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
            <li><Link to="/cart" className="hover:text-accent">Cart</Link></li>
              
            </ul>
          </div>
  
        
          <div>
            <h3 className="font-semibold text-lg text-accent">Customer Care</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-accent">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent">Refund Policy</a></li>
              <li><a href="#" className="hover:text-accent">Term of Use</a></li>
            </ul>
          </div>
        </div>
  
        
        <div className="text-center text-sm text-accent mt-6 border-t border-gray-400 pt-3">
          Copyright 2025 © Crystal Beauty Care. All rights reserved.
        </div>
      </footer>
    );
  }
  