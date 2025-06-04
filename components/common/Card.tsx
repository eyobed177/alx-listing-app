import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  price, 
  location,
  className = '',
  children 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {image && (
        <div className="relative h-48 w-full">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-4">
        {title && (
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {title}
          </h3>
        )}
        
        {location && (
          <p className="text-sm text-gray-600 mb-2">
            📍 {location}
          </p>
        )}
        
        {description && (
          <p className="text-gray-600 mb-3 line-clamp-3">
            {description}
          </p>
        )}
        
        <div className="flex justify-between items-center">
          {price && (
            <div className="text-lg font-bold text-blue-600">
              ${price}
            </div>
          )}
          
          {children && (
            <div className="flex gap-2">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;