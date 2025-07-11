
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="aspect-square overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-orange-600">
            ${item.price.toFixed(2)}
          </span>
          <Button 
            onClick={handleAddToCart}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
