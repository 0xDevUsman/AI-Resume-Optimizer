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
import dummyEnhancedPDF from "@/assets/enhanced-resume.png";

const Optimizer = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileURL, setFileURL] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showEnhancedPDF, setShowEnhancedPDF] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hasEnhancedBefore, setHasEnhancedBefore] = useState(false);

  console.log(fileURL);
  console.log(showResults);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setFileURL(URL.createObjectURL(file));
    }
  };

  console.log(uploadedFile);
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (
      file &&
      (file.type === "application/pdf" || file.type.includes("document"))
    ) {
      setUploadedFile(file);
      setFileURL(URL.createObjectURL(file));
    }
  };

  const handleEnhance = () => {
    setIsProcessing(true);
    setShowEnhancedPDF(false);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev: number) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setShowResults(true);
          setShowEnhancedPDF(true);
          setHasEnhancedBefore(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <main className="min-h-screen flex flex-col w-full items-center">
      <div className="flex-1 flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-white font-medium text-6xl pt-30">
          Optimize Your Resume with AI
        </h1>
        <p className="text-[#aaa2b1] text-base pt-2">
          Upload your resume and let our AI enhance it with industry-specific
          keywords, grammar improvements, and formatting optimizations.
        </p>
      </div>

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
                      className="bg-gradient-to-r from-[#603ba0] to-[#4a18a0] hover:from-[#7b4fc7] hover:to-[#5923b6] text-white px-6 py-2 text-sm rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                          Enhancing...
                        </>
                      ) : hasEnhancedBefore ? (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Enhance with AI Again
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
                          Analyzing... {progress}%
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent>
              <div
                className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-purple-500/50 transition-colors cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
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

                    {/* ✅ Resume preview */}
                    <div className="mt-4">
                      <Image
                        src={dummyEnhancedPDF}
                        alt="Uploaded Resume Preview"
                        className="rounded-lg mx-auto w-full max-w-[300px]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <p className="text-gray-300">
                      Drag and drop your resume here
                    </p>
                    <p className="text-sm text-gray-400">
                      or click to browse files
                    </p>
                    <p className="text-xs text-gray-500">
                      Supports PDF, DOC, DOCX (Max 10MB)
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side Section */}
        <div className="space-y-6 max-w-2xl w-full">
          {showEnhancedPDF && (
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 shadow-lg relative group">
              {/* Image Preview */}
              <div className="relative cursor-zoom-in rounded-lg overflow-hidden">
                <Image
                  src={dummyEnhancedPDF}
                  alt="Enhanced Resume"
                  className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                  onClick={() => setShowModal(true)}
                />
                {/* Zoom Icon */}
                <div className="absolute top-2 right-2 p-2 bg-white/20 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="text-white w-5 h-5" />
                </div>
              </div>

              {/* Download Button */}
              <div className="flex justify-end mt-4">
                <Button className="bg-gradient-to-r from-[#603ba0] to-[#4a18a0] hover:from-[#7b4fc7] hover:to-[#5923b6] text-white px-4 py-2 text-sm rounded-lg shadow-md transition-all cursor-pointer">
                  <Download className="w-4 h-4 mr-2" />
                  Download as PDF
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all">
          <div className="relative">
            <Image
              src={dummyEnhancedPDF}
              alt="Enhanced PDF Fullscreen"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl animate-fade-in"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 p-2 rounded-full bg-black/70 hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="mt-4 text-right"></div>
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
