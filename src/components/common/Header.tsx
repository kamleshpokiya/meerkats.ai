'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-global-5 border-b border-[#b3b7bc]">
      <div className="w-full max-w-[1440px] mx-auto px-[80px] 2xl:max-w-full 2xl:px-20">
        <div className="flex flex-row justify-between items-center py-[8px] sm:py-[12px] md:py-[16px]">
          {/* Logo Section */}
          <div className="flex flex-row gap-[6px] sm:gap-[8px] justify-center items-center">
            <div className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[32px] md:h-[32px] bg-[linear-gradient(135deg,#f54e00e5_0%,_#f54e00_100%)] rounded-[4px] p-[4px] sm:p-[5px] md:p-[6px] flex items-center justify-center">
              <img src="/images/img_frame_3.svg" alt="Meerkats AI Logo" className="w-full h-full" />
            </div>
            <h1 className="text-[20px] sm:text-[22px] md:text-[24px] font-poppins font-bold leading-[30px] sm:leading-[33px] md:leading-[36px] text-header-1">
              <span>meerkats.</span>
              <span>ai</span>
            </h1>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="block lg:hidden p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row justify-between items-center w-[48%] py-[10px]">
            <a
              href="#home"
              className="text-[14px] font-inter font-normal leading-[17px] text-global-1 ml-[12px] hover:text-gray-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#solutions"
              className="text-[14px] font-inter font-normal leading-[17px] text-global-1 hover:text-gray-600 transition-colors"
            >
              Solutions
            </a>
            <a
              href="#blogs"
              className="text-[14px] font-inter font-normal leading-[17px] text-global-1 hover:text-gray-600 transition-colors"
            >
              Blogs
            </a>
            <a
              href="#pricing"
              className="text-[14px] font-inter font-normal leading-[17px] text-global-1 hover:text-gray-600 transition-colors"
            >
              Pricing
            </a>
            <Button
              variant="primary"
              size="md"
              className="px-[24px] sm:px-[30px] md:px-[70px] py-[10px] sm:py-[11px] md:py-[12px] text-[14px] sm:text-[15px] md:text-[16px] font-inter font-bold leading-[18px] sm:leading-[19px] md:leading-[20px] bg-global-1 text-button-1 border border-[#2e2e2e] rounded-[10px] shadow-[0px_4px_6px_#cccccc]"
            >
              Book a call
            </Button>
          </nav>

          {/* Mobile Navigation */}
          {/* <nav
            className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-global-5 border-t border-gray-200 z-50`}
          >
            <div className="flex flex-col p-4 space-y-4">
              <a
                href="#home"
                className="text-[14px] font-inter font-normal leading-[17px] text-global-1 py-2 hover:text-gray-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#solutions"
                className="text-[14px] font-inter font-normal leading-[17px] text-global-1 py-2 hover:text-gray-600 transition-colors"
              >
                Solutions
              </a>
              <a
                href="#blogs"
                className="text-[14px] font-inter font-normal leading-[17px] text-global-1 py-2 hover:text-gray-600 transition-colors"
              >
                Blogs
              </a>
              <a
                href="#pricing"
                className="text-[14px] font-inter font-normal leading-[17px] text-global-1 py-2 hover:text-gray-600 transition-colors"
              >
                Pricing
              </a>
              <Button
                variant="primary"
                size="md"
                fullWidth
                className="mt-4 px-[24px] py-[12px] text-[16px] font-inter font-bold leading-[20px] bg-global-1 text-button-1 border border-[#2e2e2e] rounded-[10px] shadow-[0px_4px_6px_#cccccc]"
              >
                Book a call
              </Button>
            </div>
          </nav> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
