import TechNavbar from "@/components/TechNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, LaptopIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ContactItem = ({ icon, title, content }: { 
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}) => (
  <div className="flex gap-4 items-start p-4 bg-white rounded-lg shadow-sm">
    <div className="bg-tech-blue/10 p-3 rounded-full text-tech-blue">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <div className="text-tech-gray">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки данных
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время!",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TechNavbar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-2">Свяжитесь с нами</h1>
        <p className="text-tech-gray mb-8">У вас есть вопросы или нужна консультация? Мы всегда рады помочь!</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <ContactItem 
            icon={<Phone className="h-6 w-6" />}
            title="Телефон"
            content={
              <div className="space-y-1">
                <p>+7 (800) 123-45-67</p>
                <p className="text-sm text-gray-500">Пн-Пт: 9:00 - 20:00</p>
                <p className="text-sm text-gray-500">Сб-Вс: 10:00 - 18:00</p>
              </div>
            }
          />
          
          <ContactItem 
            icon={<Mail className="h-6 w-6" />}
            title="Email"
            content={
              <div className="space-y-1">
                <p>info@техномир.рф</p>
                <p>support@техномир.рф</p>
                <p className="text-sm text-gray-500">Ответим в течение 24 часов</p>
              </div>
            }
          />
          
          <ContactItem 
            icon={<MapPin className="h-6 w-6" />}
            title="Адрес"
            content={
              <div className="space-y-1">
                <p>г. Москва, ул. Примерная, 123</p>
                <p className="text-sm text-gray-500">Метро "Технологическая"</p>
                <p className="text-sm text-gray-500">ТЦ "Техноград", 2 этаж</p>
              </div>
            }
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm order-2 lg:order-1">
            <h2 className="text-xl font-semibold mb-4">Отправить сообщение</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium text-tech-darkBlue">
                    Ваше имя
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-tech-darkBlue">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Введите email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium text-tech-darkBlue">
                  Тема сообщения
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Укажите тему сообщения"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-tech-darkBlue">
                  Сообщение
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Введите ваше сообщение..."
                  rows={6}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-tech-blue hover:bg-tech-purple"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="lg:order-2 order-1">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-semibold mb-4">Часто задаваемые вопросы</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Как долго длится доставка?</h3>
                  <p className="text-sm text-tech-gray">Доставка по Москве осуществляется в течение 1-2 дней, в регионы – 3-7 дней в зависимости от удаленности.</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Какая гарантия на товары?</h3>
                  <p className="text-sm text-tech-gray">Мы предоставляем официальную гарантию производителя на все товары, обычно это 12-36 месяцев в зависимости от категории.</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Можно ли вернуть или обменять товар?</h3>
                  <p className="text-sm text-tech-gray">Да, вы можете вернуть товар надлежащего качества в течение 14 дней с момента покупки, если он не подошел.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-tech-blue/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Режим работы</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Понедельник – Пятница</span>
                  <span className="font-medium">9:00 – 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота</span>
                  <span className="font-medium">10:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье</span>
                  <span className="font-medium">10:00 – 18:00</span>
                </div>
              </div>
              
              <div className="text-sm text-tech-darkBlue">
                <p>Технический перерыв: 14:00 – 14:30</p>
                <p>В праздничные дни график работы может меняться</p>
              </div>
            </div>
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

export default Contact;
