import { Brain, Leaf, Shield, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About This Project</h2>
            <p className="text-lg text-muted-foreground">
              Leveraging AI to revolutionize sustainable agriculture
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">How It Works</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This weed detection system uses advanced Deep Learning models (YOLO/CNN architecture) 
                to automatically identify and distinguish between crops and weeds in agricultural field images.
              </p>
              <p>
                By analyzing uploaded images, the AI model can detect weed locations with high precision, 
                enabling farmers to apply herbicides only where needed. This targeted approach significantly 
                reduces chemical usage, lowers costs, and minimizes environmental impact.
              </p>
              <p>
                The system provides visual feedback with bounding boxes highlighting detected weeds, 
                along with detailed statistics to help farmers make informed decisions about crop management.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Trained on thousands of field images using state-of-the-art YOLO object detection
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainable Farming</h3>
              <p className="text-sm text-muted-foreground">
                Reduce herbicide use by up to 70% through precision agriculture
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cost Effective</h3>
              <p className="text-sm text-muted-foreground">
                Save money on herbicides and labor with automated detection
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-sm text-muted-foreground">
                Protect soil health and biodiversity with minimal chemical intervention
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary" />
              Impact on Agriculture
            </h3>
            <p className="text-sm text-muted-foreground">
              By enabling precise weed detection, this technology helps farmers adopt sustainable practices 
              while maintaining crop yields. It represents a significant step toward reducing agriculture's 
              environmental footprint and promoting healthier ecosystems for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
