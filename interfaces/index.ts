import { ReactNode, ButtonHTMLAttributes } from 'react';

// Card Component Props
export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  price?: number | string;
  location?: string;
  className?: string;
  children?: ReactNode;
}

// Button Component Props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

// Property/Listing Interface (for future use)
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  amenities: string[];
  type: 'apartment' | 'house' | 'condo' | 'villa';
  bedrooms: number;
  bathrooms: number;
  area: number; // in square feet
  available: boolean;
  rating?: number;
  reviews?: number;
  host?: {
    name: string;
    avatar?: string;
    rating: number;
  };
}

// User Interface (for future use)
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  preferences?: {
    location?: string;
    priceRange?: {
      min: number;
      max: number;
    };
    propertyType?: string[];
  };
}

// Booking Interface (for future use)
export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
}

// API Response Interface
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}