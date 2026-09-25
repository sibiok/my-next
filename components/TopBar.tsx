// components/TopBar.tsx
import { Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#20282d] text-white text-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">  
            
       <a href="tel:+15551234567"
          className="flex items-center gap-2 hover:text-gray-300">
          <Phone className="w-4 h-4" />
          +1 (555) 123-4567
        </a>

        <div className="flex items-center gap-4">
           <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <FaTwitter className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
            <FaLinkedinIn className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}