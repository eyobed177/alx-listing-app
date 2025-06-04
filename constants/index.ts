// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  ENDPOINTS: {
    PROPERTIES: '/properties',
    USERS: '/users',
    BOOKINGS: '/bookings',
    SEARCH: '/search',
    AUTH: '/auth',
  },
  TIMEOUT: 10000, // 10 seconds
};

// UI Text Constants
export const UI_TEXT = {
  BUTTONS: {
    BOOK_NOW: 'Book Now',
    VIEW_DETAILS: 'View Details',
    SEE_MORE: 'See More',
    CANCEL: 'Cancel',
    CONFIRM: 'Confirm',
    SAVE: 'Save',
    EDIT: 'Edit',
    DELETE: 'Delete',
    LOADING: 'Loading...',
    SEARCH: 'Search',
    FILTER: 'Filter',
  },
  LABELS: {
    PRICE_PER_NIGHT: 'per night',
    GUESTS: 'Guests',
    BEDROOMS: 'Bedrooms',
    BATHROOMS: 'Bathrooms',
    AREA: 'Area',
    RATING: 'Rating',
    REVIEWS: 'Reviews',
    AMENITIES: 'Amenities',
    LOCATION: 'Location',
    CHECK_IN: 'Check-in',
    CHECK_OUT: 'Check-out',
  },
  MESSAGES: {
    NO_RESULTS: 'No properties found matching your criteria.',
    LOADING_PROPERTIES: 'Loading properties...',
    BOOKING_SUCCESS: 'Booking confirmed successfully!',
    BOOKING_ERROR: 'Failed to complete booking. Please try again.',
    NETWORK_ERROR: 'Network error. Please check your connection.',
    INVALID_DATES: 'Please select valid check-in and check-out dates.',
  },
};

// Property Types
export const PROPERTY_TYPES = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'House' },
  { value: 'condo', label: 'Condo' },
  { value: 'villa', label: 'Villa' },
  { value: 'studio', label: 'Studio' },
  { value: 'townhouse', label: 'Townhouse' },
];

// Common Amenities
export const AMENITIES = [
  'WiFi',
  'Air Conditioning',
  'Heating',
  'Kitchen',
  'Washer',
  'Dryer',
  'Parking',
  'Pool',
  'Gym',
  'Pet Friendly',
  'Smoking Allowed',
  'Wheelchair Accessible',
  'TV',
  'Hot Tub',
  'Fireplace',
  'Balcony',
  'Garden',
  'Beach Access',
];

// Price Ranges for Filtering
export const PRICE_RANGES = [
  { min: 0, max: 50, label: 'Under $50' },
  { min: 50, max: 100, label: '$50 - $100' },
  { min: 100, max: 200, label: '$100 - $200' },
  { min: 200, max: 500, label: '$200 - $500' },
  { min: 500, max: 1000, label: '$500 - $1000' },
  { min: 1000, max: Infinity, label: 'Over $1000' },
];

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 50,
  PAGE_SIZE_OPTIONS: [6, 12, 24, 48],
};

// Validation Rules
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  DESCRIPTION_MAX_LENGTH: 1000,
  PHONE_REGEX: /^\+?[\d\s\-\(\)]+$/,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  API: 'yyyy-MM-dd',
  FULL: 'EEEE, MMMM dd, yyyy',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  SEARCH_HISTORY: 'search_history',
  RECENT_PROPERTIES: 'recent_properties',
  AUTH_TOKEN: 'auth_token',
  THEME: 'theme_preference',
};

// Theme Configuration
export const THEME = {
  COLORS: {
    PRIMARY: '#3B82F6', // Blue-500
    SECONDARY: '#6B7280', // Gray-500
    SUCCESS: '#10B981', // Emerald-500
    WARNING: '#F59E0B', // Amber-500
    ERROR: '#EF4444', // Red-500
  },
  BREAKPOINTS: {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px',
  },
};