
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Index = () => {
  const [totalCount, setTotalCount] = useState(0);
  
  const companies = [
    { name: "Google", count: 221 },
    { name: "Palantir", count: 3 },
    { name: "Lockheed Martin", count: 73 },
    { name: "White House", count: 18 },
    { name: "Salesforce", count: 382 }
  ];

  useEffect(() => {
    const total = companies.reduce((sum, company) => sum + company.count, 0);
    setTotalCount(total);
  }, []);

  const handleJoinMovement = () => {
    console.log("User clicked to join the movement!");
    // This would typically redirect to a signup form or modal
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Banner */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight">
            BAN CHAIRS
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Standing up for a better tomorrow
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center px-4">
        {/* CTA Button */}
        <div className="mb-16">
          <Button 
            onClick={handleJoinMovement}
            className="bg-black text-white hover:bg-gray-800 text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Join the Movement
          </Button>
        </div>

        {/* Scrolling Company Banner */}
        <div className="w-full max-w-6xl overflow-hidden bg-gray-50 py-4 rounded-lg shadow-inner">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <span key={`first-${index}`} className="inline-flex items-center mx-8 text-lg md:text-xl font-medium text-gray-800">
                <span className="font-bold">{company.name}</span>
                <span className="mx-2">:</span>
                <span className="text-green-600 font-bold">{company.count}</span>
                {index < companies.length - 1 && <span className="mx-4 text-gray-400">•</span>}
              </span>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {companies.map((company, index) => (
              <span key={`second-${index}`} className="inline-flex items-center mx-8 text-lg md:text-xl font-medium text-gray-800">
                <span className="font-bold">{company.name}</span>
                <span className="mx-2">:</span>
                <span className="text-green-600 font-bold">{company.count}</span>
                {index < companies.length - 1 && <span className="mx-4 text-gray-400">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Total Counter */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            Total supporters: 
            <span className="font-bold text-black ml-2 text-lg">{totalCount.toLocaleString()}</span>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Together we stand, literally.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
