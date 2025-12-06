import React from 'react';

interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  index?: number;
  noPadding?: boolean;
}

export const CardSection: React.FC<CardSectionProps> = ({
  children,
  className = '',
  id,
  index = 0,
  noPadding = false
}) => {
  return (
    <div
      id={id}
      className={`sticky top-0 h-[100dvh] min-h-[100dvh] w-full block overflow-hidden ${className}`}
      style={{
        zIndex: index * 10,
        margin: 0,
        padding: 0,
      }}
    >
      {/* Full height scroll container */}
      <div className="absolute inset-0 w-full h-full overflow-y-auto scrollbar-hide">
        <div className={`h-full flex flex-col justify-start`}>
          {children}
        </div>
      </div>
    </div>
  );
};
