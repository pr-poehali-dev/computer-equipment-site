import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-tech-darkBlue to-tech-purple text-white py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Лучшее компьютерное оборудование для вас
            </h1>
            <p className="text-lg opacity-90">
              Мы предлагаем широкий выбор современного и качественного компьютерного оборудования по доступным ценам
            </p>
            <div className="flex gap-4 pt-2">
              <Button 
                asChild
                className="bg-white text-tech-darkBlue hover:bg-tech-blue hover:text-white"
              >
                <Link to="/catalog">
                  Смотреть каталог
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="Компьютерное оборудование" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
