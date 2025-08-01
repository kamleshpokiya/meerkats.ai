import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import ExpandableList from '@/components/ui/ExpandableList';
import Image from 'next/image';
import Marquee from '@/components/ui/Marquee';
import UserStories from '@/components/common/UserStories';
import HowItWorks from '@/components/common/HowItWorks';
import FadeInAnimation from '@/components/ui/FadeInAnimation';

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
    <div className="flex flex-col justify-start items-center w-full bg-global-5 overflow-x-hidden">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="w-full flex flex-row justify-start items-center">
        <div className="w-full flex flex-row gap-[19px] sm:gap-[28px] md:gap-[38px] justify-start items-start">
          {/* Left Decorative Image */}
          <img
            src="/images/img_6838210483869da.svg"
            alt="Decorative"
            className="w-[52px] hidden lg:block sm:w-[78px] md:w-[104px] h-[277px] sm:h-[415px] md:h-[554px]"
          />
          {/* Main Hero Content */}
          <div className="container mx-auto flex flex-col justify-start items-center flex-1 my-[112px]">
            <div className="flex flex-col justify-start items-center flex-1 px-8 sm:px-6 md:px-8 lg:px-10">
              {/* Hero Title */}
              <h1 className="text-[64px] font-inter font-bold leading-[70px]  text-center text-global-2">
                <span>Automate growth workflows</span>
                <br />
                <span>by chatting with AI</span>
              </h1>
              {/* Hero Description */}
              <p className="text-[24px] py-5 font-inter font-normal leading-[36px] text-center text-global-3 w-full">
                Generate leads, onboard users, and track results
              </p>
            </div>

            {/* Interactive Demo Section */}
            <div className="w-full max-w-[1155px] px-8 sm:px-6 md:px-8">
              <div className="flex flex-row justify-center items-center w-full bg-[url('/images/Frame-xs.png')] sm:bg-[url('/images/Frame.png')] bg-contain bg-center bg-no-repeat py-[60px] sm:py-[80px] md:py-[112px]">
                <div className="flex max-w-[763px] mt-2 flex-col gap-[20px] sm:gap-[30px] md:gap-[32px] justify-start items-center w-full sm:w-[85%] md:w-[75%]">
                  {/* Search Input */}
                  <div className="flex flex-row justify-between items-center w-full px-[32px] sm:px-[30px] md:px-[40px] py-[6px] sm:py-[20px] md:py-[16px] border border-[#18181B] rounded-[16px] bg-global-5">
                    <textarea
                      placeholder="Ask meerkats AI to find ceo names of recently funded startups..."
                      className="sm:hidden flex-1 resize-none pr-[35px] overflow-hidden placeholder:text-wrap placeholder:text-[#52525B] sm:h-auto placeholder:sm:text-nowrap text-[16px] font-inter font-normal leading-[24px] text-left text-global-3 bg-transparent border-none outline-none mr-[2px] sm:mr-[12px] md:mr-[16px]"
                      rows={3}
                    />
                    <textarea
                      placeholder="Ask meerkats AI to find ceo names of recently funded startups..."
                      className="hidden sm:flex flex-1 resize-none overflow-hidden placeholder:text-wrap placeholder:text-[#52525B] sm:h-auto placeholder:sm:text-nowrap text-[16px] font-inter font-normal leading-[24px] text-left text-global-3 bg-transparent border-none outline-none mr-[2px] sm:mr-[12px] md:mr-[16px]"
                      rows={1}
                    />
                    <img
                      src="/images/img_clarity_circle_arrow_solid.svg"
                      alt="Submit"
                      className="hidden sm:block w-[16px] h-[16px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] cursor-pointer flex-shrink-0"
                    />
                  </div>

                  {/* Suggestion Pills */}
                  <div className="flex flex-col sm:flex-row gap-[18px] sm:gap-[26px] md:gap-[34px] justify-start items-center sm:w-full">
                    <button className=" sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
                      Scrape domains, enrich, push to CRM
                    </button>
                    <button className="sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
                      Add stripe customers to your CRM
                    </button>
                    <button className="sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
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
                className="sm:w-auto !px-[61px]  py-[10px] sm:py-[11px] md:py-[12px] text-[14px] sm:text-[15px] md:text-[16px] font-inter font-bold leading-[18px] sm:leading-[19px] md:leading-[20px] bg-global-1 text-button-1 border border-[#2e2e2e] rounded-[10px] shadow-[0px_4px_6px_#cccccc]"
              >
                Watch demo
              </Button>
              <Button
                variant="outline"
                size="md"
                className="sm:w-auto !px-[67px]  py-[10px] sm:py-[11px] md:py-[12px] text-[14px] sm:text-[15px] md:text-[16px] font-inter font-bold leading-[18px] sm:leading-[19px] md:leading-[20px] bg-global-5 text-global-3 border border-[#2e2e2e] rounded-[10px] shadow-[0px_4px_6px_#cccccc]"
              >
                Book a call
              </Button>
            </div>
          </div>
          {/* Right Decorative Image */}
          <img
            src="/images/img_6838210483869da_white_a700.svg"
            alt="Decorative"
            className="w-[52px] hidden lg:block sm:w-[78px] md:w-[104px] h-[277px] sm:h-[415px] md:h-[554px]"
          />
        </div>
      </section>

      {/* VIBE Section */}
      <section className="w-full mt-[35px] sm:mt-[52px] md:mt-[70px] py-[40px] sm:py-[60px] md:pb-[80px] lg:bg-[url('/images/img_union.png')]  bg-[length:cover] lg:bg-[length:106%_100%] sm:bg-center">
        <div className="container w-full mx-auto flex flex-col justify-start items-center">
          {/* VIBE Header */}
          <div className="max-w-[1440px] px-8 flex flex-col sm:flex-row justify-center xl:justify-between items-start sm:items-center w-full sm:px-6 md:px-8 lg:px-10 sm:mt-[33px] xl:gap-8">
            <h2 className="text-[40px] font-inter font-semibold leading-[48px] text-left text-global-2 w-full sm:w-[43%] xl:w-[46%] mb-[32px] sm:mb-[13px] md:mb-[18px]">
              VIBE CODING, BUT FOR
              <br />
              VIBE MARKETERS
            </h2>
            <p className="text-[18px] font-inter font-normal leading-[20px] text-left text-global-3 w-full sm:w-[46%]">
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

          <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="w-auto py-[60px] sm:py-[80px] md:pt-[100px] md:pb-0 rounded-[20px] mx-[10px] sm:mx-[20px] md:mx-[40px] lg:mx-[60px]">
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
                className="space-y-[20px] sm:space-y-[30px] md:space-y-[40px] px-4 sm:px-6"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent 0.5rem, #000 10rem, #000 calc(100% - 10rem), transparent calc(100% - 0.5rem))',
                }}
              >
                {/* Top Row */}
                <Marquee speed={30} gradient={false} className="flex items-center">
                  {icons.map((logo, index) => (
                    <div
                      key={index}
                      className="mx-[6px] sm:mx-[8px] md:mx-[12px] lg:mx-[16px] flex-shrink-0"
                    >
                      <div className="w-[32px] sm:w-[40px] md:w-[50px] lg:w-[60px] h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] bg-global-5 rounded-[8px] flex items-center justify-center border border-global-3">
                        <img
                          src={logo}
                          alt={`Integration ${index + 1}`}
                          className="w-[16px] sm:w-[20px] md:w-[24px] lg:w-[28px] h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px] object-contain"
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
                    <div
                      key={index}
                      className="mx-[6px] sm:mx-[8px] md:mx-[12px] lg:mx-[16px] flex-shrink-0"
                    >
                      <div className="w-[32px] sm:w-[40px] md:w-[50px] lg:w-[60px] h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] bg-global-5 rounded-[8px] flex items-center justify-center border border-global-3">
                        <img
                          src={logo}
                          alt={`Integration ${index + 1}`}
                          className="w-[16px] sm:w-[20px] md:w-[24px] lg:w-[28px] h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px] object-contain"
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
          <div className="max-w-[1440px] flex flex-col lg:flex-row justify-between gap-[60px] lg:w-full mt-[78px] md:mt-[104px] px-4 sm:px-6 md:px-8 lg:px-10">
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-row gap-[24px] justify-start items-start w-[360px] px-[16px] py-[56px] border border-global-3 rounded-[20px] bg-global-5 transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:border-[#f54e00] hover:shadow-[#f54e00]/20 animate-fade-in-up group"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both',
                }}
              >
                <img
                  src={card.icon}
                  alt="Benefit Icon"
                  className="h-[26px] transform transition-all duration-300 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
                />
                <p className="text-[24px] font-inter font-normal leading-[33px] text-left text-global-3 self-center w-[90%]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
          {/* Chat Your Way Title */}
          <h2 className="px-8 text-[40px] font-inter font-bold leading-[60px] text-center text-global-2 w-auto mt-[108px] sm:mt-[162px] md:mt-[216px]">
            With Meerkats ai you
            <br />
            chat your way to growth
          </h2>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="w-full flex flex-col justify-start items-center px-8 sm:px-0 mt-[33px] lg:mt-10">
        {/* Launch Growth Workflows */}
        <FadeInAnimation delay={0} className="w-full">
          <section
            className="w-full flex flex-col lg:flex-row justify-start items-center  lg:py-[124px] md:bg-[url('/images/Frame0.png')] bg-left bg-no-repeat"
            style={{
              backgroundSize: '100% 100%',
            }}
          >
            {/* <img
              src="/images/clip.png"
              alt="Decorative"
              className="w-[52px] hidden lg:block border border-[#F0F0F0] rounded-[10px] sm:w-[78px] md:w-[104px] h-[385px] sm:h-[577px] md:h-[770px]"
            /> */}
            <div className="container mx-auto sm:px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row justify-start items-center flex-1 w-full">
              <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-full">
                <h3 className="text-[32px] font-inter font-semibold leading-[35px]  text-left text-global-2 w-full">
                  Launch growth workflows by chatting with AI
                </h3>
                <p className="text-[18px] font-inter font-normal leading-[20px] py-4  text-left text-global-3 w-full">
                  Describe what you want: the campaign logic, the audience, the tone.
                </p>
                <p className="text-[18px] font-inter font-normal leading-[20px] text-left text-global-3 w-full">
                  The AI agent builds the entire workflow — scraping leads, messaging logic, and
                  follow-ups.
                </p>
                <div className="flex items-center gap-[12px]">
                  <span className="text-[48px] font-inter font-bold text-[#f54e00] leading-[1]">
                    10X
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[18px] font-inter font-normal leading-[27px] text-left text-global-3">
                      faster from idea to live campaign.
                    </span>
                    <span className="text-[18px] font-inter font-normal leading-[27px] text-left text-global-3">
                      Just chat, build, and launch — in minutes
                    </span>
                  </div>
                </div>
              </div>
              <Image
                src="/images/ai-bot.webp"
                alt="Launch Growth Workflows"
                className="w-full h-[430px] lg:h-[480px] xl:h-[640px] rounded-[20px] mt-[56px] lg:mt-0 ml-0 lg:ml-[40px]"
                width={500}
                height={500}
              />
            </div>
          </section>
        </FadeInAnimation>

        {/* Edit Automation Workflow */}
        <FadeInAnimation delay={100} className="w-full">
          <section
            className="w-full flex flex-col lg:flex-row justify-start items-center  py-[50px] lg:py-[77px] sm:bg-[url('/images/Frame1.png')] bg-right bg-no-repeat"
            style={{
              backgroundSize: '100% 100%',
            }}
          >
            {/* <img
              src="/images/clip.png"
              alt="Decorative"
              className="w-[52px] hidden lg:block border border-[#F0F0F0] rounded-[10px] sm:w-[78px] md:w-[104px] h-[385px] sm:h-[577px] md:h-[770px]"
            /> */}
            <div className="container mx-auto sm:px-6 md:px-8 lg:px-10 flex flex-col-reverse lg:flex-row items-center flex-1 w-full">
              <Image
                src="/images/ai-spreadsheet.webp"
                alt="Edit Automation Workflow"
                className="w-full h-[430px] lg:h-[480px] xl:h-[640px] rounded-[20px] order-1 lg:order-1 mt-[56px] lg:mt-0"
                width={500}
                height={500}
              />
              <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-full lg:mt-0  lg:ml-[40px] order-2 lg:order-2">
                <h3 className="text-[32px] font-inter font-semibold leading-[35px] text-left text-global-2 w-full">
                  Edit every step of your automation workflow — in an AI spreadsheet
                </h3>
                <p className="text-[18px] font-inter font-normal leading-[20px] py-4  text-left text-global-3 w-full">
                  Everything is in a spreadsheet view — messages, triggers, conditions.
                  <br />
                  <br />
                  You can change anything instantly. No learning curve.
                </p>
                <div className="flex items-center gap-[12px]">
                  <span className="text-[48px] font-inter font-bold text-[#f54e00] leading-[1]">
                    20+
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[18px] font-inter font-normal leading-[27px] text-left text-global-3">
                      hours saved from debugging complex flows.
                    </span>
                    <span className="text-[18px] font-inter font-normal leading-[27px] text-left text-global-3">
                      No node rewiring headaches
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <img
              src="/images/clip2.png"
              alt="Decorative"
              className="w-[52px] hidden lg:block rounded-[10px] sm:w-[78px] md:w-[104px] h-[385px] sm:h-[577px] md:h-[770px]"
            /> */}
          </section>
        </FadeInAnimation>

        {/* Integrate with MCP Server */}
        <FadeInAnimation delay={200} className="w-full">
          <section
            className="w-full flex flex-col lg:flex-row justify-start items-center lg:py-[124px] md:bg-[url('/images/Frame0.png')] bg-left bg-no-repeat"
            style={{
              backgroundSize: '100% 100%',
            }}
          >
            {/* <img
              src="/images/clip.png"
              alt="Decorative"
              className="w-[52px] hidden lg:block border border-[#F0F0F0] rounded-[10px] sm:w-[78px] md:w-[104px] h-[385px] sm:h-[577px] md:h-[770px]"
            /> */}
            <div className="container mx-auto sm:px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row justify-start items-center flex-1 w-full">
              <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-full  mt-[20px] sm:mt-0">
                <h3 className="text-[32px] font-inter font-semibold leading-[35px] text-left text-global-2 w-full">
                  Integrate with any app using MCP server
                </h3>
                <p className="text-[18px] font-inter font-normal leading-[20px] py-4  text-left text-global-3 w-full">
                  Hook into any app instantly using MCP servers and pull/push data.
                </p>
                <p className="text-[18px] font-inter font-normal leading-[20px] text-left text-global-3 w-full">
                  No integration headaches - a seamless access to power the campaigns.
                </p>
                <div className="flex items-center gap-[12px]">
                  <span className="text-[48px] font-inter font-bold text-[#f54e00] leading-[1]">
                    1-click
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[18px] font-inter font-normal leading-[27px] text-left text-global-3">
                      stack integration.
                    </span>
                    <span className="text-[18px] font-inter font-normal leading-[27px] text-left text-global-3">
                      No limits. No setup pain
                    </span>
                  </div>
                </div>
              </div>
              <Image
                src="/images/mcp-server.jpg"
                alt="Integrate with MCP Server"
                className="w-full  h-[430px] lg:h-[480px] xl:h-[640px] rounded-[20px] mt-[56px] lg:mt-0 lg:ml-[40px]"
                width={500}
                height={500}
              />
            </div>
          </section>
        </FadeInAnimation>

        {/* Track Lead Journey */}
        <FadeInAnimation delay={300} className="w-full">
          <section
            className="w-full flex flex-col lg:flex-row justify-start items-center py-[50px] lg:py-[77px] sm:bg-[url('/images/Frame1.png')] bg-right bg-no-repeat"
            style={{
              backgroundSize: '100% 100%',
            }}
          >
            {/* <img
              src="/images/clip.png"
              alt="Decorative"
              className="w-[52px] hidden lg:block border border-[#F0F0F0] rounded-[10px] sm:w-[78px] md:w-[104px] h-[385px] sm:h-[577px] md:h-[770px]"
            /> */}
            <div className="container mx-auto sm:px-6 md:px-8 lg:px-10 flex flex-col-reverse lg:flex-row items-center flex-1 w-full">
              <Image
                src="/images/ai-lead.webp"
                alt="Track Lead Journey"
                className="w-full  h-[430px] lg:h-[480px] xl:h-[640px] rounded-[20px] order-1 lg:order-1 mt-[56px] lg:mt-0"
                width={500}
                height={500}
              />
              <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-full  mt-5 lg:mt-0  lg:ml-[40px] order-2 lg:order-2">
                <h3 className="text-[32px] font-inter font-semibold leading-[35px] text-left text-global-2 w-full">
                  Track every lead journey — from first message to closed deal
                </h3>
                <p className="text-[18px] font-inter font-normal leading-[20px] py-4  text-left text-global-3 w-full">
                  See which messages work, where leads drop off, and what to double down on.
                  <br />
                  <br />
                  All insights live inside the same spreadsheet UI.
                </p>
                <div className="flex items-center gap-[12px]">
                  <span className="text-[48px] font-inter font-bold text-[#f54e00] leading-[1]">
                    360°
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[18px] font-inter font-normal leading-[27px] text-left text-global-3">
                      visibility to every lead;
                    </span>
                    <span className="text-[18px] font-inter font-normal leading-[27px] text-left text-global-3">
                      Zero dashboard hopping
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <img
              src="/images/clip2.png"
              alt="Decorative"
              className="w-[52px] hidden lg:block rounded-[10px] sm:w-[78px] md:w-[104px] h-[385px] sm:h-[577px] md:h-[770px]"
            /> */}
          </section>
        </FadeInAnimation>
      </div>

      {/* Idea to Execution Section */}

      <FadeInAnimation delay={400} className="">
        <section className="container mx-auto py-[73px] sm:py-[109px] md:py-[146px] px-8 sm:px-6 md:px-8 lg:px-10">
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
              className="absolute top-[20%] md:top-1/2 left-[10%] translate-x-[0%] translate-y-[-50%] w-full h-full max-w-[365px] max-h-[365px]"
              style={{
                borderRadius: '365px',
                background: 'rgba(245, 78, 0, 0.30)',
                filter: 'blur(250px)',
              }}
            ></div>
            <div className="w-full ">
              <div className="flex flex-col lg:flex-row justify-center items-start w-full mx-auto">
                {/* Left Content */}
                <div className="flex flex-col gap-[16px] sm:gap-[24px] md:gap-[32px] justify-start items-start w-full lg:w-[34%] mb-8 lg:mb-0">
                  <div className="flex flex-col gap-[12px] sm:gap-[18px] md:gap-[24px] justify-start items-center w-full lg:w-[82%]">
                    <h2 className="text-[40px] font-inter font-bold leading-[56px] text-left text-global-2 w-full">
                      Idea to execution in minutes
                    </h2>
                    <p className="text-[18px] font-inter font-normal leading-[27px] text-left text-global-3 w-full">
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
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-[48px] w-full self-center">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-[12px] sm:gap-[18px] md:gap-[24px] justify-start items-start w-full p-4 border border-global-3 rounded-[20px] bg-global-5 shadow-[0px_4px_4px_#d9d9d933] transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:border-[#f54e00] hover:shadow-[#f54e00]/20 animate-fade-in-up group"
                    >
                      <img
                        src={feature.icon}
                        alt="Feature Icon"
                        className=" w-[32px] h-[32px] transform transition-all duration-300 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
                      />
                      <h4 className="text-[24px] font-inter font-semibold leading-[33px] text-left text-global-2 w-auto">
                        {feature.title}
                      </h4>
                      <p className="text-[18px] font-inter font-normal leading-[27px] text-left text-global-3 w-full">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInAnimation>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Discovery Call Section */}
      <section className="w-full py-[77px]  sm:pt-[115px] sm:pb-[29px] lg:mt-[64px] xl:py-[154px] lg:bg-[url('/images/img_union_gray_50.svg')] bg-[length:110%_110%]  xl:bg-[length:cover] bg-top">
        <div className="w-full px-8 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col gap-[42px] sm:gap-[63px] md:gap-[84px] justify-start w-full mx-auto mt-[2px] sm:mt-[3px] md:mt-[4px]">
            <div className="flex flex-col gap-[42px] sm:gap-[63px] md:gap-[84px] justify-start flex-1">
              <div className="container mx-auto flex flex-col justify-start items-start flex-1">
                <p className="text-[40px] font-inter font-light italic leading-[56px] text-left text-global-2 w-auto">
                  Book a discovery call and we will build together:
                </p>
                <p className="text-[18px] leading-[27px] pt-6 font-inter font-normal text-left text-global-3 w-full">
                  ✅ A live agent that scrapes and enriches leads for your ICP
                </p>

                <p className="text-[18px]  leading-[27px] font-inter font-normal text-left text-global-3 w-full">
                  ✅ A workflow that scores and syncs contacts to your CRM
                </p>
                <p className="text-[18px] leading-[27px] font-inter font-normal text-left text-global-3 w-full">
                  ✅ A spreadsheet that runs your outbound motion on schedule
                </p>
                <p className="text-[18px] leading-[27px] font-inter font-normal text-left text-global-3 w-full">
                  ✅ A working GTM system you can edit, reuse, and scale
                </p>
                <p className="pt-10 text-[18px] leading-[27px] font-inter font-normal text-left text-global-3 w-full">
                  No slides. No fluff. Just working outbound, fast.
                </p>
              </div>
              <div className="sm:px-6 md:px-8 lg:px-10">
                <Image
                  src="/images/discovery.webp"
                  alt="Discovery Call"
                  className="w-full object-cover h-[400px]  xl:h-[450px] rounded-[20px]"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
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
      <UserStories />

      {/* What Do You Want to Automate Section */}
      <section className="w-full flex flex-col gap-[60px] justify-start items-center mt-[89px] sm:mt-[133px] md:mt-[178px] px-8 lg:px-10">
        <h2 className="text-[40px] font-inter font-bold leading-[48px] text-center text-global-2 w-full">
          What do you want to automate today?
        </h2>

        <div className="w-full max-w-[1155px]">
          <div className="flex flex-row justify-center items-center w-full bg-[url('/images/Frame-xs.png')] sm:bg-[url('/images/Frame.png')] bg-contain bg-center bg-no-repeat py-[60px] sm:py-[80px] md:py-[112px]">
            <div className="flex max-w-[763px] mt-2 flex-col gap-[20px] sm:gap-[30px] md:gap-[32px] justify-start items-center w-full sm:w-[85%] md:w-[75%]">
              {/* Search Input */}
              <div className="flex flex-row justify-between items-center w-full px-[32px] sm:px-[30px] md:px-[40px] py-[6px] sm:py-[20px] md:py-[16px] border border-[#18181B] rounded-[16px] bg-global-5">
                <textarea
                  placeholder="Ask meerkats AI to find ceo names of recently funded startups..."
                  className="sm:hidden flex-1 resize-none pr-[35px] overflow-hidden placeholder:text-wrap placeholder:text-[#52525B] sm:h-auto placeholder:sm:text-nowrap text-[16px] font-inter font-normal leading-[24px] text-left text-global-3 bg-transparent border-none outline-none mr-[2px] sm:mr-[12px] md:mr-[16px]"
                  rows={3}
                />
                <textarea
                  placeholder="Ask meerkats AI to find ceo names of recently funded startups..."
                  className="hidden sm:flex flex-1 resize-none overflow-hidden placeholder:text-wrap placeholder:text-[#52525B] sm:h-auto placeholder:sm:text-nowrap text-[16px] font-inter font-normal leading-[24px] text-left text-global-3 bg-transparent border-none outline-none mr-[2px] sm:mr-[12px] md:mr-[16px]"
                  rows={1}
                />
                <img
                  src="/images/img_clarity_circle_arrow_solid.svg"
                  alt="Submit"
                  className="hidden sm:block w-[16px] h-[16px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] cursor-pointer flex-shrink-0"
                />
              </div>

              {/* Suggestion Pills */}
              <div className="flex flex-col sm:flex-row gap-[18px] sm:gap-[26px] md:gap-[34px] justify-start items-center sm:w-full">
                <button className=" sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
                  Scrape domains, enrich, push to CRM
                </button>
                <button className="sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
                  Add stripe customers to your CRM
                </button>
                <button className="sm:w-auto text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[15px]  text-left text-global-2 border border-[#f54e00] rounded-[8px] px-[6px] py-[6px] sm:py-[8px] md:py-[10px] bg-global-5">
                  Track new signups, research, post to Slack
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full flex flex-row justify-center items-center py-[55px] sm:py-[82px] md:py-[110px] mt-[63px] sm:mt-[94px] md:mt-[126px] bg-global-5 px-8 lg:px-10">
        <div className="flex flex-col gap-[70px] justify-start items-center w-full max-w-[800px]">
          <h2 className="text-[40px] font-inter font-bold leading-[48px] text-center text-global-2 w-auto">
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
