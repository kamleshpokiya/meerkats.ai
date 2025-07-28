import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import ExpandableList from '@/components/ui/ExpandableList';
import Image from 'next/image';
import Marquee from '@/components/ui/Marquee';
const HomePage: React.FC = () => {
  const faqItems = [
    {
      id: '1',
      question: 'What exactly can I automate with Meerkats AI?',
      answer:
        'Scraping lead data, enriching with real-time signals, scoring leads, personalizing outreach, and syncing to your stack—all from one spreadsheet.',
    },
    {
      id: '2',
      question: 'Do I need technical skills or devs to use this?',
      answer:
        'No. You build workflows using prompts or plain text. It is built for founders, growth, and GTM teams.',
    },
    {
      id: '3',
      question: 'How is this different from other scraping tools?',
      answer:
        'We go beyond scraping. Our agents take actions, talk to your stack, and run workflows live—no patchwork, no pipelines.',
    },
    {
      id: '4',
      question: 'Can I run different campaigns or GTM flows?',
      answer:
        'Yes. You can compose modular workflows per segment, use case, or channel. Save and re-use with a click.',
    },
    {
      id: '5',
      question: 'What tools does Meerkats integrate with?',
      answer:
        'HubSpot, Sheets, Smartlead, LinkedIn, G2, Firecrawl, Slack—and more through A2A protocol.',
    },
  ];
  const testimonials = [
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
  ];
  const features = [
    {
      icon: '/images/img_search.svg',
      title: 'Find and build relevant lead list',
      description: 'Skip static databases - build your lead list with real time data from the web',
    },
    {
      icon: '/images/img_heroicons_outli.svg',
      title: 'Gather market intel',
      description: 'Gather market and competitor intelligence data from across the web',
    },
    {
      icon: '/images/img_heroicons_solid_signal.svg',
      title: 'Get buyer intent signals',
      description: 'Hyper-targeted and in-context. No more spray-and-pray',
    },
    {
      icon: '/images/img_heroicons_outline_cog_8_tooth.svg',
      title: 'Keep revOps clean and simple',
      description: 'Unify CRM, ops, and funnel data for full visibility',
    },
    {
      icon: '/images/img_heroicons_outline_envelope.svg',
      title: 'Create Personalized messages',
      description: 'Create personalized messages that do not sound robotic',
    },
    {
      icon: '/images/img_heroicons_outli_orange_900.svg',
      title: 'Do all-bound marketing',
      description: 'Reach your customers across channels - Email, LinkedIn, X, SEO',
    },
  ];
  const workflowSteps = [
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
  const benefitCards = [
    {
      icon: '/images/img_subtract.svg',
      text: 'Stop wasting hours mapping flows and gluing tools to launch just one campaign',
    },
    {
      icon: '/images/img_vector_stroke.svg',
      text: 'No more slow feedback loops that force guesswork and hides what is working',
    },
    {
      icon: '/images/img_heroicons_solid_light_bulb.svg',
      text: 'Modern GTM needs dynamic campaigns that convert better — not clunky workflows',
    },
  ];
  const companyLogos = [
    '/images/img_logo.svg',
    '/images/img_logo_gray_900.svg',
    '/images/img_logo.svg',
    '/images/img_logo_gray_900.svg',
    '/images/img_logo.svg',
    '/images/img_logo_gray_900.svg',
    '/images/img_logo.svg',
  ];

  const icons = [
    '/icons/calendar.svg',
    '/icons/discord.svg',
    '/icons/gaimini.svg',
    '/icons/mail.svg',
    '/icons/monkey.svg',
    '/icons/slack.svg',
    '/icons/tool.svg',
    '/icons/postgres.svg',
    '/icons/gpt.png',
    '/icons/sql.png',
    '/icons/calendar.svg',
    '/icons/discord.svg',
    '/icons/gaimini.svg',
    '/icons/mail.svg',
    '/icons/monkey.svg',
    '/icons/slack.svg',
    '/icons/tool.svg',
    '/icons/postgres.svg',
    '/icons/gpt.png',
    '/icons/sql.png',
  ];

  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-5">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="container mx-auto w-full flex flex-row justify-start items-center">
        <div className="w-full flex flex-row gap-[19px] sm:gap-[28px] md:gap-[38px] justify-start items-start">
          {/* Left Decorative Image */}
          {/* <img
            src="/images/img_6838210483869da.svg"
            alt="Decorative"
            className="w-[52px] hidden lg:block sm:w-[78px] md:w-[104px] h-[277px] sm:h-[415px] md:h-[554px]"
          /> */}
          {/* Main Hero Content */}
          <div className="flex flex-col justify-start items-center flex-1 mt-[56px] sm:mt-[84px] md:mt-[112px]">
            <div className="flex flex-col justify-start items-center flex-1 mx-[23px] sm:mx-[34px] md:mx-[46px]">
              {/* Hero Title */}
              <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-inter font-bold leading-[48px] sm:leading-[70px]  text-center text-global-2">
                <span>Automate your growth workflows</span>
                <br />
                <span>by chatting with AI</span>
              </h1>
              {/* Hero Description */}
              <p className="text-[12px]  sm:text-[18px] md:text-[24px] font-inter font-normal leading-[18px] sm:leading-[27px] md:leading-[36px] text-center text-global-3 w-full">
                Generate leads, onboard users, send updates, and track results
              </p>
            </div>

            {/* Interactive Demo Section */}
            <div className="w-full max-w-[1155px]">
              <div
                className="flex flex-row justify-center items-center w-full py-[112px]"
                style={{
                  backgroundImage: "url('/images/Frame.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div className="flex max-w-[763px] mt-2 flex-col gap-[20px] sm:gap-[30px] md:gap-[32px] justify-start items-center w-[75%]">
                  {/* Search Input */}
                  <div className="flex flex-row justify-between items-center w-full px-[8px] sm:px-[30px] md:px-[40px] py-[6px] sm:py-[20px] md:py-[16px] border border-[#18181B] rounded-[16px] bg-global-5">
                    <input
                      type="text"
                      placeholder="Ask meerkats AI to find ceo names of recently funded startups..."
                      className="flex-1 text-[12px] sm:text-[16px] md:text-[17px] font-inter font-normal leading-[14px] sm:leading-[21px] md:leading-[22px] text-left text-global-3 bg-transparent border-none outline-none mr-[2px] sm:mr-[12px] md:mr-[16px]"
                    />
                    <img
                      src="/images/img_clarity_circle_arrow_solid.svg"
                      alt="Submit"
                      className="w-[16px] h-[16px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] cursor-pointer flex-shrink-0"
                    />
                  </div>

                  {/* Suggestion Pills */}
                  <div className="flex flex-col sm:flex-row gap-[18px] sm:gap-[26px] md:gap-[34px] justify-start items-center w-full">
                    <button className="w-full sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
                      Scrape domains, enrich, push to CRM
                    </button>
                    <button className="w-full sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
                      Add stripe customers to your CRM
                    </button>
                    <button className="w-full sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
                      Track new signups, research, post to Slack
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-[8px] sm:gap-[12px] md:gap-[16px] justify-center items-center w-auto">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto px-[24px] sm:px-[30px] md:px-[61px] py-[10px] sm:py-[11px] md:py-[12px] text-[14px] sm:text-[15px] md:text-[16px] font-inter font-bold leading-[18px] sm:leading-[19px] md:leading-[20px] bg-global-1 text-button-1 border border-[#2e2e2e] rounded-[10px] shadow-[0px_4px_6px_#cccccc]"
              >
                Watch demo
              </Button>
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto px-[24px] sm:px-[30px] md:px-[61px] py-[10px] sm:py-[11px] md:py-[12px] text-[14px] sm:text-[15px] md:text-[16px] font-inter font-bold leading-[18px] sm:leading-[19px] md:leading-[20px] bg-global-5 text-global-3 border border-[#2e2e2e] rounded-[10px] shadow-[0px_4px_6px_#cccccc]"
              >
                Book a call
              </Button>
            </div>
          </div>
          {/* Right Decorative Image */}
          {/* <img
            src="/images/img_6838210483869da_white_a700.svg"
            alt="Decorative"
            className="w-[52px] hidden lg:block sm:w-[78px] md:w-[104px] h-[277px] sm:h-[415px] md:h-[554px]"
          /> */}
        </div>
      </section>

      {/* VIBE Section */}
      <section className=" w-full mt-[35px] sm:mt-[52px] md:mt-[70px] py-[40px] sm:py-[60px] md:pb-[80px] sm:bg-[url('/images/img_union.png')] sm:bg-[length:106%_100%] sm:bg-center">
        <div className="container w-full  mx-auto flex flex-col justify-start items-center">
          {/* VIBE Header */}
          <div className="max-w-[1440px] flex sm:flex-row  flex-wrap justify-between items-center w-full px-10 mt-[22px] sm:mt-[33px] ">
            <h2 className="text-[20px] sm:text-[30px] md:text-[40px] font-inter font-semibold leading-[24px] sm:leading-[36px] md:leading-[48px] text-left text-global-2 w-[46%] mb-[9px] sm:mb-[13px] md:mb-[18px]">
              VIBE CODING, BUT FOR
              <br />
              VIBE MARKETERS
            </h2>
            <p className="text-[9px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[13px] sm:leading-[20px]  text-left text-global-3 w-[46%]">
              Describe the leads, the logic, and the messaging style.
              <br />
              <br />
              Build the whole thing: scraping, enrichment, sequences, and response handling.
              <br />
              <br />
              No devs. No prompt chains. Just working campaigns.
            </p>
          </div>
          {/* Company Logos */}
          {/* <div className="w-full mt-[161px] sm:mt-[241px] md:mt-[135px]">
            <div className="flex flex-row justify-between items-center w-full py-[44px] sm:py-[66px] md:py-[88px] bg-global-4 overflow-x-auto">
              {companyLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Company Logo ${index + 1}`}
                  className="w-[67px] sm:w-[100px] md:w-[134px] h-[11px] sm:h-[16px] md:h-[22px] flex-shrink-0"
                />
              ))}
            </div>
          </div> */}

          <div className="w-full max-w-[1440px]">
            <div className="w-auto py-[60px] sm:py-[80px] md:pt-[100px] md:pb-0 rounded-[20px] mx-[20px] sm:mx-[40px] md:mx-[60px]">
              {/* Section Header */}
              <div className="text-center mb-[40px] sm:mb-[60px] md:mb-[80px]">
                <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-inter font-bold leading-[28px] sm:leading-[38px] md:leading-[48px] text-global-2 mb-[8px]">
                  Plug AI into your own data &
                </h2>
                <h3 className="text-[24px] sm:text-[32px] md:text-[40px] font-inter font-bold leading-[28px] sm:leading-[38px] md:leading-[48px] text-[#f54e00]">
                  over 500 integrations
                </h3>
              </div>

              {/* Integration Icons Grid */}
              <div
                className="space-y-[20px] sm:space-y-[30px] md:space-y-[40px]"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent 0.5rem, #000 10rem, #000 calc(100% - 10rem), transparent calc(100% - 0.5rem))',
                }}
              >
                {/* Top Row */}
                <Marquee speed={30} gradient={false} className="flex items-center">
                  {icons.map((logo, index) => (
                    <div key={index} className="mx-[8px] sm:mx-[12px] md:mx-[16px] flex-shrink-0">
                      <div className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px] bg-global-5 rounded-[8px] flex items-center justify-center border border-global-3">
                        <img
                          src={logo}
                          alt={`Integration ${index + 1}`}
                          className="w-[20px] sm:w-[24px] md:w-[28px] h-[20px] sm:h-[24px] md:h-[28px] object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </Marquee>

                {/* Bottom Row */}
                <Marquee
                  speed={30}
                  gradient={false}
                  direction="right"
                  className="flex items-center"
                >
                  {icons.map((logo, index) => (
                    <div key={index} className="mx-[8px] sm:mx-[12px] md:mx-[16px] flex-shrink-0">
                      <div className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px] bg-global-5 rounded-[8px] flex items-center justify-center border border-global-3">
                        <img
                          src={logo}
                          alt={`Integration ${index + 1}`}
                          className="w-[20px] sm:w-[24px] md:w-[28px] h-[20px] sm:h-[24px] md:h-[28px] object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-[40px] sm:mt-[50px] md:mt-[60px]">
                <Button
                  variant="primary"
                  size="md"
                  className="px-[32px] sm:px-[40px] md:px-[48px] py-[12px] sm:py-[14px] md:py-[16px] text-[14px] sm:text-[16px] md:text-[18px] font-inter font-bold leading-[18px] sm:leading-[20px] md:leading-[22px] bg-global-1 text-button-1 border border-[#2e2e2e] rounded-[10px] shadow-[0px_4px_6px_#cccccc]"
                >
                  Browse all Integrations
                </Button>
              </div>
            </div>
          </div>

          {/* Benefit Cards */}
          <div className="max-w-[1440px]  flex flex-col lg:flex-row gap-[30px] sm:gap-[45px] md:gap-[60px] w-full mt-[52px] sm:mt-[78px] md:mt-[104px] px-[60px] sm:px-[90px] md:px-[120px]">
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-row gap-[12px] sm:gap-[18px] md:gap-[24px] justify-start items-start w-full lg:w-[360px] px-[8px] sm:px-[12px] md:px-[16px] py-[28px] sm:py-[42px] md:py-[56px] border border-global-3 rounded-[20px] bg-global-5"
              >
                <img
                  src={card.icon}
                  alt="Benefit Icon"
                  className="w-[13px]  md:w-[26px] h-[13px] sm:w-[19px] md:h-[26px]"
                />
                <p className="text-[12px] sm:text-[18px] md:text-[24px] font-inter font-normal leading-[16px] sm:leading-[24px] md:leading-[33px] text-left text-global-3 self-center w-[90%]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
          {/* Chat Your Way Title */}
          <h2 className="text-[20px] sm:text-[30px] md:text-[40px] font-inter font-bold leading-[30px] sm:leading-[45px] md:leading-[60px] text-center text-global-2 w-auto mt-[108px] sm:mt-[162px] md:mt-[216px]">
            With Meerkats ai you
            <br />
            chat your way to growth
          </h2>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="   w-full flex flex-col justify-start items-center">
        {/* Launch Growth Workflows */}
        <section className="w-full flex flex-col lg:flex-row justify-start items-center py-[23px]">
          {/* <img
            src="/images/clip.png"
            alt="Decorative"
            className="w-[52px] hidden lg:block border border-[#F0F0F0] rounded-[10px] sm:w-[78px] md:w-[104px] h-[385px] sm:h-[577px] md:h-[770px]"
          /> */}
          <div className="container mx-auto flex flex-col lg:flex-row justify-start items-center flex-1 w-full">
            <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-full lg:w-[46%]">
              <h3 className="text-[18px] sm:text-[24px] md:text-[32px] font-inter font-semibold leading-[24px] sm:leading-[33px] md:leading-[44px] text-left text-global-2 w-full">
                Launch growth workflows by chatting with AI
              </h3>
              <p className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3 w-full">
                Describe what you want: the campaign logic, the audience, the tone.
              </p>
              <p className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3 w-full">
                The AI agent builds the entire workflow — scraping leads, messaging logic, and
                follow-ups.
              </p>
              <div className="flex items-center gap-[12px] mt-[16px]">
                <span className="text-[32px] font-inter font-bold text-[#f54e00] leading-[1]">
                  10X
                </span>
                <div className="flex flex-col">
                  <span className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3">
                    faster from idea to live campaign.
                  </span>
                  <span className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3">
                    Just chat, build, and launch — in minutes
                  </span>
                </div>
              </div>
            </div>
            <Image
              src="/images/ai-bot.webp"
              alt="Launch Growth Workflows"
              className="w-full lg:w-[46%] h-[200px] sm:h-[480px] md:h-[640px] rounded-[20px] mt-[20px] lg:mt-0 lg:ml-[40px] sm:ml-[60px] md:ml-[80px]"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* Edit Automation Workflow */}
        <section className="w-full flex flex-col lg:flex-row justify-start items-center py-[23px]">
          {/* <img
            src="/images/clip.png"
            alt="Decorative"
            className="w-[52px] hidden lg:block border border-[#F0F0F0] rounded-[10px] sm:w-[78px] md:w-[104px] h-[385px] sm:h-[577px] md:h-[770px]"
          /> */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center flex-1 w-full">
            <Image
              src="/images/ai-spreadsheet.webp"
              alt="Edit Automation Workflow"
              className="w-full lg:w-[46%] h-[200px] sm:h-[480px] md:h-[640px] rounded-[20px] order-1 lg:order-1"
              width={500}
              height={500}
            />
            <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-full lg:w-[46%] mt-5 sm:mt-00  lg:ml-[40px] sm:ml-[60px] md:ml-[80px] order-2 lg:order-2">
              <h3 className="text-[18px] sm:text-[24px] md:text-[32px] font-inter font-semibold leading-[24px] sm:leading-[33px] md:leading-[44px] text-left text-global-2 w-full">
                Edit every step of your automation workflow — in an AI spreadsheet
              </h3>
              <p className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3 w-full">
                Everything is in a spreadsheet view — messages, triggers, conditions.
                <br />
                <br />
                You can change anything instantly. No learning curve.
              </p>
              <div className="flex items-center gap-[12px] mt-[16px]">
                <span className="text-[32px] font-inter font-bold text-[#f54e00] leading-[1]">
                  20+
                </span>
                <div className="flex flex-col">
                  <span className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3">
                    hours saved from debugging complex flows.
                  </span>
                  <span className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3">
                    No node rewiring headaches
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrate with MCP Server */}
        <section className="w-full flex flex-col lg:flex-row justify-start items-center py-[23px]">
          {/* <img
            src="/images/clip.png"
            alt="Decorative"
            className="w-[52px] hidden lg:block border border-[#F0F0F0] rounded-[10px] sm:w-[78px] md:w-[104px] h-[385px] sm:h-[577px] md:h-[770px]"
          /> */}
          <div className="container mx-auto flex flex-col lg:flex-row justify-start items-center flex-1 w-full">
            <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-full lg:w-[46%] mt-[20px] sm:mt-0">
              <h3 className="text-[18px] sm:text-[24px] md:text-[32px] font-inter font-semibold leading-[24px] sm:leading-[33px] md:leading-[44px] text-left text-global-2 w-full">
                Integrate with any app using MCP server
              </h3>
              <p className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3 w-full">
                Hook into any app instantly using MCP servers and pull/push data. No integration
                headaches - a seamless access to power the campaigns.
              </p>
              <div className="flex items-center gap-[12px] mt-[16px]">
                <span className="text-[32px] font-inter font-bold text-[#f54e00] leading-[1]">
                  1-click
                </span>
                <div className="flex flex-col">
                  <span className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3">
                    stack integration.
                  </span>
                  <span className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3">
                    No limits. No setup pain
                  </span>
                </div>
              </div>
            </div>
            <Image
              src="/images/mcp-server.jpg"
              alt="Integrate with MCP Server"
              className="w-full lg:w-[46%] h-[200px] sm:h-[480px] md:h-[640px] rounded-[20px] mt-[20px] lg:mt-0 lg:ml-[40px] sm:ml-[60px] md:ml-[80px]"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* Track Lead Journey */}
        <section className="w-full flex flex-col lg:flex-row justify-start items-center py-[23px]">
          {/* <img
            src="/images/clip.png"
            alt="Decorative"
            className="w-[52px] hidden lg:block border border-[#F0F0F0] rounded-[10px] sm:w-[78px] md:w-[104px] h-[385px] sm:h-[577px] md:h-[770px]"
          /> */}
          <div className="container mx-auto flex flex-col lg:flex-row  items-center flex-1  w-full">
            <Image
              src="/images/ai-lead.webp"
              alt="Track Lead Journey"
              className="w-full lg:w-[46%] h-[200px] sm:h-[480px] md:h-[640px] rounded-[20px] order-1 lg:order-1"
              width={500}
              height={500}
            />
            <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-full lg:w-[46%] mt-[20px]  lg:ml-[40px] sm:ml-[60px] md:ml-[80px] sm:mt-0 order-2 lg:order-2">
              <h3 className="text-[18px] sm:text-[24px] md:text-[32px] font-inter font-semibold leading-[24px] sm:leading-[33px] md:leading-[44px] text-left text-global-2 w-full">
                Track every lead journey — from first message to closed deal
              </h3>
              <p className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3 w-full">
                See which messages work, where leads drop off, and what to double down on.
                <br />
                <br />
                All insights live inside the same spreadsheet UI.
              </p>
              <div className="flex items-center gap-[12px] mt-[16px]">
                <span className="text-[32px] font-inter font-bold text-[#f54e00] leading-[1]">
                  360°
                </span>
                <div className="flex flex-col">
                  <span className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3">
                    visibility to every lead;
                  </span>
                  <span className="text-[14px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[20px] md:leading-[27px] text-left text-global-3">
                    Zero dashboard hopping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Idea to Execution Section */}
      <section className="container mx-auto w-full py-[73px] sm:py-[109px] md:py-[146px]">
        <div
          className="w-full relative"
          // style={{
          //   backgroundImage: "url('/images/img_ellipse_1.svg')",
          //   backgroundSize: 'contain',
          //   backgroundPosition: 'center',
          //   backgroundRepeat: 'no-repeat',
          // }}
        >
          <div
            className="absolute hidden lg:block top-1/2 left-[10%] translate-x-[0%] translate-y-[-50%] w-full h-full max-w-[365px] max-h-[365px]"
            style={{
              borderRadius: '365px',
              background: 'rgba(245, 78, 0, 0.30)',
              filter: 'blur(250px)',
            }}
          ></div>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-center items-start w-full max-w-[1308px] mx-auto">
              {/* Left Content */}
              <div className="flex flex-col gap-[16px] sm:gap-[24px] md:gap-[32px] justify-start items-start w-full lg:w-[34%] mb-8 lg:mb-0">
                <div className="flex flex-col gap-[12px] sm:gap-[18px] md:gap-[24px] justify-start items-center w-[82%]">
                  <h2 className="text-[20px] sm:text-[30px] md:text-[40px] font-inter font-bold leading-[28px] sm:leading-[42px] md:leading-[56px] text-left text-global-2 w-full">
                    Idea to execution in minutes
                  </h2>
                  <p className="text-[9px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[13px] sm:leading-[20px] md:leading-[27px] text-left text-global-3 w-full">
                    No matter the task. Just command and execute
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  className="px-[24px] sm:px-[30px] md:px-[70px] py-[10px] sm:py-[11px] md:py-[12px] text-[14px] sm:text-[15px] md:text-[16px] font-inter font-bold leading-[18px] sm:leading-[19px] md:leading-[20px] bg-global-1 text-button-1 border border-[#2e2e2e] rounded-[10px] shadow-[0px_4px_6px_#cccccc]"
                >
                  Book a call
                </Button>
              </div>
              {/* Right Features Grid */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-[12px] sm:gap-[18px] md:gap-[24px] self-center">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-[12px] sm:gap-[18px] md:gap-[24px] justify-start items-start w-full px-[10px] sm:px-[15px] md:px-[20px] py-[10px] sm:py-[15px] md:py-[20px] border border-global-3 rounded-[20px] bg-global-5 shadow-[0px_4px_4px_#d9d9d933]"
                  >
                    <img
                      src={feature.icon}
                      alt="Feature Icon"
                      className="w-[16px] md:w-[32px] h-[16px] sm:w-[24px] md:h-[32px]"
                    />
                    <h4 className="text-[12px] sm:text-[18px] md:text-[24px] font-inter font-semibold leading-[15px] sm:leading-[22px] md:leading-[30px] text-left text-global-2 w-auto">
                      {feature.title}
                    </h4>
                    <p className="text-[9px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[13px] sm:leading-[20px] md:leading-[27px] text-left text-global-3 w-full">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto w-full py-[32px] sm:py-[48px] md:py-[64px]">
        <div className="w-full">
          <div className="flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] justify-start items-center w-full">
            {/* Section Header */}
            <div className="flex flex-col gap-[23px] sm:gap-[34px] md:gap-[46px] justify-start items-center w-full">
              {/* Horizontal Line with Logo Container */}
              <div className="relative w-full flex items-center justify-center max-w-[750px]">
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
              <h2 className="text-[20px] sm:text-[30px] md:text-[40px] font-inter font-bold leading-[24px] sm:leading-[36px] md:leading-[49px] text-center text-global-2 w-auto">
                How it works
              </h2>
            </div>
            {/* Workflow Steps and Image */}
            <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1308px] mx-auto gap-[40px] sm:gap-[60px] md:gap-[80px]">
              {/* Steps */}
              <div className="relative w-full lg:w-[46%]">
                <div className="flex flex-col gap-[24px] sm:gap-[36px] md:gap-[48px]">
                  {workflowSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-row gap-[16px] sm:gap-[24px] md:gap-[32px] items-start"
                    >
                      {/* Step Bullet and Line */}
                      <div className="flex flex-col items-center">
                        <div className="w-[8px] sm:w-[12px] md:w-[16px] h-[8px] sm:h-[12px] md:h-[16px] bg-black rounded-[2px]"></div>
                        {index < workflowSteps.length - 1 && (
                          <div className="w-[2px] h-[60px] sm:h-[90px] md:h-[120px] bg-global-3 mt-[8px] sm:mt-[12px] md:mt-[16px]"></div>
                        )}
                      </div>
                      {/* Step Content */}
                      <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] flex-1">
                        <h4 className="text-[12px] sm:text-[18px] md:text-[24px] font-inter font-bold leading-[15px] sm:leading-[22px] md:leading-[30px] text-left text-global-2 w-auto">
                          {step.title}
                        </h4>
                        <p className="text-[9px] sm:text-[13px] md:text-[18px] font-inter font-normal leading-[13px] sm:leading-[20px] md:leading-[27px] text-left text-global-3 w-full">
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
                  className="w-full h-[320px] sm:h-[480px] md:h-[640px] rounded-[20px] bg-gray-100"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Call Section */}
      <section
        className="w-full py-[77px] sm:py-[115px] md:mt-[-1px] md:py-[154px] "
        style={{
          backgroundImage: "url('/images/img_union_gray_50.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className=" w-full  px-4">
          <div className="flex flex-col gap-[42px] sm:gap-[63px] md:gap-[84px] justify-start w-full mx-auto mt-[2px] sm:mt-[3px] md:mt-[4px] ">
            <div className="flex flex-col gap-[42px] sm:gap-[63px] md:gap-[84px] justify-start  flex-1">
              <div className="container mx-auto px-4 flex flex-col justify-start items-start flex-1">
                <h2 className="text-[20px] mb-6 sm:text-[30px] md:text-[40px] font-inter font-light italic leading-[24px] sm:leading-[36px] md:leading-[49px] text-left text-global-2 w-auto">
                  Book a discovery call and we will build together:
                </h2>
                <p className="text-[9px] sm:text-[13px] md:text-[18px] font-inter font-normal text-left text-global-3 w-full">
                  ✅ A live agent that scrapes and enriches leads for your ICP
                </p>

                <p className="text-[9px] sm:text-[13px] md:text-[18px] font-inter font-normal text-left text-global-3 w-full">
                  ✅ A workflow that scores and syncs contacts to your CRM
                </p>
                <p className="text-[9px] sm:text-[13px] md:text-[18px] font-inter font-normal text-left text-global-3 w-full">
                  ✅ A spreadsheet that runs your outbound motion on schedule
                </p>
                <p className="text-[9px] sm:text-[13px] md:text-[18px] font-inter font-normal text-left text-global-3 w-full">
                  ✅ A working GTM system you can edit, reuse, and scale
                </p>
                <p className="pt-10 text-[9px] sm:text-[13px] md:text-[18px] font-inter font-normal text-left text-global-3 w-full">
                  No slides. No fluff. Just working outbound, fast.
                </p>
              </div>
              <div className="px-[32px]">
                <Image
                  src="/images/discovery.webp"
                  alt="Discovery Call"
                  className="w-full object-cover h-[200px] sm:h-[300px] md:h-[450px] rounded-[20px]"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Button
                variant="primary"
                size="md"
                className="px-[24px]  sm:px-[30px] md:px-[70px] py-[10px] sm:py-[11px] md:py-[12px] text-[14px] sm:text-[15px] md:text-[16px] font-inter font-bold leading-[18px] sm:leading-[19px] md:leading-[20px] bg-global-1 text-button-1 border border-[#2e2e2e] rounded-[10px] shadow-[0px_4px_6px_#cccccc]"
              >
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* User Stories Section */}
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
              <div className="flex flex-col lg:flex-row gap-[20px] sm:gap-[30px] md:gap-[40px] w-full max-w-[900px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-[20px] sm:gap-[24px] md:gap-[28px] justify-start items-start w-full lg:w-1/2 px-[20px] sm:px-[24px] md:px-[32px] py-[24px] sm:py-[28px] md:py-[32px] border border-black rounded-[20px] bg-white"
                  >
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-roboto font-normal leading-[20px] sm:leading-[24px] md:leading-[26px] text-left text-global-1 w-full">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-row gap-[12px] sm:gap-[16px] md:gap-[20px] justify-start items-center w-full">
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
              {/* Pagination Dots */}
              <div className="flex flex-row gap-[6px] sm:gap-[8px] md:gap-[10px] justify-center items-center py-[10px] sm:py-[15px] md:py-[20px] w-auto">
                <div className="w-[6px] sm:w-[8px] md:w-[10px] h-[6px] sm:h-[8px] md:h-[10px] bg-global-1 rounded-full"></div>
                <div className="w-[6px] sm:w-[8px] md:w-[10px] h-[6px] sm:h-[8px] md:h-[10px] bg-global-2 rounded-full"></div>
                <div className="w-[6px] sm:w-[8px] md:w-[10px] h-[6px] sm:h-[8px] md:h-[10px] bg-global-2 rounded-full"></div>
                <div className="w-[6px] sm:w-[8px] md:w-[10px] h-[6px] sm:h-[8px] md:h-[10px] bg-global-2 rounded-full"></div>
                <div className="w-[6px] sm:w-[8px] md:w-[10px] h-[6px] sm:h-[8px] md:h-[10px] bg-global-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What Do You Want to Automate Section */}
      <section className="w-full flex flex-col gap-[30px] sm:gap-[45px] md:gap-[60px] justify-start items-center mt-[89px] sm:mt-[133px] md:mt-[178px] ">
        <h2 className="text-[20px] sm:text-[30px] sm:px-[106px] md:px-[142px] md:text-[40px] font-inter font-bold leading-[24px] sm:leading-[36px] md:leading-[49px] text-center text-global-2 w-auto">
          What do you want to automate today?
        </h2>
        <div className="w-full max-w-[1155px]">
          <div
            className="flex flex-row justify-center items-center w-full py-[112px]"
            style={{
              backgroundImage: "url('/images/Frame.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex max-w-[763px] mt-2 flex-col gap-[20px] sm:gap-[30px] md:gap-[32px] justify-start items-center w-[75%]">
              {/* Search Input */}
              <div className="flex flex-row justify-between items-center w-full px-[8px] sm:px-[30px] md:px-[40px] py-[6px] sm:py-[20px] md:py-[16px] border border-[#18181B] rounded-[16px] bg-global-5">
                <input
                  type="text"
                  placeholder="Ask meerkats AI to find ceo names of recently funded startups..."
                  className="flex-1 text-[12px] sm:text-[16px] md:text-[17px] font-inter font-normal leading-[14px] sm:leading-[21px] md:leading-[22px] text-left text-global-3 bg-transparent border-none outline-none mr-[2px] sm:mr-[12px] md:mr-[16px]"
                />
                <img
                  src="/images/img_clarity_circle_arrow_solid.svg"
                  alt="Submit"
                  className="w-[16px] h-[16px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] cursor-pointer flex-shrink-0"
                />
              </div>

              {/* Suggestion Pills */}
              <div className="flex flex-col sm:flex-row gap-[18px] sm:gap-[26px] md:gap-[34px] justify-start items-center w-full">
                <button className="w-full sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
                  Scrape domains, enrich, push to CRM
                </button>
                <button className="w-full sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
                  Add stripe customers to your CRM
                </button>
                <button className="w-full sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
                  Track new signups, research, post to Slack
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full flex flex-row justify-center items-center py-[55px] sm:py-[82px] md:py-[110px] mt-[63px] sm:mt-[94px] md:mt-[126px] bg-global-5">
        <div className="flex flex-col gap-[35px] sm:gap-[52px] md:gap-[70px] justify-start items-center w-[58%]">
          <h2 className="text-[20px] sm:text-[30px] md:text-[40px] font-inter font-bold leading-[24px] sm:leading-[36px] md:leading-[49px] text-center text-global-2 w-auto">
            Frequently asked questions
          </h2>
          <ExpandableList items={faqItems} />
        </div>
      </section>
      {/* Footer */}
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
