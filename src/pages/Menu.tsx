
import Navigation from "@/components/Navigation";
import FoodCard from "@/components/FoodCard";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Spaghetti Bolognese",
      price: 14.99,
      image: "/lovable-uploads/5fcdf257-c741-4d02-b46a-c82da3c4d641.png",
      description: "Classic Italian pasta with rich meat sauce and fresh basil"
    },
    {
      id: 2,
      name: "Spicy Crab Curry",
      price: 22.99,
      image: "/lovable-uploads/5c8244a5-a508-4044-8b30-efaeb16bf572.png",
      description: "Fresh crab in aromatic curry sauce with vegetables"
    },
    {
      id: 3,
      name: "Pepperoni Pizza",
      price: 18.99,
      image: "/lovable-uploads/9b42f20c-258b-4358-8b7c-ee8bfa710737.png",
      description: "Wood-fired pizza with premium pepperoni and mozzarella"
    },
    {
      id: 4,
      name: "Margherita Pizza",
      price: 16.99,
      image: "/lovable-uploads/9b42f20c-258b-4358-8b7c-ee8bfa710737.png",
      description: "Traditional pizza with fresh mozzarella, tomatoes, and basil"
    },
    {
      id: 5,
      name: "Seafood Linguine",
      price: 19.99,
      image: "/lovable-uploads/5fcdf257-c741-4d02-b46a-c82da3c4d641.png",
      description: "Fresh linguine with mixed seafood in white wine sauce"
    },
    {
      id: 6,
      name: "Thai Green Curry",
      price: 17.99,
      image: "/lovable-uploads/5c8244a5-a508-4044-8b30-efaeb16bf572.png",
      description: "Authentic Thai green curry with coconut milk and vegetables"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of dishes made with the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
