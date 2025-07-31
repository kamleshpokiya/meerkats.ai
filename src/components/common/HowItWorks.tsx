'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface WorkflowStep {
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);

  const workflowSteps: WorkflowStep[] = [
    {
      title: 'Type your task in natural language',
      description:
        'Example: Scrape 100 product-led SaaS founders who use Intercom and send onboarding case studies based on their blog',
    },
    {
      title: 'AI builds your campaign',
      description:
        'Scrapes leads, creates personalized sequences, and launches outreach — with human-level clarity',
    },
    {
      title: 'Review, edit, and launch campaigns',
      description:
        'Make edits directly in the spreadsheet. Update copy, logic, targeting — all instantly editable',
    },
    {
      title: 'Track everything in one place',
      description: 'Every reply, click, and action is logged back — in a clear trail per lead',
    },
  ];

  useEffect(() => {
    // Initialize visibleSteps array
    setVisibleSteps(new Array(workflowSteps.length).fill(false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setVisibleSteps((prev) => {
              const newVisible = [...prev];
              newVisible[index] = entry.isIntersecting;
              return newVisible;
            });
          }
        });
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
        rootMargin: '0px 0px -20px 0px',
      }
    );

    // Observe all step elements
    stepRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [workflowSteps.length]);

  return (
    <section
      ref={howItWorksRef}
      className="container mx-auto mt-[105px] sm:mt-0 w-full py-[32px] sm:py-[48px] md:py-[64px] px-8 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="w-full">
        <div className="flex flex-col gap-[46px] justify-start items-center w-full">
          {/* Section Header */}
          <div className="flex flex-col gap-[46px] justify-start items-center w-full">
            {/* Horizontal Line with Logo Container */}
            <div className="relative w-full flex items-center justify-center max-w-[750px] px-4 sm:px-6">
              {/* Left Line */}
              <div className="flex-1 h-[1px] bg-[#D9D9D9]"></div>
              {/* Logo Container */}
              <div className="flex flex-row border border-[#D9D9D9] justify-center items-center rounded-[16px] py-[10px] px-[28px] sm:px-[42px] md:px-[56px] gap-[4px] sm:gap-[6px] md:gap-[8px]">
                <div className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[32px] md:h-[32px] bg-[linear-gradient(135deg,#f54e00e5_0%,_#f54e00_100%)] rounded-[4px] p-[4px] sm:p-[5px] md:p-[6px] flex items-center justify-center">
                  <img
                    src="/images/img_frame_3.svg"
                    alt="Meerkats AI Logo"
                    className="w-full h-full"
                  />
                </div>
                <p className="font-bold text-2xl text-global-2">meerkats.ai</p>
              </div>
              {/* Right Line */}
              <div className="flex-1 h-[1px] bg-[#D9D9D9]"></div>
            </div>
            <h2 className="text-[40px] font-inter font-bold leading-[48px] text-center text-global-2 w-auto">
              How it works
            </h2>
          </div>
          {/* Workflow Steps and Image */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full  mx-auto gap-[80px]">
            {/* Steps */}
            <div className="relative w-full lg:w-[46%]">
              <div className="flex flex-col gap-[24px] sm:gap-[36px] md:gap-[48px]">
                {workflowSteps.map((step, index) => (
                  <div
                    key={index}
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="flex flex-row gap-[16px] sm:gap-[24px] md:gap-[32px] items-start"
                  >
                    {/* Step Bullet and Line */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-[16px] h-[16px] rounded-[2px] transition-colors duration-700 ease-in-out 
                          bg-black
                        `}
                      ></div>
                      {index < workflowSteps.length - 1 && (
                        <div
                          className={`w-[2px] h-[120px] mt-[8px] sm:mt-[12px] md:mt-[16px] transition-colors duration-700 ease-in-out ${
                            visibleSteps[index] ? 'bg-[#F97316]' : 'bg-global-3'
                          }`}
                        ></div>
                      )}
                    </div>
                    {/* Step Content */}
                    <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] flex-1">
                      <h4 className="text-[24px] font-inter font-bold leading-[33px] text-left text-global-2 w-auto">
                        {step.title}
                      </h4>
                      <p className="text-[18px] font-inter font-normal leading-[27px] text-left text-global-3 w-full">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* How It Works Image */}
            <div className="w-full lg:w-[46%]">
              <Image
                src="/images/how2.png"
                alt="How It Works"
                className="w-full h-[430px] lg:h-[480px] xl:h-[640px] rounded-[20px] bg-gray-100"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
