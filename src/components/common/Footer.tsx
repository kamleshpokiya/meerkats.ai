'use client';

import React from 'react';

const Footer: React.FC = () => {
  const footerColumns = [
    {
      title: 'Column One',
      links: ['Link One', 'Link Two', 'Link Three', 'Link Four', 'Link Five'],
    },
    {
      title: 'Column Two',
      links: ['Link Six', 'Link Seven', 'Link Eight', 'Link Nine', 'Link Ten'],
    },
    {
      title: 'Column Three',
      links: ['Link Eleven', 'Link Twelve', 'Link Thirteen', 'Link Fourteen', 'Link Fifteen'],
    },
    {
      title: 'Column Four',
      links: ['Link Sixteen', 'Link Seventeen', 'Link Eighteen', 'Link Nineteen', 'Link Twenty'],
    },
    {
      title: 'Column Five',
      links: [
        'Link Twenty One',
        'Link Twenty Two',
        'Link Twenty Three',
        'Link Twenty Four',
        'Link Twenty Five',
      ],
    },
  ];

  const socialIcons = [
    { src: '/images/img_icon_facebook.svg', alt: 'Facebook' },
    { src: '/images/img_icon_instagram.svg', alt: 'Instagram' },
    { src: '/images/img_icon_x.svg', alt: 'X (Twitter)' },
    { src: '/images/img_icon_linkedin.svg', alt: 'LinkedIn' },
    { src: '/images/img_icon_youtube.svg', alt: 'YouTube' },
  ];

  return (
    <footer className="w-full bg-global-5 py-[40px] sm:py-[60px] md:py-[80px] px-8 lg:px-10">
      <div className="w-full">
        <div className="flex flex-col justify-start items-start w-full">
          {/* Main Footer Content */}
          {/* <div className="flex flex-col lg:flex-row justify-between items-start w-full mb-[44px] sm:mb-[66px] md:mb-[88px]">
            <div className="mb-8 lg:mb-0">
              <img
                src="/images/img_footer_logo.svg"
                alt="Footer Logo"
                className="w-[50px] sm:w-[56px] md:w-[62px] h-auto"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 w-full lg:w-auto">
              {footerColumns.map((column, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] justify-start items-start"
                >
                  <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-roboto font-semibold leading-[17px] sm:leading-[18px] md:leading-[19px] text-global-1">
                    {column.title}
                  </h3>
                  <ul className="flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] justify-start items-start">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-[12px] sm:text-[13px] md:text-[14px] font-roboto font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-global-1 hover:text-gray-600 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div> */}

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-global-1 mb-8 sm:mb-[28px] md:mb-[32px]"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-[64px] sm:gap-0">
            {/* Copyright and Links */}
            <div className="flex flex-col sm:flex-row gap-[24px] justify-center sm:justify-start items-start sm:items-center">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-roboto font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-global-1">
                © 2023 Relume. All rights reserved.
              </p>
              <a
                href="#"
                className="text-[12px] sm:text-[13px] md:text-[14px] font-roboto font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-global-1 underline hover:text-gray-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[12px] sm:text-[13px] md:text-[14px] font-roboto font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-global-1 underline hover:text-gray-600 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[12px] sm:text-[13px] md:text-[14px] font-roboto font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-global-1 underline hover:text-gray-600 transition-colors"
              >
                Cookies Settings
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-row gap-[8px] sm:gap-[10px] md:gap-[12px] justify-center items-center">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:opacity-70 transition-opacity"
                  aria-label={icon.alt}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
