'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const MarqueeComponent = dynamic(() => import('react-fast-marquee'), { 
  ssr: false,
  loading: () => <div className="flex items-center overflow-x-auto">Loading...</div>
});

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  gradient?: boolean;
  gradientColor?: string;
  gradientWidth?: number | string;
  direction?: 'left' | 'right' | 'up' | 'down';
  pauseOnHover?: boolean;
  pauseOnClick?: boolean;
  delay?: number;
  loop?: number;
  className?: string;
  style?: React.CSSProperties;
  play?: boolean;
  gradientLength?: number | string;
  onFinish?: () => void;
  onCycleComplete?: () => void;
  onMount?: () => void;
  onUpdate?: () => void;
}

const Marquee: React.FC<MarqueeProps> = (props) => {
  return <MarqueeComponent {...props} />;
};

export default Marquee; 