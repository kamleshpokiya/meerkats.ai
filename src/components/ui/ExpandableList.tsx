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
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(items.map((item) => item.id))
  );

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
              className="flex flex-row justify-between items-center w-full p-6 transition-colors duration-200 focus:outline-none rounded-[16px]"
              aria-expanded={isExpanded}
              aria-controls={`content-${item.id}`}
            >
              <span className="text-[18px] font-inter font-bold leading-[22px] text-global-1 flex-1 text-left">
                {item.question}
              </span>
              <img
                src="/images/img_arrow_up.svg"
                alt={isExpanded ? 'Collapse' : 'Expand'}
                className={`w-[24px] h-[24px] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Content */}
            {isExpanded && (
              <div
                id={`content-${item.id}`}
                className="flex flex-row justify-start items-center w-full px-6 pb-6"
              >
                <p className="text-[16px] font-inter font-normal leading-[24px] text-left text-global-3 w-full">
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
