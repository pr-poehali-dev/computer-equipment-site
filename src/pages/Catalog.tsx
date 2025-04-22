import TechNavbar from "@/components/TechNavbar";
import ProductCard, { ProductProps } from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LaptopIcon, MonitorIcon, CpuIcon, KeyboardIcon, HardDriveIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Пример данных товаров для разных категорий
const catalogProducts: ProductProps[] = [
  // Ноутбуки
  {
    id: 1,
    name: "Ноутбук Acer Aspire 7",
    price: 72990,
    image: "/placeholder.svg",
    category: "Ноутбуки",
    description: "Intel Core i5, 16GB RAM, 512GB SSD, GeForce GTX 1650"
  },
  {
    id: 2,
    name: "Ноутбук MSI Modern 15",
    price: 65990,
    image: "/placeholder.svg",
    category: "Ноутбуки",
    description: "Intel Core i7, 8GB RAM, 512GB SSD, Iris Xe Graphics"
  },
  {
    id: 3,
    name: "Ноутбук ASUS TUF Gaming F15",
    price: 89990,
    image: "/placeholder.svg",
    category: "Ноутбуки",
    description: "Intel Core i7, 16GB RAM, 1TB SSD, GeForce RTX 3060"
  },
  // Комплектующие
  {
    id: 4,
    name: "Видеокарта NVIDIA RTX 3060 Ti",
    price: 45990,
    image: "/placeholder.svg",
    category: "Комплектующие",
    description: "8GB GDDR6, PCIe 4.0, Ray Tracing, DLSS"
  },
  {
    id: 5,
    name: "Процессор AMD Ryzen 7 5800X",
    price: 29990,
    image: "/placeholder.svg",
    category: "Комплектующие",
    description: "8 ядер, 16 потоков, 3.8 ГГц, 32 МБ кэш, AM4"
  },
  {
    id: 6,
    name: "SSD Kingston NV2 1TB",
    price: 7990,
    image: "/placeholder.svg",
    category: "Комплектующие",
    description: "M.2 2280, PCIe Gen 4.0 x4, NVMe, до 3500 МБ/с"
  },
  // Периферия
  {
    id: 7,
    name: "Монитор Samsung Odyssey G5",
    price: 29990,
    image: "/placeholder.svg",
    category: "Периферия",
    description: "27\", 2560x1440, 165Hz, VA, 1ms, FreeSync"
  },
  {
    id: 8,
    name: "Клавиатура Logitech G Pro X",
    price: 12990,
    image: "/placeholder.svg",
    category: "Периферия",
    description: "Механическая, RGB, GX Blue, USB, черная"
  },
  {
    id: 9,
    name: "Мышь SteelSeries Rival 3",
    price: 3990,
    image: "/placeholder.svg",
    category: "Периферия",
    description: "8500 DPI, 6 кнопок, RGB, 77g, черная"
  }
];

