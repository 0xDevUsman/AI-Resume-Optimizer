/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import Footer from "./Footer";
import {
  Upload,
  FileText,
  Sparkles,
  Download,
  RefreshCw,
  X,
  ZoomIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const Optimizer = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [enhancedBlobURL, setEnhancedBlobURL] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [hasEnhancedBefore, setHasEnhancedBefore] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setUploadedFile(file);
    }
  };

  const handleEnhance = async () => {
    if (!uploadedFile) return;

    setIsProcessing(true);
    setProgress(0);
    setEnhancedBlobURL(null);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 300);

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const res = await fetch("/api/enhance-resume", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to optimize resume");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      setEnhancedBlobURL(url);
      setShowResults(true);
      setHasEnhancedBefore(true);
    } catch (error) {
      console.error("Enhancement failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      clearInterval(interval);
      setProgress(100);
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col w-full items-center">
      {/* Header */}
      <div className="flex-1 flex flex-col w-full max-w-[1440px] mx-auto px-4">
        <h1 className="text-white font-medium text-6xl pt-30">
          Optimize Your Resume with AI
        </h1>
        <p className="text-[#aaa2b1] text-base pt-2">
          Upload your resume and let our AI enhance it with industry-specific
          keywords, grammar improvements, and formatting optimizations.
        </p>
      </div>

      {/* Upload and Enhance UI */}
      <div className="flex flex-col lg:flex-row justify-center gap-10 w-full px-4 py-8">
        <div className="space-y-6 w-full max-w-xl">
          <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start justify-between w-full">
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Upload className="w-5 h-5 text-purple-400" />
                  <span>Upload Your Resume</span>
                </CardTitle>

                {uploadedFile && (
                  <div className="text-right">
                    <Button
                      onClick={handleEnhance}
                      disabled={isProcessing}
                      className="bg-gradient-to-r from-[#603ba0] to-[#4a18a0] hover:from-[#7b4fc7] hover:to-[#5923b6] text-white px-6 py-2 text-sm rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50"
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                          Enhancing...
                        </>
                      ) : hasEnhancedBefore ? (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Enhance Again
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Enhance with AI
                        </>
                      )}
                    </Button>

                    {isProcessing && (
                      <div className="mt-2 space-y-1">
                        <Progress value={progress} className="w-40" />
                        <p className="text-xs text-gray-400">
                          Processing... {progress}%
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent>
              <div
                className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-purple-500/50 cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                {uploadedFile ? (
                  <div className="space-y-4">
                    <FileText className="w-8 h-8 text-green-400 mx-auto" />
                    <p className="text-green-400 font-medium">
                      {uploadedFile.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      File uploaded successfully
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <p className="text-gray-300">
                      Drag and drop your resume here
                    </p>
                    <p className="text-sm text-gray-400">or click to browse</p>
                    <p className="text-xs text-gray-500">
                      PDF format only, max 10MB
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Result View */}
        {enhancedBlobURL && (
          <div className="space-y-6 max-w-2xl w-full">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 shadow-lg relative group">
              <div className="relative cursor-zoom-in rounded-lg overflow-hidden">
                <iframe
                  src={enhancedBlobURL}
                  className="w-full h-[500px] rounded-lg border"
                />
                <div className="absolute top-2 right-2 p-2 bg-white/20 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="text-white w-5 h-5" />
                </div>
              </div>

              {/* Download Button */}
              <div className="flex justify-end mt-4">
                <a href={enhancedBlobURL} download="Enhanced-Resume.pdf">
                  <Button className="bg-gradient-to-r from-[#603ba0] to-[#4a18a0] text-white px-4 py-2 text-sm rounded-lg shadow-md transition-all">
                    <Download className="w-4 h-4 mr-2" />
                    Download as PDF
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal Zoom Preview */}
      {showModal && enhancedBlobURL && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-white p-4 rounded-lg max-w-[90vw] max-h-[90vh]">
            <iframe src={enhancedBlobURL} className="w-full h-[80vh] rounded" />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 p-2 rounded-full bg-black/70 hover:bg-black/90"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      )}

      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
};

export default Optimizer;
