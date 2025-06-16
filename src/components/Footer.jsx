
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Varahi Bird Safety Nets</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional anti-bird control services providing comprehensive safety solutions 
              for residential and commercial properties. Protecting your spaces with quality 
              safety nets and expert installation.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/works" className="text-gray-300 hover:text-primary transition-colors">Previous Works</Link></li>
              <li><Link to="/maintenance" className="text-gray-300 hover:text-primary transition-colors">Maintenance</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">info@varahibirdsafety.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-gray-300">
                  123 Safety Street, Protection City, State - 560001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Varahi Bird Safety Nets. All rights reserved. | Professional Anti-Bird Control Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
