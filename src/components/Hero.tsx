import { Sprout, Target, TrendingDown } from "lucide-react";
import heroImage from "@/assets/hero-field.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 101, 52, 0.85), rgba(21, 128, 61, 0.75)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Sprout className="w-4 h-4 text-accent" />
            <span className="text-sm text-white font-medium">AI-Powered Agriculture</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Weed Detection System for
            <span className="block text-accent">Sustainable Farming</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Upload crop field images and let AI instantly identify weeds. Reduce herbicide use, 
            save costs, and promote eco-friendly farming practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#upload" className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-md font-medium shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-soft)] transition-all">
              Start Detection
            </a>
            <a href="#about" className="inline-flex items-center justify-center gap-2 h-12 px-8 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 rounded-md font-medium transition-all">
              Learn More
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 animate-scale-in">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Precise Detection</h3>
            <p className="text-white/80 text-sm">
              Advanced YOLO model identifies weeds with high accuracy
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
              <TrendingDown className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Reduce Costs</h3>
            <p className="text-white/80 text-sm">
              Target spraying only where needed, saving herbicide costs
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
              <Sprout className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Eco-Friendly</h3>
            <p className="text-white/80 text-sm">
              Minimize environmental impact with precision agriculture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
