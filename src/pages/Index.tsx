import TechNavbar from "@/components/TechNavbar";
import HeroBanner from "@/components/HeroBanner";
import CategorySection from "@/components/CategorySection";
import ProductCard, { ProductProps } from "@/components/ProductCard";
import { LaptopIcon } from "lucide-react";

const featuredProducts: ProductProps[] = [
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
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TechNavbar />
      
      <main className="flex-1">
        <HeroBanner />
        
        <CategorySection />
        
        <section className="py-12 container">
          <div className="flex justify-between items-center mb-6">
            <h2 className="tech-heading text-2xl md:text-3xl">Популярные товары</h2>
            <a href="/catalog" className="text-tech-blue hover:text-tech-purple font-medium">
              Все товары →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <section className="py-12 bg-tech-lightGray">
          <div className="container">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="tech-heading text-2xl mb-4 text-center">Почему выбирают нас</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="bg-tech-blue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <h3 className="font-semibold mb-2">Широкий ассортимент</h3>
                  <p className="text-tech-gray text-sm">Тысячи товаров от ведущих производителей</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-tech-blue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold mb-2">Быстрая доставка</h3>
                  <p className="text-tech-gray text-sm">Доставим заказ в течение 1-3 рабочих дней</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-tech-blue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="font-semibold mb-2">Гарантия и сервис</h3>
                  <p className="text-tech-gray text-sm">Официальная гарантия и поддержка клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-tech-darkBlue text-white py-8">
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

export default Index;
