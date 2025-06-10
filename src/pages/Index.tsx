import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
const Index = () => {
  const [totalCount, setTotalCount] = useState(12231);
  const [displayCount, setDisplayCount] = useState(12231);
  const companies = [{
    name: "Google",
    count: 221,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
  }, {
    name: "Palantir",
    count: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Palantir_company_logo.png"
  }, {
    name: "Lockheed Martin",
    count: 73,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Lockheed_Martin_logo.svg"
  }, {
    name: "White House",
    count: 18,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/WhiteHouse_Logo.png"
  }, {
    name: "Salesforce",
    count: 382,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/320px-Salesforce.com_logo.svg.png"
  }];
  const protestImages = [{
    src: "SohanSunku/movement-banner-scroll/src/pages/images/IMG_1018.jpg",
    alt: "Starbucks"
  }, {
    src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
    alt: "Anti-chair demonstration"
  }, {
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
    alt: "Stand up movement"
  }, {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    alt: "Health awareness protest"
  }];

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
  return <div className="min-h-screen bg-background flex flex-col">
      {/* Header Banner */}
      <header className="w-full bg-background border-b border-border">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
            BAN CHAIRS
          </h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Standing up for a better tomorrow
          </p>
        </div>
      </header>

      {/* Join Movement Button */}
      <section className="w-full py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Button onClick={handleJoinMovement} className="bg-foreground text-background hover:bg-foreground/90 text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Join the Movement
          </Button>
        </div>
      </section>


      {/* Live Total Counter */}
      <section className="w-full py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm md:text-base">
            Backs Saved: 
            <span className="font-bold text-foreground ml-2 text-lg">{Math.floor(displayCount).toLocaleString()}</span>
          </p>
        </div>
      </section>

      {/* Scrolling Company Banner */}
      <section className="w-full py-6 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto overflow-hidden py-6">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First set of companies */}
              {companies.map((company, index) => <div key={`first-${index}`} className="inline-flex items-center mx-8 text-lg md:text-xl font-medium text-foreground">
                  <img src={company.logo} alt={`${company.name} logo`} className="h-8 w-auto mr-3 object-contain" />
                  <span className="mx-1">:</span>
                  <span className="text-primary font-bold ml-2 text-sm">{company.count}</span>
                  {index < companies.length - 1 && <span className="mx-6 text-muted-foreground"></span>}
                </div>)}
              
              {/* Duplicate set for seamless scrolling */}
              {companies.map((company, index) => <div key={`second-${index}`} className="inline-flex items-center mx-8 text-lg md:text-xl font-medium text-foreground">
                  <img src={company.logo} alt={`${company.name} logo`} className="h-8 w-auto mr-3 object-contain" />
                  <span className="mx-1">:</span>
                  <span className="text-primary font-bold ml-2 text-sm">{company.count}</span>
                  {index < companies.length - 1 && <span className="mx-6 text-muted-foreground">•</span>}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Protest Gallery */}
      <section className="w-full py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            The Movement in Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {protestImages.map((image, index) => <div key={index} className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img src={image.src} alt={image.alt} className="w-full h-32 md:h-40 object-cover group-hover:brightness-110 transition-all duration-300" />
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Section - Partially Visible */}
      <section className="w-full py-20 bg-gradient-to-b from-background to-muted/50 min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why Ban Chairs?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Sitting is the new smoking. Studies show that prolonged sitting increases the risk of 
                cardiovascular disease, diabetes, and premature death by up to 40%.
              </p>
              <p>
                Standing desks improve posture, boost energy levels, and increase productivity by 
                23% on average. Join thousands who have already made the switch.
              </p>
              <p>
                Our bodies were designed to move, not to be confined to chairs for 8+ hours a day. 
                It's time to stand up for our health, literally.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Reduced disease risk</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">23%</div>
                <div className="text-sm text-muted-foreground">Productivity increase</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Hours we sit daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-border bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Together we stand, literally.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;