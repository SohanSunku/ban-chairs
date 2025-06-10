
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Index = () => {
  const [totalCount, setTotalCount] = useState(12231);
  const [displayCount, setDisplayCount] = useState(12231);
  
  const companies = [
    { name: "Google", count: 221, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" },
    { name: "Palantir", count: 3, logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Palantir_company_logo.png" },
    { name: "Lockheed Martin", count: 73, logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Lockheed_Martin_logo.svg" },
    { name: "White House", count: 18, logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/WhiteHouse_Logo.png" },
    { name: "Salesforce", count: 382, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/320px-Salesforce.com_logo.svg.png" }
  ];

  const protestImages = [
    {
      src: "/images/IMG_1018.jpg",
      alt: "Starbucks protest"
    },
    {
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      alt: "Anti-chair demonstration"
    },
    {
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
      alt: "Stand up movement"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      alt: "Health awareness protest"
    }
  ];

  // Constantly updating counter
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Animated counter effect
  useEffect(() => {
    const duration = 1000; // 1 second animation
    const steps = 60; // 60 fps
    const increment = (totalCount - displayCount) / steps;
    
    if (Math.abs(totalCount - displayCount) > 0.1) {
      const timer = setInterval(() => {
        setDisplayCount(prev => {
          const next = prev + increment;
          if (Math.abs(next - totalCount) < Math.abs(increment)) {
            clearInterval(timer);
            return totalCount;
          }
          return next;
        });
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [totalCount, displayCount]);

  const handleJoinMovement = () => {
    console.log("User clicked to join the movement!");
    // This would typically redirect to a signup form or modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex flex-col overflow-hidden">
      {/* Header Banner with Enhanced Animation */}
      <header className="w-full bg-gradient-to-r from-background to-muted/30 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 py-12 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground tracking-tight animate-fade-in transform hover:scale-105 transition-all duration-500">
            BAN CHAIRS
          </h1>
          <p className="text-muted-foreground mt-4 text-sm md:text-lg animate-fade-in delay-300 transform translate-y-2 opacity-0 [animation-fill-mode:forwards]">
            Standing up for a better tomorrow
          </p>
        </div>
      </header>

      {/* Enhanced Join Movement Button */}
      <section className="w-full py-12 bg-gradient-to-r from-background to-muted/10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Button 
            onClick={handleJoinMovement}
            className="bg-gradient-to-r from-foreground to-foreground/90 text-background hover:from-foreground/90 hover:to-foreground text-lg md:text-xl px-12 md:px-16 py-4 md:py-6 rounded-full font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl transform animate-bounce shadow-lg hover:shadow-foreground/20"
          >
            🚀 Join the Movement
          </Button>
        </div>
      </section>

      {/* Enhanced Scrolling Company Banner */}
      <section className="w-full py-8 bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full max-w-6xl mx-auto overflow-hidden py-8">
            <div className="flex animate-scroll whitespace-nowrap hover:animation-pause">
              {/* First set of companies */}
              {companies.map((company, index) => (
                <div key={`first-${index}`} className="inline-flex items-center mx-8 text-lg md:text-xl font-medium text-foreground transform hover:scale-110 transition-all duration-300 hover:text-primary">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="h-8 w-auto mr-3 object-contain filter hover:brightness-110 transition-all duration-300 drop-shadow-md"
                  />
                  <span className="mx-1 text-muted-foreground">:</span>
                  <span className="text-primary font-bold ml-2 text-xs animate-pulse">{company.count}</span>
                  {index < companies.length - 1 && <span className="mx-6 text-muted-foreground opacity-50">•</span>}
                </div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {companies.map((company, index) => (
                <div key={`second-${index}`} className="inline-flex items-center mx-8 text-lg md:text-xl font-medium text-foreground transform hover:scale-110 transition-all duration-300 hover:text-primary">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="h-8 w-auto mr-3 object-contain filter hover:brightness-110 transition-all duration-300 drop-shadow-md"
                  />
                  <span className="mx-1 text-muted-foreground">:</span>
                  <span className="text-primary font-bold ml-2 text-xs animate-pulse">{company.count}</span>
                  {index < companies.length - 1 && <span className="mx-6 text-muted-foreground opacity-50">•</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Live Total Counter */}
      <section className="w-full py-12 bg-gradient-to-r from-background to-muted/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-muted-foreground text-sm md:text-base mb-2 animate-fade-in">
            Total supporters worldwide: 
          </p>
          <div className="relative inline-block">
            <span className="font-bold text-foreground text-3xl md:text-4xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
              {Math.floor(displayCount).toLocaleString()}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Protest Gallery */}
      <section className="w-full py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 animate-fade-in transform hover:scale-105 transition-all duration-500">
            ⚡ The Movement in Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {protestImages.map((image, index) => (
              <div 
                key={index} 
                className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-rotate-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-32 md:h-40 object-cover group-hover:brightness-110 group-hover:contrast-110 transition-all duration-500 filter drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Section - Partially Visible */}
      <section className="w-full py-24 bg-gradient-to-b from-background via-muted/20 to-muted/40 min-h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12 animate-fade-in transform hover:scale-105 transition-all duration-500">
              💪 Why Ban Chairs?
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground animate-fade-in">
              <p className="transform hover:scale-105 transition-all duration-300 p-6 rounded-xl bg-gradient-to-r from-background/50 to-muted/30 backdrop-blur-sm shadow-lg">
                Sitting is the new smoking. Studies show that prolonged sitting increases the risk of 
                cardiovascular disease, diabetes, and premature death by up to <span className="text-primary font-bold">40%</span>.
              </p>
              <p className="transform hover:scale-105 transition-all duration-300 p-6 rounded-xl bg-gradient-to-r from-muted/30 to-background/50 backdrop-blur-sm shadow-lg">
                Standing desks improve posture, boost energy levels, and increase productivity by 
                <span className="text-primary font-bold"> 23%</span> on average. Join thousands who have already made the switch.
              </p>
              <p className="transform hover:scale-105 transition-all duration-300 p-6 rounded-xl bg-gradient-to-r from-background/50 to-muted/30 backdrop-blur-sm shadow-lg">
                Our bodies were designed to move, not to be confined to chairs for 8+ hours a day. 
                It's time to stand up for our health, literally.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm transform hover:scale-110 transition-all duration-500 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary animate-pulse">40%</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Reduced disease risk</div>
              </div>
              <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm transform hover:scale-110 transition-all duration-500 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary animate-pulse">23%</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Productivity increase</div>
              </div>
              <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm transform hover:scale-110 transition-all duration-500 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary animate-pulse">8+</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Hours we sit daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="w-full py-8 border-t border-border bg-gradient-to-r from-background to-muted/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-muted-foreground text-sm md:text-base transform hover:scale-105 transition-all duration-300">
            Together we stand, literally. 💪
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
