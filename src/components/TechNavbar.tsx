import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { LaptopIcon, ShoppingCartIcon } from "lucide-react";

const TechNavbar = () => {
  return (
    <div className="w-full bg-white shadow-sm py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <LaptopIcon className="h-6 w-6 text-tech-blue" />
          <span className="font-bold text-xl text-tech-darkBlue">ТехноМир</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none hover:bg-tech-lightGray hover:text-tech-blue"
              )}>
                Главная
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/catalog" className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none hover:bg-tech-lightGray hover:text-tech-blue"
              )}>
                Каталог
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact" className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none hover:bg-tech-lightGray hover:text-tech-blue"
              )}>
                Контакты
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-tech-darkBlue hover:text-tech-blue transition-colors">
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Корзина</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechNavbar;
