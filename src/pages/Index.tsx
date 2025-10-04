import { useState } from "react";
import Hero from "@/components/Hero";
import ImageUpload from "@/components/ImageUpload";
import DetectionResults from "@/components/DetectionResults";
import AboutSection from "@/components/AboutSection";
import { Sprout } from "lucide-react";

interface DetectionData {
  weedCount: number;
  cropCount: number;
  weedPercentage: number;
  cropPercentage: number;
  processedImage?: string;
}

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [detectionResults, setDetectionResults] = useState<DetectionData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageSelect = (file: File, preview: string) => {
    setSelectedFile(file);
    setPreviewUrl(preview);
    setDetectionResults(null);
  };

  const handleClear = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setDetectionResults(null);
    setIsProcessing(false);
  };

  const handleAnalyze = () => {
    if (!selectedFile) {
      return;
    }

    setIsProcessing(true);

    // Simulate AI processing (in real app, this would call backend API)
    setTimeout(() => {
      // Mock detection results
      const mockResults: DetectionData = {
        weedCount: Math.floor(Math.random() * 50) + 10,
        cropCount: Math.floor(Math.random() * 200) + 100,
        weedPercentage: Math.random() * 20 + 5,
        cropPercentage: 0,
        processedImage: previewUrl || undefined,
      };
      mockResults.cropPercentage = 100 - mockResults.weedPercentage;

      setDetectionResults(mockResults);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Weed Detection System</h1>
                <p className="text-xs text-muted-foreground">AI-Powered Agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        
        <ImageUpload
          onImageSelect={handleImageSelect}
          selectedImage={previewUrl}
          onClear={handleClear}
        />

        {selectedFile && !detectionResults && !isProcessing && (
          <section className="py-8 bg-background">
            <div className="container px-4 text-center">
              <button
                onClick={handleAnalyze}
                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium shadow-[var(--shadow-soft)] transition-all"
              >
                Start AI Detection
              </button>
            </div>
          </section>
        )}

        <DetectionResults
          data={detectionResults}
          isProcessing={isProcessing}
          onAnalyze={handleClear}
        />

        <AboutSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>Weed Detection System &copy; 2025</p>
            <p className="mt-2">
              Promoting sustainable agriculture through AI technology
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
