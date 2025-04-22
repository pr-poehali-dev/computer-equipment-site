import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div className="tech-card animate-fade-in">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={product.image || "/placeholder.svg"} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-tech-blue text-white text-xs px-2 py-1 rounded">
          {product.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="tech-heading text-lg mb-1 truncate">{product.name}</h3>
        <p className="text-tech-gray text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-tech-darkBlue">
            {product.price.toLocaleString("ru-RU")} ₽
          </span>
          
          <Button 
            variant="outline"
            size="sm"
            className="tech-button flex items-center gap-1 px-3"
          >
            <ShoppingCartIcon className="h-4 w-4" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
