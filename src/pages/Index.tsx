import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import starbucksImage from "./images/IMG_1018.jpg";
import cops from "./images/cops.jpeg";
import rfk from "./images/rfk.jpg";
import chronicPainImage from "./images/IMG_0925.jpg";
import waterImage from "./images/water.jpg";
import attachmentImage from "./images/Attachment-1.jpeg";

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
    src: starbucksImage,
    alt: "Starbucks"
  }, {
    src: cops,
    alt: "cops"
  }, {
    src: rfk,
    alt: "rfk"
  }, {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    alt: "Health awareness protest"
  }];

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    window.open('https://forms.gle/JmwKxRRM7cF5UyEZA', '_blank');
  };

  const pressArticles = [{
    title: "RFK Junior's MAHA Targets Sitting",
    source: "The Washington Post",
    date: "May 8, 2025",
    image: rfk,
    excerpt: "Sitting is the new smoking, echoes RFK Junior during White House address. Gen Z protestors in San Francisco Agree."
  }, {
    title: "Public Outrage After SFPD Officer Laughs at Protestor",
    source: "San Francisco Chronicle",
    date: "Jun 5, 2025",
    image: cops,
    excerpt: "Man protesting chairs reportedly walked up to officers and asked to be arrested. Officer Mustachio declined, citing first amendment right to protest."
  }, {
    title: "Chronic Pain Crisis Grips Corporate America",
    source: "Forbes",
    date: "Jan 15, 2025",
    image: chronicPainImage,
    excerpt: "New study reveals 85% of office workers suffer from chronic back and neck pain, costing companies billions in lost productivity and healthcare expenses."
  }, {
    title: "Herman Miller Refuses to Teach Proper Sitting",
    source: "Business Insider",
    date: "Dec 28, 2024",
    image: waterImage,
    excerpt: "Furniture giant faces backlash after internal memo surfaces in response to chronic pain crisis 'we're NOT teaching people how to sit, we work with how they already sit'"
  }];

  return <div className="min-h-screen bg-background flex flex-col">
      {/* Header Banner */}
      
      <header className="w-full bg-background border-b border-border">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-4">
            <img 
              src={attachmentImage} 
              alt="Ban Chairs Logo" 
              className="h-12 md:h-16 w-auto object-contain"
            />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
              BAN CHAIRS
            </h1>
          </div>
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
                  <span className="text-primary font-bold ml-3 text-lg md:text-xl px-0 mx-0">{company.count}</span>
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
          <div className="max-w-2xl mx-auto text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Press
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full py-4 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto relative">
            <Carousel plugins={[Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false
          })]} opts={{
            align: "start",
            loop: true
          }}>
              <CarouselContent>
                {pressArticles.map((article, index) => <CarouselItem key={index}>
                    <div className="bg-card rounded-lg shadow-lg overflow-hidden mx-2">
                      <div className="overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className={`w-full h-32 ${article.image === cops ? 'object-cover object-top ' : article.image === chronicPainImage ? 'object-cover object-top grayscale' : 'object-cover'}`}
                        />
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
              <CarouselPrevious className="left-2 md:-left-12 text-foreground border-border hover:bg-accent hover:text-accent-foreground" />
              <CarouselNext className="right-2 md:-right-12 text-foreground border-border hover:bg-accent hover:text-accent-foreground" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="w-full py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Ever had an ache between your shoulder blades, low back pain, a tight neck? 90% of Americans experience back pain, for 60% it becoms chronic. Its not your core and you don't need surgery.
              <br></br> <br></br>
              The medical industry failed us, so we talked to all the experts. Turns out people don't know how to sit, <i>and</i> most chairs really suck. 
            </p>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;
