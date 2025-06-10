import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import starbucksImage from "./images/IMG_1018.jpg";
import cops from "./images/cops.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
  const pressArticles = [{
    title: "Major Coffee Chain Removes All Seating After Employee Health Study",
    source: "San Francisco Chronicle",
    date: "Dec 8, 2024",
    image: starbucksImage,
    excerpt: "Following a comprehensive study showing 73% reduction in back pain complaints, the popular coffee chain announced the removal of all chairs from their locations."
  }, {
    title: "Law Enforcement Agencies Adopt Standing-Only Policies",
    source: "The Washington Post",
    date: "Dec 5, 2024",
    image: cops,
    excerpt: "Police departments across the nation report improved alertness and reduced fatigue after implementing standing desk policies in their offices."
  }, {
    title: "Standing Movement Gains Momentum in Corporate America",
    source: "The New York Times",
    date: "Dec 3, 2024",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
    excerpt: "Fortune 500 companies are investing millions in ergonomic standing solutions as the anti-chair movement reshapes workplace culture."
  }, {
    title: "Medical Community Endorses Chair-Free Workspaces",
    source: "USA Today",
    date: "Nov 30, 2024",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    excerpt: "Leading healthcare professionals cite overwhelming evidence supporting the elimination of prolonged sitting in professional environments."
  }];
  return <div className="min-h-screen bg-background flex flex-col">
      {/* Header Banner */}
      
      <header className="w-full bg-background border-b border-border">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
            BAN CHAIRS
          </h1>
        </div>
      </header>

      <section className="w-full py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Button onClick={handleJoinMovement} className="bg-foreground text-background hover:bg-foreground/90 text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Join the Movement
          </Button>
        </div>
      </section>

      <section className="w-full bg-background py-0">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm md:text-base">
            Backs Saved: 
            <span className="font-bold text-foreground ml-2 text-lg">{Math.floor(displayCount).toLocaleString()}</span>
          </p>
        </div>
      </section>

      {/* Scrolling Company Banner - Updated with larger logos */}
      <section className="w-full bg-transparent py-0">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto overflow-hidden py-[60px]">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First set of companies */}
              {companies.map((company, index) => <div key={`first-${index}`} className="inline-flex items-center mx-12 text-2xl md:text-3xl font-medium text-foreground">
                  <img src={company.logo} alt={`${company.name} logo`} className="h-16 md:h-20 w-auto mr-4 object-contain" />
                  <span className="mx-2">:</span>
                  <span className="text-primary font-bold ml-3 text-lg md:text-xl">{company.count}</span>
                  {index < companies.length - 1 && <span className="mx-8 text-muted-foreground"></span>}
                </div>)}
              
              {/* Duplicate set for seamless scrolling */}
              {companies.map((company, index) => <div key={`second-${index}`} className="inline-flex items-center mx-12 text-2xl md:text-3xl font-medium text-foreground">
                  <img src={company.logo} alt={`${company.name} logo`} className="h-16 md:h-20 w-auto mr-4 object-contain" />
                  <span className="mx-2">:</span>
                  <span className="text-primary font-bold ml-3 text-lg md:text-xl">{company.count}</span>
                  {index < companies.length - 1 && <span className="mx-8 text-muted-foreground">•</span>}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Press Coverage Section */}
      <section className="w-full bg-background py-0">
        <div className="container mx-auto px-4">
          <h2 className="md:text-4xl font-bold text-left text-foreground mb-6 text-xl">
            In the Press
          </h2>
        </div>
      </section>

      <section className="w-full py-4 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {pressArticles.map((article, index) => <CarouselItem key={index}>
                    <div className="bg-card rounded-lg shadow-lg overflow-hidden mx-2">
                      <div className="overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full h-32 object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                          <span className="font-medium">{article.source}</span>
                          <span>{article.date}</span>
                        </div>
                        <h3 className="font-bold text-base mb-2 text-foreground leading-tight">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="text-foreground border-border hover:bg-accent hover:text-accent-foreground" />
              <CarouselNext className="text-foreground border-border hover:bg-accent hover:text-accent-foreground" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="w-full py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sitting is the new smoking. Studies show that prolonged sitting increases the risk of 
              cardiovascular disease, diabetes, and premature death by up to 40%. Our bodies were designed 
              to move, not to be confined to chairs for 8+ hours a day. Standing desks improve posture, 
              boost energy levels, and increase productivity by 23% on average. It's time to stand up 
              for our health, literally.
            </p>
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
