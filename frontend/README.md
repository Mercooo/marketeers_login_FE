### Marketeers Trial Frontend

A React-based frontend application featuring user authentication and a data visualization dashboard. This application allows users to log in, view tabular data, and calculate percentages based on input values.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)


## Features

- **User Authentication**: Secure login system with token-based authentication
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Data Table**: View and interact with tabular data
- **Real-time Calculations**: Calculate percentages based on user input
- **Search & Filter**: Search functionality to filter table data
- **Data Visualization**: Visual representation of percentage calculations
- **Session Management**: Persistent login sessions using localStorage


## Technologies Used

- **React**: Frontend library for building user interfaces
- **Axios**: HTTP client for API requests
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Create React App**: React application bootstrapping
- **localStorage API**: For client-side storage of authentication tokens


## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

```shellscript
git clone https://github.com/your-username/marketeers_trial_frontend.git
cd marketeers_trial_frontend/frontend
```


2. Install dependencies:

```shellscript
npm install
```


3. Install additional required packages:

```shellscript
npm install tailwindcss postcss autoprefixer axios web-vitals
```


4. Initialize Tailwind CSS:

```shellscript
npx tailwindcss init -p
```


5. Create or update the Tailwind configuration file (`tailwind.config.js`):

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6", // blue-500
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [],
}
```


6. Start the development server:

```shellscript
npm start
```




## Usage

### Authentication

1. Open the application in your browser (default: [http://localhost:3000](http://localhost:3000))
2. You'll be presented with a login screen
3. Enter your credentials (username and password)
4. Upon successful authentication, you'll be redirected to the dashboard


### Dashboard

1. The dashboard displays a table of items with their values
2. Enter your own values in the input fields
3. The application will automatically calculate the percentage of your input relative to the existing value
4. Use the search functionality to filter items
5. Log out using the button in the top-right corner


## Project Structure

```plaintext
frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js           # Main application component
│   ├── App.css          # Application styles
│   ├── index.js         # Entry point
│   ├── index.css        # Global styles with Tailwind directives
│   ├── Login.jsx        # Login component
│   ├── TablePage.jsx    # Dashboard table component
│   └── reportWebVitals.js
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## API Endpoints

The frontend interacts with the following API endpoints:

### Authentication

- **POST** `/login`

- Request body: `{ username, password, rememberMe }`
- Response: `{ token }`





### Data

- **GET** `/items`

- Headers: `{ Authorization: "Bearer {token}" }`
- Response: Array of items with `id` and `value` properties





## Screenshots

### Login Page

The login page features a clean, modern design with username and password fields, a "Remember me" option, and links for password recovery and sign-up.

### Dashboard

The dashboard displays a responsive table with item values and input fields for user entries. It calculates percentages in real-time and provides visual feedback through color-coded indicators.

## Backend Setup

This frontend application requires a backend server running at `http://localhost:5000` with the following endpoints:

1. `/login` - POST endpoint for authentication
2. `/items` - GET endpoint for retrieving item data


Ensure your backend is properly configured to handle these requests and provide the expected responses.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Troubleshooting

### Common Issues

1. **Module not found errors**:

1. Ensure all file names match exactly (including capitalization)
2. Check that all required dependencies are installed



2. **Styling issues**:

1. Make sure Tailwind CSS is properly configured
2. Check that the Tailwind directives are included in your CSS



3. **API connection errors**:

1. Verify that your backend server is running at the expected URL
2. Check that you're sending the correct authentication headers





For additional help, please open an issue in the repository.