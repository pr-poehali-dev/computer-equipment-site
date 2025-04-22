import { 
  LaptopIcon, 
  CpuIcon, 
  MonitorIcon, 
  KeyboardIcon, 
  MouseIcon, 
  HardDriveIcon, 
  SpeakerIcon, 
  HeadphonesIcon 
} from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryItemProps {
  icon: React.ReactNode;
  name: string;
  count: number;
  to: string;
}

const CategoryItem = ({ icon, name, count, to }: CategoryItemProps) => {
  return (
    <Link to={to} className="bg-white rounded-lg p-4 flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
      <div className="w-12 h-12 bg-tech-blue/10 text-tech-blue rounded-full flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="font-medium text-tech-darkBlue">{name}</h3>
      <p className="text-tech-gray text-sm mt-1">{count} товаров</p>
    </Link>
  );
};

const CategorySection = () => {
  return (
    <section className="py-12 bg-tech-lightGray">
      <div className="container">
        <h2 className="tech-heading text-2xl md:text-3xl mb-8 text-center">Категории товаров</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <CategoryItem 
            icon={<LaptopIcon className="h-6 w-6" />} 
            name="Ноутбуки" 
            count={48} 
            to="/catalog?category=laptops" 
          />
          
          <CategoryItem 
            icon={<CpuIcon className="h-6 w-6" />} 
            name="Комплектующие" 
            count={124} 
            to="/catalog?category=components" 
          />
          
          <CategoryItem 
            icon={<MonitorIcon className="h-6 w-6" />} 
            name="Мониторы" 
            count={35} 
            to="/catalog?category=monitors" 
          />
          
          <CategoryItem 
            icon={<KeyboardIcon className="h-6 w-6" />} 
            name="Клавиатуры" 
            count={42} 
            to="/catalog?category=keyboards" 
          />
          
          <CategoryItem 
            icon={<MouseIcon className="h-6 w-6" />} 
            name="Мыши" 
            count={56} 
            to="/catalog?category=mice" 
          />
          
          <CategoryItem 
            icon={<HardDriveIcon className="h-6 w-6" />} 
            name="Накопители" 
            count={73} 
            to="/catalog?category=storage" 
          />
          
          <CategoryItem 
            icon={<SpeakerIcon className="h-6 w-6" />} 
            name="Колонки" 
            count={27} 
            to="/catalog?category=speakers" 
          />
          
          <CategoryItem 
            icon={<HeadphonesIcon className="h-6 w-6" />} 
            name="Наушники" 
            count={64} 
            to="/catalog?category=headphones" 
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
