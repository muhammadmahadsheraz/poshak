# E-Commerce User Frontend

A modern, React-based frontend for an e-commerce platform, enabling users to browse products, manage their cart, place orders, and track purchases through an intuitive, responsive interface. Built with Vite, Tailwind CSS, and React Router, it integrates seamlessly with a backend API for product data, user authentication, and order processing.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **Product Browsing**:
  - View curated collections (Latest, Best Sellers) and filter products by category (Men, Women, Kids) or type (Topwear, Bottomwear, Winterwear).
  - Search products by name with a dynamic search bar on the Collection page.
  - Explore detailed product pages with multiple images, size selection, and descriptions.
- **Shopping Cart**:
  - Add/remove products with size selection and quantity updates.
  - View cart totals, including subtotal and a fixed $10 shipping fee.
  - Receive toast notifications for cart actions (e.g., item added).
- **Checkout Process**:
  - Place orders with delivery details and payment options (Cash on Delivery, Stripe).
  - Secure payment verification for Stripe transactions with redirect handling.
- **User Authentication**:
  - Sign up and log in with email and password, with token-based persistence.
  - View order history and track statuses (e.g., Placed, Shipped) in a user profile.
- **UI/UX**:
  - Responsive design for mobile and desktop, styled with Tailwind CSS.
  - Toast notifications for success/error feedback using `react-toastify`.
  - Sticky navbar with profile dropdown, cart count, and mobile-friendly sidebar menu.
  - Footer and newsletter subscription for user engagement.
- **Additional Features**:
  - About page highlighting quality assurance and customer service.
  - Contact page with store details and career opportunities.
  - Policies displayed for easy exchanges, 7-day returns, and 24/7 support.

## Tech Stack

- **Frontend**: React.js (v18.3.1)
- **Build Tool**: Vite (v5.4.10) for fast development and hot module replacement
- **Routing**: React Router DOM (v6.28.0)
- **Styling**: Tailwind CSS (v3.4.15) with custom fonts and assets
- **HTTP Requests**: Axios (v1.7.9)
- **Notifications**: React Toastify (v10.0.6)
- **Linting**: ESLint (v9.13.0) with React-specific plugins
- **Backend Integration**: Connects to a custom API (configured via `VITE_BACKEND_URL`)

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- A backend API server (configured via `VITE_BACKEND_URL` in `.env`)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aabr2612/e-commerce-frontend.git
   cd e-commerce-frontend
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set up development server**:
   Create a .env file in the root directory and add the backend URL:
   ```bash
   VITE_BACKEND_URL=http://your-backend-api-url
   ```
4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
## Usage

1. **Browse Products**:
   - Visit the homepage to explore Latest Collections and Best Sellers.
   - Navigate to the "Collection" page to filter by category (Men, Women, Kids), type (Topwear, Bottomwear, Winterwear), or sort by price (low to high, high to low).
   - Use the search bar on the Collection page to find specific products by name.
2. **Add to Cart**:
   - Click a product to view details, select a size, and click "Add to Cart."
   - Adjust quantities or remove items from the cart page using the input field or delete icon.
3. **Checkout**:
   - Log in or sign up to proceed to checkout from the cart page.
   - Enter delivery details (name, address, phone), choose a payment method (Cash on Delivery or Stripe), and click "Place Order."
4. **Track Orders**:
   - Go to the "Orders" page via the profile dropdown to view order history.
   - Check order statuses (e.g., Placed, Shipped) and track updates.

## Project Structure
```bash
  e-commerce-frontend/
    ├── public/                    # Static assets (e.g., favicon)
    ├── src/
    │   ├── assets/                # Frontend assets (images, icons, logo)
    │   │   └── frontend_assets/
    │   ├── components/            # Reusable components
    │   │   ├── BestSeller.jsx
    │   │   ├── CartTotal.jsx
    │   │   ├── Hero.jsx
    │   │   ├── LatestCollection.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── NewsletterBox.jsx
    │   │   ├── OurPolicy.jsx
    │   │   ├── ProductItem.jsx
    │   │   ├── RelatedProducts.jsx
    │   │   ├── SearchBar.jsx
    │   │   └── Title.jsx
    │   ├── context/               # Context for state management
    │   │   └── ShopContext.jsx
    │   ├── pages/                 # Main views
    │   │   ├── About.jsx
    │   │   ├── Cart.jsx
    │   │   ├── Collection.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Orders.jsx
    │   │   ├── PlaceOrder.jsx
    │   │   ├── Product.jsx
    │   │   └── Verify.jsx
    │   ├── App.jsx                # Root component with routing
    │   ├── index.css              # Global styles with Tailwind
    │   └── main.jsx               # Entry point with React DOM
    ├── .env                       # Environment variables (not tracked)
    ├── package.json               # Dependencies and scripts
    ├── package.lock.json          # Locked dependency versions for reproducibility
    ├── vite.config.js             # Vite configuration
    ├── tailwind.config.js         # Tailwind CSS configuration
    ├── eslint.config.js           # ESLint configuration
    └── README.md                  # Project documentation
```
## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## Contact

For questions or feedback, feel free to reach out:
- GitHub: [aabr2612](https://github.com/aabr2612)
- Email: aabr2612@gmail.com