const Catalog = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>(catalogProducts);
  const [manufacturers, setManufacturers] = useState<Record<string, boolean>>({
    "Acer": false,
    "MSI": false,
    "ASUS": false,
    "NVIDIA": false,
    "AMD": false,
    "Samsung": false,
    "Logitech": false,
    "SteelSeries": false,
    "Kingston": false
  });

  // Фильтрация товаров при изменении активной вкладки, диапазона цен или производителей
  useEffect(() => {
    let filtered = catalogProducts;
    
    // Фильтрация по категории
    if (activeTab !== "all") {
      filtered = filtered.filter(product => product.category === activeTab);
    }
    
    // Фильтрация по цене
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Фильтрация по производителям
    const selectedManufacturers = Object.entries(manufacturers)
      .filter(([_, isSelected]) => isSelected)
      .map(([name]) => name);
    
    if (selectedManufacturers.length > 0) {
      filtered = filtered.filter(product => 
        selectedManufacturers.some(m => product.name.includes(m))
      );
    }
    
    setFilteredProducts(filtered);
  }, [activeTab, priceRange, manufacturers]);

  const handleManufacturerChange = (name: string) => {
    setManufacturers(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const resetFilters = () => {
    setPriceRange([0, 100000]);
    setManufacturers(Object.fromEntries(
      Object.keys(manufacturers).map(key => [key, false])
    ));
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TechNavbar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-2">Каталог товаров</h1>
        <p className="text-tech-gray mb-8">Найдите идеальное компьютерное оборудование для ваших нужд</p>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Сайдбар с фильтрами */}
          <div className="lg:w-1/4 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Фильтры</h3>
            
            <div className="space-y-5">
              <div>
                <h4 className="font-medium mb-2">Цена</h4>
                <div className="px-2">
                  <Slider 
                    value={priceRange}
                    min={0}
                    max={100000}
                    step={1000}
                    onValueChange={setPriceRange}
                    className="my-4"
                  />
                  <div className="flex justify-between text-sm text-tech-gray">
                    <span>{priceRange[0].toLocaleString('ru-RU')} ₽</span>
                    <span>{priceRange[1].toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Производитель</h4>
                <div className="space-y-2">
                  {Object.entries(manufacturers).map(([name, isChecked]) => (
                    <div key={name} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`manufacturer-${name}`} 
                        checked={isChecked}
                        onCheckedChange={() => handleManufacturerChange(name)}
                      />
                      <Label 
                        htmlFor={`manufacturer-${name}`}
                        className="text-sm text-tech-darkBlue"
                      >
                        {name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={resetFilters}
              >
                Сбросить фильтры
              </Button>
            </div>
          </div>
          
          {/* Основная часть с товарами */}
          <div className="lg:w-3/4">
            <Tabs defaultValue="all" className="mb-6" onValueChange={handleTabChange}>
              <TabsList className="w-full flex mb-2 bg-white">
                <TabsTrigger value="all" className="flex-1">
                  Все товары
                </TabsTrigger>
                <TabsTrigger value="Ноутбуки" className="flex-1 flex items-center gap-1">
                  <LaptopIcon className="h-4 w-4" />
                  <span>Ноутбуки</span>
                </TabsTrigger>
                <TabsTrigger value="Комплектующие" className="flex-1 flex items-center gap-1">
                  <CpuIcon className="h-4 w-4" />
                  <span>Комплектующие</span>
                </TabsTrigger>
                <TabsTrigger value="Периферия" className="flex-1 flex items-center gap-1">
                  <KeyboardIcon className="h-4 w-4" />
                  <span>Периферия</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <p className="mb-4 text-tech-gray">Показано {filteredProducts.length} товаров из {catalogProducts.length}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="Ноутбуки" className="mt-0">
                <p className="mb-4 text-tech-gray">Показано {filteredProducts.length} товаров из {catalogProducts.filter(p => p.category === "Ноутбуки").length}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="Комплектующие" className="mt-0">
                <p className="mb-4 text-tech-gray">Показано {filteredProducts.length} товаров из {catalogProducts.filter(p => p.category === "Комплектующие").length}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="Периферия" className="mt-0">
                <p className="mb-4 text-tech-gray">Показано {filteredProducts.length} товаров из {catalogProducts.filter(p => p.category === "Периферия").length}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <footer className="bg-tech-darkBlue text-white py-8 mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <LaptopIcon className="h-6 w-6 text-tech-blue" />
                <span className="font-bold text-xl">ТехноМир</span>
              </div>
              <p className="text-sm text-gray-300 max-w-xs">
                Магазин качественного компьютерного оборудования для работы, учебы и развлечений
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Навигация</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="/" className="hover:text-tech-blue">Главная</a></li>
                  <li><a href="/catalog" className="hover:text-tech-blue">Каталог</a></li>
                  <li><a href="/contact" className="hover:text-tech-blue">Контакты</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Контакты</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>+7 (800) 123-45-67</li>
                  <li>info@техномир.рф</li>
                  <li>г. Москва, ул. Примерная, 123</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-400 text-center">
            © 2023 ТехноМир. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
