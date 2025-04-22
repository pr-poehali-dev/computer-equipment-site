import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-tech-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Страница не найдена</h2>
        <p className="text-tech-gray mb-6">
          Извините, но страница, которую вы ищете, не существует или была перемещена.
        </p>
        
        <Button asChild className="mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <HomeIcon className="h-4 w-4" />
            Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
