'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

const UserStories: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      quote: 'We killed 4 tools, 2 VAs and still move faster now.',
      author: 'Founder,',
      company: 'B2b healthcare firm',
    },
    {
      quote:
        'It is so easy to test out various GTM strategies and scale what works - a really powerful tool',
      author: 'Co-founder',
      company: 'AI SaaS',
    },
    {
      quote:
        'Meerkats AI transformed our lead generation process completely. We went from manual research to automated workflows in days.',
      author: 'Growth Manager,',
      company: 'Fintech Startup',
    },
    {
      quote:
        'The ability to create personalized campaigns at scale is game-changing. Our conversion rates improved by 300%.',
      author: 'Marketing Director,',
      company: 'E-commerce Platform',
    },
    {
      quote:
        'Finally, a tool that understands our workflow and adapts to our needs instead of forcing us to adapt to it.',
      author: 'VP of Sales,',
      company: 'B2B Software',
    },
    {
      quote:
        'We automated our entire customer onboarding process. What used to take hours now happens in minutes.',
      author: 'Product Manager,',
      company: 'SaaS Company',
    },
    {
      quote:
        'The AI agent is incredibly intelligent. It finds leads we never would have discovered manually.',
      author: 'Sales Director,',
      company: 'Consulting Firm',
    },
    {
      quote:
        'Meerkats AI helped us scale our outreach from 50 to 500 personalized messages per day.',
      author: 'Founder,',
      company: 'Digital Agency',
    },
  ];

  // Pagination logic
  const cardsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextPage();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentPage, totalPages]);

  return (
    <section
      className="w-full py-[20px]"
      style={{
        backgroundImage: "url('/images/img_subtract_gray_50.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[40px] sm:gap-[60px] md:gap-[80px] justify-start items-center w-full">
          <div className="flex flex-row justify-center items-center w-full">
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-inter font-bold leading-[32px] sm:leading-[40px] md:leading-[48px] text-center text-global-2 w-auto">
              User stories
            </h2>
          </div>
          <div className="flex flex-col gap-[30px] sm:gap-[40px] md:gap-[50px] justify-start items-center w-full">
            {/* Carousel Container */}
            <div className="relative w-full max-w-[900px] overflow-hidden">
              {/* Carousel Track */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {Array.from({ length: totalPages }, (_, pageIndex) => {
                  const startIdx = pageIndex * cardsPerPage;
                  const endIdx = startIdx + cardsPerPage;
                  const pageTestimonials = testimonials.slice(startIdx, endIdx);

                  return (
                    <div
                      key={pageIndex}
                      className="flex flex-col lg:flex-row gap-[20px] sm:gap-[30px] md:gap-[40px] w-full max-w-[900px] flex-shrink-0"
                    >
                      {pageTestimonials.map((testimonial, index) => (
                        <div
                          key={startIdx + index}
                          className="flex flex-col gap-[20px] sm:gap-[24px] md:gap-[28px] justify-start items-start w-full lg:w-1/2 px-[20px] sm:px-[24px] md:px-[32px] py-[24px] sm:py-[28px] md:py-[32px] border border-black rounded-[20px] bg-white h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px]"
                        >
                          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-roboto font-normal leading-[20px] sm:leading-[24px] md:leading-[26px] text-left text-global-1 w-full flex-1">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex flex-row gap-[12px] sm:gap-[16px] md:gap-[20px] justify-start items-center w-full mt-auto">
                            <img
                              src="/images/img_avatar_image.png"
                              alt="User Avatar"
                              className="w-[40px] sm:w-[48px] md:w-[56px] h-[40px] sm:h-[48px] md:h-[56px] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] flex-shrink-0"
                            />
                            <div className="flex flex-col justify-start items-start flex-1">
                              <p className="text-[12px] sm:text-[14px] md:text-[16px] font-roboto font-semibold leading-[16px] sm:leading-[18px] md:leading-[20px] text-left text-global-1 w-auto">
                                {testimonial.author}
                              </p>
                              <p className="text-[12px] sm:text-[14px] md:text-[16px] font-roboto font-normal leading-[16px] sm:leading-[18px] md:leading-[20px] text-left text-global-1 w-auto">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex flex-row gap-[6px] sm:gap-[8px] md:gap-[10px] justify-center items-center py-[10px] sm:py-[15px] md:py-[20px] w-auto">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index)}
                  className={`w-[6px] sm:w-[8px] md:w-[10px] h-[6px] sm:h-[8px] md:h-[10px] rounded-full transition-all duration-300 ${
                    index === currentPage ? 'bg-global-1' : 'bg-global-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStories;
