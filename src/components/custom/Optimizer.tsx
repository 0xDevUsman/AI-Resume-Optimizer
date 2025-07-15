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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { IoMdAlert } from "react-icons/io";

import DummyPreview from "@/assets/enhanced-resume.png"; // Replace with your dummy image

const Optimizer = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [enhancedBlobURL, setEnhancedBlobURL] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasEnhancedBefore, setHasEnhancedBefore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setEnhancedBlobURL(null);
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
      setEnhancedBlobURL(null);
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

    try {
      await new Promise((res) => setTimeout(res, 2000));
      setEnhancedBlobURL("/dummy-resume.pdf"); // Simulated enhanced file
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
    <main className="min-h-screen flex flex-col w-full items-center px-4 py-10">
      <div className="w-full max-w-7xl text-start mt-20 space-y-4 mb-8">
        <h1 className="text-white text-4xl sm:text-5xl font-bold">
          Optimize Your Resume with AI
        </h1>
        <p className="text-[#aaa2b1] text-sm sm:text-base max-w-7xl mx-auto">
          Upload your resume and let our AI enhance it with industry-specific
          keywords, grammar improvements, and formatting optimizations.
        </p>
      </div>

      {/* Note Section */}
      <div
        role="alert"
        className="w-full max-w-7xl bg-yellow-900/10 border border-yellow-600 rounded-xl p-5 mb-10 shadow-md"
      >
        <div className="flex items-start gap-3">
          <IoMdAlert className="w-6 h-6 mt-1 text-yellow-400 flex-shrink-0" />
          <div className="text-sm text-yellow-100 space-y-1 leading-relaxed">
            <p className="font-semibold text-yellow-200">Important Note:</p>
            <ul className="list-disc list-inside space-y-1 text-yellow-100">
              <li>
                This version uses dummy output due to lack of paid API access.
              </li>
              <li>
                The resume preview is a placeholder image for UI demonstration.
              </li>
              <li>
                AI logic and enhancement flow are fully functional and
                integrated.
              </li>
              <li>
                Once the real API is connected, the app will generate actual
                enhanced PDFs.
              </li>
              <li>
                The goal was to polish UX, complete the frontend flow, and
                simulate end results.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 w-full max-w-7xl">
        {/* Upload + Button */}
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
                      className="bg-gradient-to-r from-[#603ba0] to-[#4a18a0] hover:from-[#7b4fc7] hover:to-[#5923b6] text-white px-6 py-2 text-sm rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                          Enhancing...
                        </>
                      ) : hasEnhancedBefore ? (
                        <>
                          <Sparkles className="w-5 h-5 mr-2 " />
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
                className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-purple-500/50 cursor-pointer transition-all duration-300"
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

        {/* Preview + Download */}
        {hasEnhancedBefore && (
          <div className="space-y-6 w-full max-w-2xl">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 shadow-lg relative group">
              <Image
                src={DummyPreview}
                alt="Enhanced Resume Preview"
                className="max-w-full max-h-[500px] object-contain rounded-lg border cursor-zoom-in"
                onClick={openModal}
                width={800}
                height={500}
                unoptimized
                priority
              />
            </div>

            <div className="flex justify-end">
              <a href={enhancedBlobURL ?? "#"} download="Enhanced-Resume.pdf">
                <Button className="bg-gradient-to-r from-[#603ba0] to-[#4a18a0] text-white px-4 py-2 text-sm rounded-lg shadow-md hover:from-[#7b4fc7] hover:to-[#5923b6] transition-all cursor-pointer">
                  <Download className="w-4 h-4 mr-2" />
                  Download as PDF
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Modal View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={DummyPreview}
              alt="Zoomed Resume Preview"
              className="max-w-full max-h-full rounded-lg shadow-lg"
              width={700}
              height={100}
              unoptimized
              priority
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 focus:outline-none"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <div className="w-full mt-10">
        <Footer />
      </div>
    </main>
  );
};

export default Optimizer;
