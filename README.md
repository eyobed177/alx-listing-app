# ALX Listing App

A modern property listing application built with Next.js, TypeScript, and Tailwind CSS. This project serves as an Airbnb clone, providing users with an intuitive interface to browse and view property listings with detailed information and booking capabilities.

## Project Goals

The ALX Listing App aims to create a comprehensive property rental platform that allows users to:

- Browse through various property listings
- View detailed property information including images, amenities, and pricing
- Search and filter properties based on location, price, and other criteria
- Experience a responsive and user-friendly interface across all devices
- Interact with properties through booking and inquiry features

## Project Structure

The project follows a well-organized structure to maintain clean, scalable, and maintainable code:

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx          # Reusable card component for property displays
│       └── Button.tsx        # Reusable button component for actions
├── constants/
│   └── index.ts              # Application constants, API URLs, and configuration
├── interfaces/
│   └── index.ts              # TypeScript interfaces and type definitions
├── pages/
│   ├── _app.tsx              # Next.js app wrapper component
│   ├── index.tsx             # Home page component
│   └── api/                  # API routes directory
├── public/
│   └── assets/               # Static assets (images, icons, SVGs)
├── styles/
│   └── globals.css           # Global styles and Tailwind CSS imports
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

### Directory Purposes

- **`components/`**: Contains all reusable React components organized by functionality
  - **`common/`**: Shared components used throughout the application
- **`interfaces/`**: TypeScript interface definitions for type safety and better development experience
- **`constants/`**: Centralized location for application constants, configuration settings, and reusable data
- **`public/assets/`**: Static files including images, icons, and other media assets organized for easy access
- **`pages/`**: Next.js Pages Router structure containing all page components and API routes
- **`styles/`**: Global stylesheets and CSS configurations

## Technology Stack

- **Next.js 15.3.3**: React framework with Pages Router for server-side rendering and routing
- **TypeScript 5**: Static type checking for enhanced development experience
- **Tailwind CSS 4**: Utility-first CSS framework for responsive design
- **React 19**: Latest React version for building user interfaces
- **ESLint**: Code linting and formatting for maintaining code quality

## Getting Started

Follow these instructions to set up and run the project locally on your development machine.

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for version control)

### Installation

1. **Clone the repository** (if using version control):
   ```bash
   git clone <repository-url>
   cd alx-listing-app
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Verify Tailwind CSS configuration**:
   Ensure your `tailwind.config.js` matches the project requirements:
   ```javascript
   module.exports = {
     content: [
       './pages/**/*.{ts,tsx}',
       './components/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. **Confirm global styles**:
   Verify that `styles/globals.css` contains only Tailwind imports:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Running the Development Server

Start the development server to run the application locally:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

You should see the Next.js welcome page, indicating that the setup was successful.

### Available Scripts

- **`npm run dev`**: Starts the development server with Turbopack
- **`npm run build`**: Builds the application for production
- **`npm run start`**: Runs the production build locally
- **`npm run lint`**: Runs ESLint to check code quality and formatting

## Development Guidelines

- Follow TypeScript best practices and maintain type safety
- Use the defined interfaces in `interfaces/index.ts` for consistent typing
- Leverage reusable components from `components/common/`
- Store configuration and constants in `constants/index.ts`
- Follow Tailwind CSS utility-first approach for styling
- Maintain clean code standards enforced by ESLint

## Contributing

When contributing to this project:

1. Follow the established project structure
2. Add appropriate TypeScript types for new features
3. Use existing reusable components when possible
4. Update constants file for new configuration values
5. Ensure responsive design using Tailwind CSS
6. Run linting before committing changes

## Next Steps

- Implement property listing components using the Card component
- Add search and filtering functionality
- Create detailed property view pages
- Implement user authentication and booking features
- Add API integration for dynamic data
- Deploy to production environment

---

For questions or issues, please refer to the project documentation or create an issue in the repository.
