'use client';
import React, { useState } from 'react';

interface ExpandableItem {
  id: string;
  question: string;
  answer: string;
}

interface ExpandableListProps {
  items: ExpandableItem[];
  className?: string;
  allowMultiple?: boolean;
}

const ExpandableList: React.FC<ExpandableListProps> = ({
  items,
  className = '',
  allowMultiple = true,
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpandedItems = new Set(expandedItems);

    if (expandedItems.has(id)) {
      newExpandedItems.delete(id);
    } else {
      if (!allowMultiple) {
        newExpandedItems.clear();
      }
      newExpandedItems.add(id);
    }

    setExpandedItems(newExpandedItems);
  };

  return (
    <div className={`flex flex-col gap-[16px] w-full ${className}`}>
      {items.map((item) => {
        const isExpanded = expandedItems.has(item.id);

        return (
          <div
            key={item.id}
            className="flex flex-col justify-start items-center w-full border border-black rounded-[16px]"
          >
            {/* Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="flex flex-row justify-between items-center w-full px-[12px] py-[18px] sm:px-[18px] md:px-[24px] transition-colors duration-200 focus:outline-none rounded-[16px]"
              aria-expanded={isExpanded}
              aria-controls={`content-${item.id}`}
            >
              <span className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-inter font-bold leading-[18px] sm:leading-[20px] md:leading-[21px] lg:leading-[22px] text-global-1 flex-1 text-left">
                {item.question}
              </span>
              <img
                src="/images/img_arrow_up.svg"
                alt={isExpanded ? 'Collapse' : 'Expand'}
                className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Content */}
            {isExpanded && (
              <div
                id={`content-${item.id}`}
                className="flex flex-row justify-start items-center w-full px-[12px] pb-[18px] sm:px-[18px] sm:pb-[20px] md:px-[24px] md:pb-[24px]"
              >
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-inter font-normal leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] text-left text-global-3 w-full">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ExpandableList;
