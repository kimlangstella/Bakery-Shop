import React, { ReactNode } from 'react';

interface TypoProps {
  children: ReactNode;
  className?: string;
  fontSize?: 'title' | 'heading2' | 'heading3' | 'description';
  color?: 'primary' | 'secondary' | 'default'; 
  fontWeight?: 'bold' | 'defult';
}

const Typography: React.FC<TypoProps> = ({
  children,
  fontSize = 'description',
  className = '',
  color = 'default',
  fontWeight = 'defult',
}) => {

  const getFontSizeClass = (fontSize: string) => {
    switch (fontSize) {
      case 'title':
        return 'text-4xl font-bold';
      case 'heading2':
        return 'text-3xl font-semibold';
      case 'heading3':
        return 'text-2xl font-medium';
      case 'description':
      default:
        return 'text-base';
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-[#D9529B]';
      case 'secondary':
        return 'text-[#D95252]';
      default:
        return 'text-[#333333]';
    }
  };

  const getFontWeightClass = (fontWeight: string) => {
    switch (fontWeight) {
      case 'bold':
        return 'font-bold';
      default:
        return 'font-normal';
    }
  };

  return (
    <div
      className={`${getFontSizeClass(fontSize)} ${getColorClass(color)} ${getFontWeightClass(fontWeight)} ${className}`}
    >
      {children}
    </div>
  );
};

export { Typography };
