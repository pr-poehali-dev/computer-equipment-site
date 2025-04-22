import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LaptopIcon, HardDriveIcon, MonitorIcon } from "lucide-react";

interface CategoryProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const categories: CategoryProps[] = [
  {
    id: "laptops",
    name: "Ноутбуки",
    icon: <LaptopIcon className="h-10 w-10 text-tech-blue" />,
    description: "Широкий выбор современных ноутбуков для работы и игр"
  },
  {
    id: "components",
    name: "Комплектующие",
    icon: <HardDriveIcon className="h-10 w-10 text-tech-purple" />,
    description: "Компоненты для сборки и апгрейда компьютера"
  },
  {
    id: "peripherals",
    name: "Периферия",
    icon: <MonitorIcon className="h-10 w-10 text-tech-blue" />,
    description: "Мониторы, клавиатуры, мыши и другие устройства"
  }
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-tech-lightGray">
      <div className="container">
        <h2 className="tech-heading text-2xl md:text-3xl text-center mb-10">Категории товаров</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/catalog?category=${category.id}`}>
              <Card className="tech-card h-full cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {category.icon}
                  </div>
                  <h3 className="tech-heading text-xl mb-2">{category.name}</h3>
                  <p className="text-tech-gray">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
