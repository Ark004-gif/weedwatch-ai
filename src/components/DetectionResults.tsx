import { AlertTriangle, CheckCircle, Layers, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface DetectionData {
  weedCount: number;
  cropCount: number;
  weedPercentage: number;
  cropPercentage: number;
  processedImage?: string;
}

interface DetectionResultsProps {
  data: DetectionData | null;
  isProcessing: boolean;
  onAnalyze: () => void;
}

const DetectionResults = ({ data, isProcessing, onAnalyze }: DetectionResultsProps) => {
  if (!data && !isProcessing) {
    return (
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <Layers className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Ready to Analyze</h2>
            <p className="text-muted-foreground mb-6">
              Upload an image to start weed detection
            </p>
            <Button variant="default" size="lg" onClick={onAnalyze}>
              Analyze Image
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (isProcessing) {
    return (
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <h2 className="text-2xl font-bold mb-2">Analyzing Image...</h2>
              <p className="text-muted-foreground">
                AI is detecting weeds and crops in your field
              </p>
            </div>
            <Progress value={undefined} className="w-full" />
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  const shouldSpray = data.weedPercentage > 5;

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Detection Results</h2>
            <p className="text-muted-foreground">
              AI analysis complete - review the findings below
            </p>
          </div>

          {/* Processed Image */}
          {data.processedImage && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-[var(--shadow-soft)]">
              <img
                src={data.processedImage}
                alt="Processed field with detections"
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Weeds Detected</p>
                  <p className="text-3xl font-bold text-destructive">{data.weedCount}</p>
                </div>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Coverage</span>
                  <span className="font-medium">{data.weedPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={data.weedPercentage} className="h-2 bg-destructive/20 [&>div]:bg-destructive" />
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Healthy Crops</p>
                  <p className="text-3xl font-bold text-primary">{data.cropCount}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Coverage</span>
                  <span className="font-medium">{data.cropPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={data.cropPercentage} className="h-2 bg-primary/20 [&>div]:bg-primary" />
              </div>
            </div>
          </div>

          {/* Action Recommendation */}
          <div className={`rounded-lg p-6 border-2 ${
            shouldSpray 
              ? "bg-destructive/5 border-destructive/30" 
              : "bg-primary/5 border-primary/30"
          }`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                shouldSpray ? "bg-destructive/20" : "bg-primary/20"
              }`}>
                {shouldSpray ? (
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                ) : (
                  <CheckCircle className="w-6 h-6 text-primary" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  {shouldSpray ? "Action Required" : "Field Looks Good"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {shouldSpray 
                    ? `Weed coverage detected at ${data.weedPercentage.toFixed(1)}%. Consider targeted herbicide application on detected areas to prevent spread.`
                    : `Minimal weed presence (${data.weedPercentage.toFixed(1)}%). No immediate action needed. Continue regular monitoring.`
                  }
                </p>
                {shouldSpray && (
                  <div className="flex items-center gap-2 text-sm">
                    <Percent className="w-4 h-4 text-destructive" />
                    <span className="font-medium">
                      Estimated herbicide savings: {(100 - data.weedPercentage).toFixed(0)}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <Button variant="default" size="lg" onClick={onAnalyze}>
              Analyze Another Image
            </Button>
            <Button variant="outline" size="lg">
              Download Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetectionResults;
