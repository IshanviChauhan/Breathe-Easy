# Breathe Easy - A Web App for Air Quality Improvement

**Images**:
![image](https://github.com/mayanksri02/Breathe-Easy/assets/111958930/e8dc0810-796a-44b1-a72a-63a613c6a14d)
![image](https://github.com/mayanksri02/Breathe-Easy/assets/111958930/e4e4fba5-72da-4825-bfde-e601c7d37d50)
![image](https://github.com/mayanksri02/Breathe-Easy/assets/111958930/4b430610-73c5-495b-bf74-2013571c7e2e)
![image](https://github.com/mayanksri02/Breathe-Easy/assets/111958930/d5003445-e874-4b0b-9902-f5d555a02fb6)
![image](https://github.com/mayanksri02/Breathe-Easy/assets/111958930/87dc5b1d-a30b-4de0-a1be-840ddd04535d)
![image](https://github.com/mayanksri02/Breathe-Easy/assets/111958930/276e5989-bd06-4b6b-84fd-680be4301e9b)
![image](https://github.com/mayanksri02/Breathe-Easy/assets/111958930/583d5e76-75ce-4031-8ee4-900cace8a143)

## Table of Contents

- [Introduction](#introduction)
- [Problem Statement](#problem-statement)
- [Why?](#why)
- [Our Solution](#our-solution)
- [Technology Stack](#technology-stack)
- [Frontend](#frontend)
- [Development Tools](#development-tools)
- [Deployment](#deployment)
- [Backend](#backend)
- [Use Cases](#use-cases)

## Introduction

Hello everyone! We are Bit Buddies, a team of second-year BTech students from ABES Engineering College, Ghaziabad, led by Ishanvi Chauhan. Our team includes Jagrati Sharma, Kshitiz Srivastav, Mayank Srivastava, and Md Zakir Uddin. We are passionate about leveraging technology to tackle environmental challenges.

## Problem Statement

Air pollution is a significant environmental issue affecting human health and the planet. High levels of pollutants in the air can lead to respiratory problems, cardiovascular diseases, and other health issues. Trees play a crucial role in filtering pollutants and improving air quality.

## Why?

Improving air quality is essential for enhancing public health and creating a sustainable environment. By planting the right types of trees, we can significantly reduce pollutants and improve the overall air quality in urban areas.

## Our Solution

We aim to create a web application that:

- **Tracks Real-Time AQI**: Using APIs to access current AQI data based on user location.
- **Recommends Tree Species**: Suggests fast-growing, air-purifying tree species tailored to improve local air quality.
- **User-Friendly Interface**: Features location input, AQI display, target AQI setting, and tree recommendations.

## Technology Stack

### Frontend

- **React.js**: User Interface
- **JavaScript/TypeScript**: Programming Language
- **HTML/CSS**: Structure and Styling of the application
- **React Router**: Client Side Routing
- **Axios/Fetch API**: Making API calls
- **Redux/Context API**: State management

### Development Tools

- **Webpack or Create React App**: For bundling the application
- **Babel**: For transpiling JavaScript
- **ESLint/Prettier**: For code linting and formatting
- **Jest/React Testing Library**: For unit and integration testing
- **Docker**: For containerization

### Deployment

- **Git**: For version control
- **GitHub**: For code repository and collaboration
- **Netlify**: For frontend deployment

### Backend

- **Python or Node.js**: For handling requests, API calls, and database integration

## Use Cases

Our web app can benefit:

- **Urban Planners**: Inform decisions on green space allocation.
- **Environmental NGOs**: Support tree planting initiatives.
- **Government Agencies**: Aid in policy formulation and resource allocation.
- **Public Health Organizations**: Reduce health impacts of air pollution.
- **Smart City Solutions**: Integrate with platforms for continuous AQI monitoring.

## Getting Started

To get started with the development of the Breathe Easy web application, follow these steps:

### Prerequisites

- Node.js
- npm or yarn
- Docker (optional for containerization)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/breathe-easy.git
   cd breathe-easy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Running Tests

Run the test suite using Jest and React Testing Library:
```bash
npm test
```

### Deployment

Deploy the application to Netlify:

1. Create a new site on Netlify.
2. Connect your GitHub repository.
3. Configure the build settings:
   - Build Command: `npm run build`
   - Publish Directory: `build`

4. Deploy the site.

## Contribution

We welcome contributions to improve the Breathe Easy web application. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

Thank you for using Breathe Easy! Let's work together to improve our environment and public health.

# React + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
