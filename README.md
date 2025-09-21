
# ToyFella E-Commerce Frontend

## Overview
ToyFella is a modern, responsive e-commerce frontend for a toy store, built with React and Vite. It features a bright, playful theme inspired by Melissa & Doug, with modular components, accessibility best practices, and a clean UX.

## Tech Stack
- **Languages:** JavaScript (React JSX), CSS (Tailwind CSS)
- **Frameworks/Libraries:**
	- React
	- React Router
	- Tailwind CSS
	- Framer Motion (animations)
	- React Icons
- **Build Tool:** Vite
- **Linting:** ESLint

## Project Structure

```
src/
	App.jsx            # Main app component, routing setup
	App.css            # Global styles and theme overrides
	index.css          # Tailwind base and custom styles
	main.jsx           # React entry point
	context.md         # Project requirements and context
	assets/            # Static assets (images, SVGs)
		HeroImg/         # Hero section images
		LandlingPageImg/ # Images for 'Shop For All Ages' section
		ThirdImg/        # Images for third section
		react.svg        # React logo
	components/        # Reusable UI components
		Footer.jsx       # Site footer
		Header.jsx       # Top navigation/header
		HeroSection.jsx  # Home page hero section
		SecondSection.jsx# Video grid section
		ShopForAllAges.jsx # 'Shop For All Ages' section
		SubNavbar.jsx    # Sub-navigation bar (Home only)
		ThirdSection.jsx # Category carousel section
		ToyCard.jsx      # Product card component
	pages/             # Main pages/views
		CartPage.jsx     # Shopping cart page
		LandingPage.jsx  # Home page
		LoginPage.jsx    # Login form
		ProductListingPage.jsx # (legacy) product listing
		ShopPage.jsx     # Main shop page with filters
		SignupPage.jsx   # Signup form

## Key Features
- Home page with hero, age group, video, and category sections
- Shop page with filter bar (age, category, subcategory, price), sort options, and product grid
- Cart page with quantity management and checkout
- Authentication pages (login/signup)
- Responsive and accessible design
- Modular, maintainable codebase

## Getting Started
1. Install dependencies:
	 ```
	 npm install
	 ```
2. Start development server:
	 ```
	 npm run dev
	 ```
3. Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Customization
- Update images in `src/assets/` for your own branding
- Add more products, categories, or features as needed

## License
MIT
