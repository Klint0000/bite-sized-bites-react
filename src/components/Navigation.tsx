
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Home, Menu as MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

const Navigation = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-orange-600 break-words">
          Bite-Sized Bites
        </Link>
        
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
          <Link to="/">
            <Button 
              variant={isActive("/") ? "default" : "ghost"}
              className={`text-xs sm:text-sm ${isActive("/") ? "bg-orange-600" : ""}`}
              size="sm"
            >
              <Home className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>
          
          <Link to="/menu">
            <Button 
              variant={isActive("/menu") ? "default" : "ghost"}
              className={`text-xs sm:text-sm ${isActive("/menu") ? "bg-orange-600" : ""}`}
              size="sm"
            >
              <MenuIcon className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Menu</span>
            </Button>
          </Link>
          
          <Link to="/cart">
            <Button 
              variant={isActive("/cart") ? "default" : "ghost"}
              className={`relative text-xs sm:text-sm ${isActive("/cart") ? "bg-orange-600" : ""}`}
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
