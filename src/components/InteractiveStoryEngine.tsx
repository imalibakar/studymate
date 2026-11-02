"use client";

import React, { useState, useEffect, useRef } from "react";
import { storyData } from "@/data/storyData";
import MaterialIcon from "@/components/MaterialIcon";

export default function InteractiveStoryEngine() {
  const [currentScene, setCurrentScene] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeData = storyData[currentScene - 1];

  const handleSceneChange = (sceneNum: number) => {
    stopAutoPlay();
    setCurrentScene(sceneNum);
  };

  const handlePrev = () => {
    stopAutoPlay();
    if (currentScene > 1) {
      setCurrentScene((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    stopAutoPlay();
    if (currentScene < 4) {
      setCurrentScene((prev) => prev + 1);
    }
  };

  const handleCardNext = () => {
    if (currentScene === 4) {
      handleSceneChange(1);
    } else {
      handleSceneChange(currentScene + 1);
    }
  };

  const handleReplay = () => {
    stopAutoPlay();
    setCurrentScene(1);
  };

  const startAutoPlay = () => {
    setIsPlaying(true);
  };

  const stopAutoPlay = () => {
    setIsPlaying(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const toggleAutoPlay = () => {
    if (isPlaying) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  };

  // Autoplay effect
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentScene((prev) => (prev < 4 ? prev + 1 : 1));
      }, 6000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <section
      id="story-ilm"
      className="py-space-2xl md:py-space-3xl bg-background relative overflow-hidden isolate"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-accent-gold-light/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-surface-sage/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Story Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-gold-light border border-tertiary-fixed-dim/60 text-tertiary mb-3.5">
            <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest font-semibold">
              AN ILLUSTRATED STORY OF SIBLINGS IN FAITH
            </span>
          </div>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-text-primary mb-3.5 font-medium">
            Two Friends. One Journey Towards Knowledge.
          </h2>
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-text-secondary leading-relaxed">
            A visual reflection on how learning Ilm-e-Deen nurtures gentle
            character, clarity of heart, and opens doors of grace for everyone.
          </p>

          {/* Prophetic Hadith Citation Banner */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 px-5 py-2.5 rounded-xl bg-surface-container border border-border-subtle text-primary">
            <div
              className="font-arabic text-lg md:text-xl font-medium"
              dir="rtl"
              lang="ar"
            >
              طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَىٰ كُلِّ مُسْلِمٍ
            </div>
            <span className="hidden sm:inline text-tertiary-fixed-dim">•</span>
            <div className="font-body-sm text-body-sm text-text-secondary italic">
              “Seeking knowledge is an obligation upon every Muslim.”{" "}
              <span className="font-medium text-text-primary not-italic text-xs ml-1">
                (Sunan Ibn Majah 224)
              </span>
            </div>
          </div>
        </div>

        {/* Story Interactive Theatre Container */}
        <div className="bg-surface-white rounded-3xl border border-border-subtle shadow-xl overflow-hidden">
          {/* Scene Navigation Tabs Header */}
          <div className="border-b border-border-subtle bg-surface-container-low px-4 sm:px-8 py-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {/* Step Switchers */}
              <div
                className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-1 w-full lg:w-auto scrollbar-none"
                id="storyTabs"
              >
                {storyData.map((scene) => {
                  const isActive = currentScene === scene.id;
                  return (
                    <button
                      key={scene.id}
                      type="button"
                      onClick={() => handleSceneChange(scene.id)}
                      className={`scene-tab-btn flex items-center gap-2.5 px-4 py-2 rounded-full text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-primary-container text-on-primary shadow-sm"
                          : "bg-surface text-text-secondary hover:text-text-primary border border-border-subtle"
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isActive
                            ? "bg-surface-white text-forest-dark"
                            : "bg-surface-container text-text-secondary"
                        }`}
                      >
                        {scene.id}
                      </span>
                      <span className="font-label-button text-xs sm:text-sm whitespace-nowrap font-medium">
                        {scene.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Auto-Play & Stepper Controls Cluster */}
              <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 border-border-subtle pt-2 lg:pt-0">
                {/* Autoplay Toggle Button */}
                <button
                  type="button"
                  id="togglePlayBtn"
                  onClick={toggleAutoPlay}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle text-xs font-label-button transition-colors cursor-pointer ${
                    isPlaying
                      ? "bg-surface-sage text-primary font-medium"
                      : "bg-surface hover:bg-surface-sage text-text-secondary"
                  }`}
                >
                  <MaterialIcon
                    name={isPlaying ? "pause" : "play_arrow"}
                    size={16}
                    className="shrink-0"
                  />
                  <span>{isPlaying ? "Pause" : "Auto-play"}</span>
                </button>

                {/* Stepper Buttons */}
                <div className="inline-flex items-center gap-1">
                  <button
                    type="button"
                    id="prevSceneBtn"
                    aria-label="Previous scene"
                    disabled={currentScene === 1}
                    onClick={handlePrev}
                    className="p-1.5 rounded-lg border border-border-subtle bg-surface hover:bg-surface-sage text-text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <MaterialIcon name="chevron_left" size={20} />
                  </button>
                  <button
                    type="button"
                    id="nextSceneBtn"
                    aria-label="Next scene"
                    disabled={currentScene === 4}
                    onClick={handleNext}
                    className="p-1.5 rounded-lg border border-border-subtle bg-surface hover:bg-surface-sage text-text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <MaterialIcon name="chevron_right" size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Animated Progress Line */}
            <div className="w-full bg-border-subtle h-1 rounded-full mt-3 overflow-hidden">
              <div
                className="h-full bg-primary-container transition-all duration-500 rounded-full"
                id="storyProgressBar"
                style={{ width: `${(currentScene / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Main Stage Grid (Illustration Left / Story Narrative Right) */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Rich Animated 2D Vector Illustration Artboard (7 cols) */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border border-border-subtle bg-gradient-to-b from-[#FAF7F0] via-[#F4EFE6] to-[#E9E4D8] shadow-inner p-4 sm:p-6 min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
                  {/* Ambient Islamic Geometric Watermark Backdrop */}
                  <div className="absolute inset-0 arabesque-subtle opacity-30 pointer-events-none"></div>

                  {/* Top Architectural Arch Detail */}
                  <div className="absolute top-0 inset-x-0 h-10 border-b border-tertiary-fixed-dim/20 bg-surface-white/40 backdrop-blur-xs flex items-center justify-center">
                    <div className="text-[11px] font-label-button text-secondary tracking-widest uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
                      <span>{activeData.actLabel}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
                    </div>
                  </div>

                  {/* Dynamic SVG Art Container */}
                  <div
                    className="w-full max-w-xl transition-all duration-500 transform"
                    id="illustrationContainer"
                  >
                    {/* SCENE 1 SVG: TWO DIFFERENT JOURNEYS */}
                    {currentScene === 1 && (
                      <svg
                        key="svgScene1"
                        id="svgScene1"
                        viewBox="0 0 540 340"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="scene-svg w-full h-auto drop-shadow-sm animate-fadeIn"
                      >
                        <rect
                          x="20"
                          y="270"
                          width="500"
                          height="40"
                          rx="10"
                          fill="#E2DAD0"
                        ></rect>
                        <path
                          d="M40 270 Q270 260 500 270"
                          stroke="#C5BDB0"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        ></path>

                        <path
                          d="M50 270 V130 Q120 70 190 130 V270"
                          fill="#ECE5DA"
                          opacity="0.7"
                        ></path>
                        <path
                          d="M350 270 V130 Q420 70 490 130 V270"
                          fill="#ECE5DA"
                          opacity="0.7"
                        ></path>

                        {/* Lantern */}
                        <line
                          x1="120"
                          y1="20"
                          x2="120"
                          y2="70"
                          stroke="#A78F56"
                          strokeWidth="2"
                        ></line>
                        <path
                          d="M110 70 H130 L135 90 H105 Z"
                          fill="#D6B876"
                        ></path>
                        <rect
                          x="112"
                          y="80"
                          width="16"
                          height="24"
                          rx="3"
                          fill="#FFE59E"
                          className="ambient-lantern"
                        ></rect>
                        <circle
                          cx="120"
                          cy="92"
                          r="18"
                          fill="#FFE8A3"
                          opacity="0.3"
                          className="ambient-lantern"
                        ></circle>

                        {/* ZAYD */}
                        <path
                          d="M120 180 Q105 195 100 250 H160 Q155 195 140 180 Z"
                          fill="#145B46"
                        ></path>
                        <path
                          d="M125 180 L130 195 L135 180 Z"
                          fill="#FFFFFF"
                        ></path>
                        <circle
                          cx="130"
                          cy="155"
                          r="16"
                          fill="#ECCDB1"
                        ></circle>
                        <path
                          d="M114 150 C114 138 146 138 146 150 Z"
                          fill="#FFFFFF"
                        ></path>
                        <circle
                          cx="127"
                          cy="155"
                          r="1.5"
                          fill="#3A2E2B"
                        ></circle>
                        <path
                          d="M127 162 Q130 165 133 162"
                          stroke="#7A5643"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                        <ellipse
                          cx="120"
                          cy="225"
                          rx="5"
                          ry="4"
                          fill="#ECCDB1"
                        ></ellipse>
                        <ellipse
                          cx="140"
                          cy="225"
                          rx="5"
                          ry="4"
                          fill="#ECCDB1"
                        ></ellipse>

                        {/* Rihal & Book */}
                        <path
                          d="M105 250 L130 230 L155 250"
                          stroke="#87532A"
                          strokeWidth="5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M105 230 L130 250 L155 230"
                          stroke="#87532A"
                          strokeWidth="5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M110 226 C120 220 130 224 130 228 C130 224 140 220 150 226 L148 238 C140 232 130 234 130 238 C130 234 120 232 112 238 Z"
                          fill="#FAF7F0"
                          stroke="#C2A562"
                          strokeWidth="1.5"
                        ></path>

                        {/* FARHAN */}
                        <path
                          d="M400 160 Q385 180 380 270 H440 Q435 180 420 160 Z"
                          fill="#D9CBB6"
                        ></path>
                        <path
                          d="M405 160 L410 180 L415 160 Z"
                          fill="#FFFFFF"
                        ></path>
                        <circle
                          cx="410"
                          cy="135"
                          r="16"
                          fill="#ECCDB1"
                        ></circle>
                        <path
                          d="M394 130 C394 116 426 116 426 130 C426 122 394 122 394 130 Z"
                          fill="#3D3028"
                        ></path>
                        <circle
                          cx="406"
                          cy="135"
                          r="1.5"
                          fill="#3A2E2B"
                        ></circle>
                        <path
                          d="M406 142 Q410 144 414 142"
                          stroke="#7A5643"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M410 180 L412 150"
                          stroke="#ECCDB1"
                          strokeWidth="4"
                          strokeLinecap="round"
                        ></path>
                        <circle
                          cx="412"
                          cy="148"
                          r="4"
                          fill="#ECCDB1"
                        ></circle>

                        {/* Farhan Bubble */}
                        <g className="float-slow">
                          <rect
                            x="330"
                            y="55"
                            width="160"
                            height="46"
                            rx="14"
                            fill="#FFFFFF"
                            stroke="#D1C7B7"
                            strokeWidth="1.5"
                            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))"
                          ></rect>
                          <path
                            d="M410 101 L405 110 L415 101 Z"
                            fill="#FFFFFF"
                          ></path>
                          <text
                            x="410"
                            y="75"
                            textAnchor="middle"
                            fill="#4B5563"
                            fontFamily="'Inter', sans-serif"
                            fontSize="11"
                            fontWeight="500"
                          >
                            “I want to understand...”
                          </text>
                          <text
                            x="410"
                            y="90"
                            textAnchor="middle"
                            fill="#9CA3AF"
                            fontFamily="'Inter', sans-serif"
                            fontSize="10"
                          >
                            seeking direction &amp; peace
                          </text>
                        </g>

                        {/* Zayd Bubble */}
                        <g className="float-slow">
                          <rect
                            x="50"
                            y="55"
                            width="160"
                            height="46"
                            rx="14"
                            fill="#FFFFFF"
                            stroke="#D6B876"
                            strokeWidth="1.5"
                            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))"
                          ></rect>
                          <path
                            d="M130 101 L135 110 L125 101 Z"
                            fill="#FFFFFF"
                          ></path>
                          <text
                            x="130"
                            y="75"
                            textAnchor="middle"
                            fill="#145B46"
                            fontFamily="'Inter', sans-serif"
                            fontSize="11"
                            fontWeight="600"
                          >
                            Blessed with a Teacher
                          </text>
                          <text
                            x="130"
                            y="90"
                            textAnchor="middle"
                            fill="#66716A"
                            fontFamily="'Inter', sans-serif"
                            fontSize="10"
                          >
                            steady, guided growth
                          </text>
                        </g>

                        {/* Bridge */}
                        <path
                          d="M210 200 C270 170 270 230 330 200"
                          stroke="#C2A562"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                          opacity="0.6"
                        ></path>
                        <circle
                          cx="270"
                          cy="200"
                          r="14"
                          fill="#FAF7F0"
                          stroke="#C2A562"
                          strokeWidth="1.5"
                        ></circle>
                        <text
                          x="270"
                          y="204"
                          textAnchor="middle"
                          fill="#654D1B"
                          fontFamily="'Playfair Display', Georgia"
                          fontSize="12"
                          fontWeight="bold"
                        >
                          ✦
                        </text>
                      </svg>
                    )}

                    {/* SCENE 2 SVG: THE LIGHT OF UNDERSTANDING */}
                    {currentScene === 2 && (
                      <svg
                        key="svgScene2"
                        id="svgScene2"
                        viewBox="0 0 540 340"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="scene-svg w-full h-auto drop-shadow-sm animate-fadeIn"
                      >
                        <rect
                          x="20"
                          y="270"
                          width="500"
                          height="40"
                          rx="10"
                          fill="#E2DAD0"
                        ></rect>
                        <path
                          d="M120 270 V100 Q270 30 420 100 V270"
                          fill="#F4EFE6"
                          stroke="#E3DACB"
                          strokeWidth="2"
                        ></path>

                        <rect
                          x="220"
                          y="80"
                          width="100"
                          height="90"
                          rx="50"
                          fill="#E7DEC8"
                          opacity="0.6"
                        ></rect>
                        <circle
                          cx="270"
                          cy="115"
                          r="28"
                          stroke="#CBB98C"
                          strokeWidth="1.5"
                        ></circle>
                        <line
                          x1="270"
                          y1="87"
                          x2="270"
                          y2="143"
                          stroke="#CBB98C"
                          strokeWidth="1.5"
                        ></line>
                        <line
                          x1="242"
                          y1="115"
                          x2="298"
                          y2="115"
                          stroke="#CBB98C"
                          strokeWidth="1.5"
                        ></line>

                        {/* USTAAD */}
                        <path
                          d="M170 160 Q145 180 135 270 H225 Q215 180 195 160 Z"
                          fill="#3C4841"
                        ></path>
                        <path
                          d="M150 190 Q180 230 210 190"
                          stroke="#D1C2A5"
                          strokeWidth="8"
                          strokeLinecap="round"
                          fill="none"
                        ></path>
                        <circle
                          cx="180"
                          cy="135"
                          r="17"
                          fill="#ECCDB1"
                        ></circle>
                        <path
                          d="M165 142 Q180 170 195 142 Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M163 130 C163 115 197 115 197 130 Z"
                          fill="#FAF7F0"
                        ></path>
                        <path
                          d="M210 200 L235 185"
                          stroke="#ECCDB1"
                          strokeWidth="4"
                          strokeLinecap="round"
                        ></path>
                        <circle
                          cx="237"
                          cy="184"
                          r="4"
                          fill="#ECCDB1"
                        ></circle>

                        {/* ZAYD */}
                        <path
                          d="M350 175 Q335 195 325 270 H395 Q385 195 370 175 Z"
                          fill="#145B46"
                        ></path>
                        <circle
                          cx="360"
                          cy="150"
                          r="16"
                          fill="#ECCDB1"
                        ></circle>
                        <path
                          d="M344 145 C344 133 376 133 376 145 Z"
                          fill="#FFFFFF"
                        ></path>
                        <circle
                          cx="355"
                          cy="150"
                          r="1.5"
                          fill="#3A2E2B"
                        ></circle>
                        <ellipse
                          cx="335"
                          cy="225"
                          rx="5"
                          ry="4"
                          fill="#ECCDB1"
                        ></ellipse>

                        <rect
                          x="235"
                          y="240"
                          width="70"
                          height="30"
                          rx="4"
                          fill="#87532A"
                        ></rect>
                        <path
                          d="M245 235 C255 230 270 232 270 237 C270 232 285 230 295 235 L292 245 C282 240 270 242 270 246 C270 242 258 240 248 245 Z"
                          fill="#FAF7F0"
                          stroke="#C2A562"
                          strokeWidth="1.5"
                        ></path>

                        <circle
                          cx="270"
                          cy="210"
                          r="26"
                          fill="#FFEAA7"
                          opacity="0.35"
                          className="ambient-lantern"
                        ></circle>
                        <path
                          d="M270 195 L272 205 L282 207 L272 212 L270 222 L268 212 L258 207 L268 205 Z"
                          fill="#D6B876"
                        ></path>

                        <g className="float-slow">
                          <rect
                            x="220"
                            y="30"
                            width="230"
                            height="42"
                            rx="10"
                            fill="#FFFFFF"
                            stroke="#145B46"
                            strokeWidth="1.5"
                            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))"
                          ></rect>
                          <text
                            x="335"
                            y="47"
                            textAnchor="middle"
                            fill="#145B46"
                            fontFamily="'Inter', sans-serif"
                            fontSize="11"
                            fontWeight="600"
                          >
                            “Knowledge is not merely words...”
                          </text>
                          <text
                            x="335"
                            y="61"
                            textAnchor="middle"
                            fill="#4B5563"
                            fontFamily="'Inter', sans-serif"
                            fontSize="9.5"
                          >
                            “...it is light that softens the soul with adab.”
                          </text>
                        </g>
                      </svg>
                    )}

                    {/* SCENE 3 SVG: A MOMENT THAT MATTERS */}
                    {currentScene === 3 && (
                      <svg
                        key="svgScene3"
                        id="svgScene3"
                        viewBox="0 0 540 340"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="scene-svg w-full h-auto drop-shadow-sm animate-fadeIn"
                      >
                        <rect
                          x="20"
                          y="270"
                          width="500"
                          height="40"
                          rx="10"
                          fill="#D8CFBF"
                        ></rect>
                        <path
                          d="M40 90 L260 90 L240 130 L60 130 Z"
                          fill="#9E3D31"
                          opacity="0.75"
                        ></path>
                        <path
                          d="M60 90 L90 130 M120 90 L140 130 M180 90 L195 130"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          opacity="0.4"
                        ></path>
                        <line
                          x1="50"
                          y1="130"
                          x2="50"
                          y2="270"
                          stroke="#87532A"
                          strokeWidth="4"
                        ></line>
                        <line
                          x1="245"
                          y1="130"
                          x2="245"
                          y2="270"
                          stroke="#87532A"
                          strokeWidth="4"
                        ></line>

                        <ellipse
                          cx="140"
                          cy="272"
                          rx="28"
                          ry="10"
                          fill="#9E693D"
                        ></ellipse>
                        <circle
                          cx="160"
                          cy="275"
                          r="7"
                          fill="#E67E22"
                        ></circle>
                        <circle
                          cx="178"
                          cy="278"
                          r="7"
                          fill="#E67E22"
                        ></circle>
                        <circle
                          cx="195"
                          cy="274"
                          r="7"
                          fill="#E67E22"
                        ></circle>

                        <path
                          d="M100 170 Q85 190 80 270 H140 Q135 190 120 170 Z"
                          fill="#6B5B52"
                        ></path>
                        <circle
                          cx="110"
                          cy="145"
                          r="16"
                          fill="#ECCDB1"
                        ></circle>
                        <path
                          d="M125 185 L145 170"
                          stroke="#ECCDB1"
                          strokeWidth="4"
                          strokeLinecap="round"
                        ></path>

                        <path
                          d="M240 170 Q225 190 220 270 H280 Q275 190 260 170 Z"
                          fill="#145B46"
                        ></path>
                        <circle
                          cx="250"
                          cy="145"
                          r="16"
                          fill="#ECCDB1"
                        ></circle>
                        <path
                          d="M234 140 C234 128 266 128 266 140 Z"
                          fill="#FFFFFF"
                        ></path>
                        <circle
                          cx="247"
                          cy="145"
                          r="1.5"
                          fill="#3A2E2B"
                        ></circle>
                        <path
                          d="M246 152 Q250 155 254 152"
                          stroke="#7A5643"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M240 190 Q252 182 258 190"
                          stroke="#ECCDB1"
                          strokeWidth="5"
                          strokeLinecap="round"
                        ></path>

                        <path
                          d="M430 160 Q415 180 410 270 H470 Q465 180 450 160 Z"
                          fill="#D9CBB6"
                        ></path>
                        <circle
                          cx="440"
                          cy="135"
                          r="16"
                          fill="#ECCDB1"
                        ></circle>
                        <path
                          d="M424 130 C424 116 456 116 456 130 Z"
                          fill="#3D3028"
                        ></path>
                        <circle
                          cx="436"
                          cy="135"
                          r="1.5"
                          fill="#3A2E2B"
                        ></circle>

                        <g className="float-slow">
                          <rect
                            x="180"
                            y="60"
                            width="190"
                            height="46"
                            rx="12"
                            fill="#FFFFFF"
                            stroke="#145B46"
                            strokeWidth="1.5"
                            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))"
                          ></rect>
                          <path
                            d="M250 106 L246 116 L256 106 Z"
                            fill="#FFFFFF"
                          ></path>
                          <text
                            x="275"
                            y="79"
                            textAnchor="middle"
                            fill="#145B46"
                            fontFamily="'Inter', sans-serif"
                            fontSize="11"
                            fontWeight="600"
                          >
                            “May Allah bless you, my brother.”
                          </text>
                          <text
                            x="275"
                            y="94"
                            textAnchor="middle"
                            fill="#4B5563"
                            fontFamily="'Inter', sans-serif"
                            fontSize="9.5"
                          >
                            Gentle smile • Diffusing tension
                          </text>
                        </g>

                        <g className="float-slow">
                          <rect
                            x="360"
                            y="45"
                            width="160"
                            height="48"
                            rx="12"
                            fill="#FFFDF8"
                            stroke="#D6B876"
                            strokeWidth="1.5"
                            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))"
                          ></rect>
                          <circle
                            cx="410"
                            cy="105"
                            r="3"
                            fill="#D6B876"
                          ></circle>
                          <circle
                            cx="420"
                            cy="115"
                            r="2"
                            fill="#D6B876"
                          ></circle>
                          <text
                            x="440"
                            y="65"
                            textAnchor="middle"
                            fill="#654D1B"
                            fontFamily="'Inter', sans-serif"
                            fontSize="10.5"
                            fontWeight="600"
                          >
                            “How is he so calm?”
                          </text>
                          <text
                            x="440"
                            y="80"
                            textAnchor="middle"
                            fill="#786B58"
                            fontFamily="'Inter', sans-serif"
                            fontSize="9"
                          >
                            Deeply touched by his manners
                          </text>
                        </g>
                      </svg>
                    )}

                    {/* SCENE 4 SVG: THE DOOR TO KNOWLEDGE */}
                    {currentScene === 4 && (
                      <svg
                        key="svgScene4"
                        id="svgScene4"
                        viewBox="0 0 540 340"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="scene-svg w-full h-auto drop-shadow-sm animate-fadeIn"
                      >
                        <rect
                          x="20"
                          y="270"
                          width="500"
                          height="40"
                          rx="10"
                          fill="#E2DAD0"
                        ></rect>
                        <path
                          d="M80 270 V90 Q270 20 460 90 V270"
                          fill="#F8F4EC"
                          stroke="#DEC896"
                          strokeWidth="2"
                        ></path>

                        <line
                          x1="140"
                          y1="20"
                          x2="140"
                          y2="70"
                          stroke="#A78F56"
                          strokeWidth="2"
                        ></line>
                        <rect
                          x="132"
                          y="70"
                          width="16"
                          height="22"
                          rx="3"
                          fill="#FFE59E"
                          className="ambient-lantern"
                        ></rect>
                        <line
                          x1="400"
                          y1="20"
                          x2="400"
                          y2="70"
                          stroke="#A78F56"
                          strokeWidth="2"
                        ></line>
                        <rect
                          x="392"
                          y="70"
                          width="16"
                          height="22"
                          rx="3"
                          fill="#FFE59E"
                          className="ambient-lantern"
                        ></rect>

                        {/* Ustaad */}
                        <path
                          d="M270 140 Q250 160 240 210 H300 Q290 160 270 140 Z"
                          fill="#3C4841"
                        ></path>
                        <circle
                          cx="270"
                          cy="120"
                          r="14"
                          fill="#ECCDB1"
                        ></circle>
                        <path
                          d="M260 126 Q270 142 280 126 Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M256 115 C256 103 284 103 284 115 Z"
                          fill="#FAF7F0"
                        ></path>

                        {/* Zayd & Farhan */}
                        <path
                          d="M190 185 Q175 200 165 270 H235 Q225 200 210 185 Z"
                          fill="#145B46"
                        ></path>
                        <circle
                          cx="200"
                          cy="160"
                          r="15"
                          fill="#ECCDB1"
                        ></circle>
                        <path
                          d="M185 155 C185 144 215 144 215 155 Z"
                          fill="#FFFFFF"
                        ></path>

                        <path
                          d="M330 185 Q315 200 305 270 H375 Q365 200 350 185 Z"
                          fill="#4B6B60"
                        ></path>
                        <circle
                          cx="340"
                          cy="160"
                          r="15"
                          fill="#ECCDB1"
                        ></circle>
                        <path
                          d="M325 155 C325 144 355 144 355 155 Z"
                          fill="#D9CBB6"
                        ></path>

                        <path
                          d="M230 210 Q270 195 310 210"
                          stroke="#ECCDB1"
                          strokeWidth="4"
                          strokeLinecap="round"
                        ></path>

                        <path
                          d="M180 260 L195 245 L210 260"
                          stroke="#87532A"
                          strokeWidth="4"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M182 243 C189 239 195 242 195 245 C195 242 201 239 208 243"
                          fill="#FAF7F0"
                          stroke="#C2A562"
                          strokeWidth="2"
                        ></path>

                        <path
                          d="M330 260 L345 245 L360 260"
                          stroke="#87532A"
                          strokeWidth="4"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M332 243 C339 239 345 242 345 245 C345 242 351 239 358 243"
                          fill="#FAF7F0"
                          stroke="#C2A562"
                          strokeWidth="2"
                        ></path>

                        <circle
                          cx="270"
                          cy="235"
                          r="30"
                          fill="#FFEAA7"
                          opacity="0.4"
                          className="ambient-lantern"
                        ></circle>
                        <text
                          x="270"
                          y="240"
                          textAnchor="middle"
                          fill="#145B46"
                          fontFamily="'Noto Naskh Arabic', serif"
                          fontSize="16"
                          fontWeight="bold"
                        >
                          بِسْمِ اللَّهِ
                        </text>

                        <g className="float-slow">
                          <rect
                            x="145"
                            y="32"
                            width="250"
                            height="42"
                            rx="12"
                            fill="#FFFFFF"
                            stroke="#D6B876"
                            strokeWidth="1.5"
                            filter="drop-shadow(0 2px 6px rgba(0,0,0,0.08))"
                          ></rect>
                          <text
                            x="270"
                            y="50"
                            textAnchor="middle"
                            fill="#145B46"
                            fontFamily="'Playfair Display', Georgia"
                            fontSize="13"
                            fontWeight="600"
                          >
                            United on the Sacred Path
                          </text>
                          <text
                            x="270"
                            y="64"
                            textAnchor="middle"
                            fill="#66716A"
                            fontFamily="'Inter', sans-serif"
                            fontSize="10"
                          >
                            “Knowledge is a gift meant for everyone.”
                          </text>
                        </g>
                      </svg>
                    )}
                  </div>

                  {/* Replay Badge Floating Bottom-Right */}
                  <button
                    type="button"
                    id="replayStoryBtn"
                    onClick={handleReplay}
                    className="absolute bottom-3 right-3 text-xs font-label-button text-primary hover:text-forest-dark bg-surface-white/90 backdrop-blur-xs px-3 py-1.5 rounded-full border border-border-subtle shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MaterialIcon name="replay" size={16} />
                    <span>Replay Story</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Synchronized Narrative Card (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                {/* Dynamic Story Text Panel */}
                <div className="space-y-4" id="narrativeCard">
                  {/* Scene Identifier Badge */}
                  <div className="flex items-center gap-2">
                    <span
                      id="sceneBadgeNum"
                      className="px-2.5 py-1 rounded-md text-xs font-bold bg-primary-container text-on-primary"
                    >
                      {activeData.badge}
                    </span>
                    <span
                      id="sceneTheme"
                      className="font-label-eyebrow text-xs uppercase tracking-wider text-tertiary font-semibold"
                    >
                      {activeData.theme}
                    </span>
                  </div>

                  {/* Scene Main Title */}
                  <h3
                    id="sceneTitle"
                    className="font-headline-md text-headline-md text-text-primary font-medium leading-snug"
                  >
                    {activeData.title}
                  </h3>

                  {/* Narrative Body Paragraph */}
                  <p
                    id="sceneNarrative"
                    className="font-body-md text-body-md text-text-secondary leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: activeData.narrative }}
                  />

                  {/* Highlighted Dialogue / Wisdom Quote Box */}
                  <div
                    id="sceneQuoteBox"
                    className="p-4 rounded-xl bg-surface-sage/50 border border-secondary-fixed-dim/40 space-y-1.5"
                  >
                    <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                      <MaterialIcon
                        name="format_quote"
                        size={16}
                        className="text-primary shrink-0"
                      />
                      <span id="quoteSpeaker">{activeData.quoteSpeaker}</span>
                    </div>
                    <p
                      id="sceneQuote"
                      className="font-body-md text-text-primary italic text-sm"
                    >
                      {activeData.quote}
                    </p>
                  </div>

                  {/* Key Takeaway Pill */}
                  <div className="pt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                    <p
                      id="sceneTakeaway"
                      className="font-body-sm text-xs md:text-sm text-text-secondary font-medium"
                    >
                      Takeaway: {activeData.takeaway}
                    </p>
                  </div>
                </div>

                {/* Bottom Story Action & Navigation Controls */}
                <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <MaterialIcon
                      name="touch_app"
                      size={18}
                      className="text-tertiary shrink-0"
                    />
                    <span>Click tabs or controls above to advance scenes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      id="cardNextBtn"
                      onClick={handleCardNext}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-forest-dark text-on-primary font-label-button text-xs md:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <span id="cardNextLabel">{activeData.nextBtnLabel}</span>
                      <MaterialIcon name="arrow_forward" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
