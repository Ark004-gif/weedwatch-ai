import { useState, useRef } from "react";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ImageUploadProps {
  onImageSelect: (file: File, previewUrl: string) => void;
  selectedImage: string | null;
  onClear: () => void;
}

const ImageUpload = ({ onImageSelect, selectedImage, onClear }: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image size must be less than 10MB");
      return;
    }

    // Create preview URL
    const previewUrl = URL.createObjectURL(file);
    onImageSelect(file, previewUrl);
    toast.success("Image uploaded successfully!");
  };

  return (
    <section id="upload" className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Upload Field Image</h2>
            <p className="text-muted-foreground">
              Drop your crop field image or click to browse
            </p>
          </div>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-lg transition-all ${
              isDragging
                ? "border-primary bg-primary/5 scale-[1.02]"
                : selectedImage
                ? "border-accent"
                : "border-border hover:border-primary/50"
            }`}
          >
            {selectedImage ? (
              <div className="relative p-4">
                <img
                  src={selectedImage}
                  alt="Selected field"
                  className="w-full h-auto rounded-lg shadow-[var(--shadow-soft)]"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-6 right-6"
                  onClick={onClear}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  {isDragging ? (
                    <ImageIcon className="w-8 h-8 text-primary" />
                  ) : (
                    <Upload className="w-8 h-8 text-primary" />
                  )}
                </div>
                
                <h3 className="text-lg font-semibold mb-2">
                  {isDragging ? "Drop image here" : "Upload crop field image"}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6">
                  Drag and drop or click to browse
                </p>

                <Button
                  variant="default"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Select Image
                </Button>

                <p className="text-xs text-muted-foreground mt-4">
                  Supported formats: JPG, PNG, WEBP (Max 10MB)
                </p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
