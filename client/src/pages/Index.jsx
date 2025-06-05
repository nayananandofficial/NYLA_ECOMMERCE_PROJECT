import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          FashionHub
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Where style meets personality. Discover your unique fashion journey with us! ✨
        </p>
        <div className="space-y-4">
          <Link to="/auth">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-200 hover:scale-105">
              Get Started
            </Button>
          </Link>
          <p className="text-gray-500">Join thousands of fashion enthusiasts worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default Index;