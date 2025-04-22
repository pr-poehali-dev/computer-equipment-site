import TechNavbar from "@/components/TechNavbar";
import ProductCard, { ProductProps } from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";

const products: ProductProps[] = [
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
    name: "Видеокарта NVIDIA RTX 3060",
    price: 35990,
    image: "/placeholder.svg",
    category: "Комплектующие",
    description: "12GB GDDR6, PCIe 4.0, Ray Tracing, DLSS"
  },
  {
    id: 3,
    name: "Монитор Samsung Odyssey G5",
    price: 29990,
    image: "/placeholder.svg",
    category: "Периферия",
    description: "27\", 2560x1440, 165Hz, VA, 1ms, FreeSync"
  },
  {
    id: 4,
    name: "Процессор AMD Ryzen 7 5800X",
    price: 27990,
    image: "/placeholder.svg",
    category: "Комплектующие",
    description: "8 ядер, 16 потоков, 3.8 ГГц, Socket AM4, 105W"
  },
  {
    id: 5,
    name: "Клавиатура Logitech G Pro X",
    price: 11990,
    image: "/placeholder.svg",
    category: "Периферия",
    description: "Механическая, RGB подсветка, USB, черный"
  },
  {
    id: 6,
    name: "Ноутбук ASUS ROG Strix G15",
    price: 129990,
    image: "/placeholder.svg",
    category: "Ноутбуки",
    description: "AMD Ryzen 9, 32GB RAM, 1TB SSD, RTX 3070, 15.6\", 300Hz"
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TechNavbar />
      
      <main className="flex-1 container py-8">
        <h1 className="tech-heading text-3xl mb-6">Каталог товаров</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3">Поиск</h3>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Поиск товаров..." 
                  className="pl-8"
                />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Фильтры</h3>
                <SlidersHorizontal className="h-4 w-4 text-gray-500" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Категории</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="cat-laptops" className="mr-2" />
                      <label htmlFor="cat-laptops" className="text-sm">Ноутбуки</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="cat-components" className="mr-2" />
                      <label htmlFor="cat-components" className="text-sm">Комплектующие</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="cat-peripherals" className="mr-2" />
                      <label htmlFor="cat-peripherals" className="text-sm">Периферия</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Цена</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="От" type="number" />
                    <Input placeholder="До" type="number" />
                  </div>
                </div>
                
                <Button className="w-full tech-button">Применить</Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="mb-6">
              <TabsList>
                <TabsTrigger value="all">Все товары</TabsTrigger>
                <TabsTrigger value="laptops">Ноутбуки</TabsTrigger>
                <TabsTrigger value="components">Комплектующие</TabsTrigger>
                <TabsTrigger value="peripherals">Периферия</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="laptops" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.filter(p => p.category === 'Ноутбуки').map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="components" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.filter(p => p.category === 'Комплектующие').map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="peripherals" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.filter(p => p.category === 'Периферия').map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <footer className="bg-tech-darkBlue text-white py-6 mt-12">
        <div className="container text-center text-sm">
          © 2023 ТехноМир. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
