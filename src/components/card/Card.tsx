import React from 'react';
import { Typography } from '../typography';

interface CardProps {
  imgUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imgUrl, title }) => {
  return (
    <div className="border-2 border-pink-400 w-[302px] h-[375px]">
      <div className="w-full h-[313px] overflow-hidden">
        <img
          src={imgUrl}
          alt={title} 
          width={303} 
          height={313} 
          className="object-cover" 
        />
      </div>
      <Typography color='primary' fontWeight='bold' className='text-center p-2'>{title}</Typography> 
    </div>
  );
};

export default Card;
