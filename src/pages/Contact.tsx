import TechNavbar from "@/components/TechNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPinIcon, PhoneIcon, MailIcon, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TechNavbar />
      
      <main className="flex-1">
        <div className="bg-tech-lightGray py-8">
          <div className="container">
            <h1 className="tech-heading text-3xl mb-2">Контакты</h1>
            <p className="text-tech-gray">Свяжитесь с нами любым удобным способом</p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="tech-heading text-2xl mb-6">Наши контакты</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-tech-blue/10 p-3 rounded-full">
                    <MapPinIcon className="h-5 w-5 text-tech-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Адрес</h3>
                    <p className="text-tech-gray">г. Москва, ул. Примерная, 123, ТЦ "Технополис", 2 этаж</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-tech-blue/10 p-3 rounded-full">
                    <PhoneIcon className="h-5 w-5 text-tech-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Телефон</h3>
                    <p className="text-tech-gray">+7 (800) 123-45-67</p>
                    <p className="text-tech-gray">+7 (495) 987-65-43</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-tech-blue/10 p-3 rounded-full">
                    <MailIcon className="h-5 w-5 text-tech-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-tech-gray">info@техномир.рф</p>
                    <p className="text-tech-gray">support@техномир.рф</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-tech-blue/10 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-tech-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Часы работы</h3>
                    <p className="text-tech-gray">Пн-Пт: 10:00 - 20:00</p>
                    <p className="text-tech-gray">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="tech-heading text-lg mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-tech-blue/10 p-3 rounded-full hover:bg-tech-blue/20 transition-colors">
                    <span className="text-lg">📱</span>
                  </a>
                  <a href="#" className="bg-tech-blue/10 p-3 rounded-full hover:bg-tech-blue/20 transition-colors">
                    <span className="text-lg">💬</span>
                  </a>
                  <a href="#" className="bg-tech-blue/10 p-3 rounded-full hover:bg-tech-blue/20 transition-colors">
                    <span className="text-lg">📹</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="tech-heading text-2xl mb-6">Напишите нам</h2>
              
              <form className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Тема</label>
                  <Input placeholder="Тема сообщения" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Сообщение</label>
                  <Textarea placeholder="Ваше сообщение..." rows={5} />
                </div>
                
                <Button className="w-full tech-button">Отправить сообщение</Button>
              </form>
              
              <div className="mt-8">
                <h3 className="tech-heading text-lg mb-4">Карта проезда</h3>
                <div className="bg-gray-200 h-56 rounded-lg overflow-hidden">
                  {/* Here would be a map component, but using a placeholder for now */}
                  <div className="w-full h-full flex items-center justify-center bg-tech-blue/10">
                    <MapPinIcon className="h-8 w-8 text-tech-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-tech-darkBlue text-white py-6">
        <div className="container text-center text-sm">
          © 2023 ТехноМир. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
