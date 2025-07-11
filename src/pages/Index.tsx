
import { Link } from "react-router-dom";
import { Utensils, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FoodCard from "@/components/FoodCard";

const Index = () => {
  const featuredMeals = [
    {
      id: 1,
      name: "Spaghetti Bolognese",
      price: 14.99,
      image: "/lovable-uploads/5fcdf257-c741-4d02-b46a-c82da3c4d641.png",
      description: "Classic Italian pasta with rich meat sauce"
    },
    {
      id: 2,
      name: "Spicy Crab Curry",
      price: 22.99,
      image: "/lovable-uploads/5c8244a5-a508-4044-8b30-efaeb16bf572.png",
      description: "Fresh crab in aromatic curry sauce"
    },
    {
      id: 3,
      name: "Pepperoni Pizza",
      price: 18.99,
      image: "/lovable-uploads/9b42f20c-258b-4358-8b7c-ee8bfa710737.png",
      description: "Wood-fired pizza with premium toppings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in break-words">
            Bite-Sized Bites
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Delicious meals delivered fresh to your door. From Italian classics to exotic curries, 
            we bring the world's finest flavors directly to you.
          </p>
          <Link to="/menu">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3">
              Order Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Utensils className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">Only the freshest, highest quality ingredients in every dish</p>
            </div>
            <div className="p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
              <p className="text-gray-600">Hot meals delivered in 30 minutes or less</p>
            </div>
            <div className="p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Truck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free delivery on orders over $25</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Meals */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            Featured Meals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredMeals.map((meal) => (
              <FoodCard key={meal.id} item={meal} />
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/menu">
              <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
