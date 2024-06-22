# Smart Home Automation System

## Overview
This project is a Smart Home Automation System that allows users to control and monitor various smart devices in their home through a web application. It integrates both hardware and software to provide real-time control and automation of devices.

## Features
- User Authentication (registration and login)
- Device Management (add, edit, remove devices)
- Real-Time Monitoring (view device status)
- Device Control (turn devices on/off, adjust settings)
- Automation Rules (create rules for automatic control)
- Notifications (receive alerts for specific events)
- Responsive Design (mobile and desktop friendly)

## Technologies
- Frontend: React.js, Redux, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Real-Time Communication: WebSockets
- Authentication: JWT (JSON Web Tokens)
- Hardware: Raspberry Pi, Arduino
- Deployment: Docker, Heroku or Vercel

## Installation

### Backend
1. Clone the repository: `git clone https://github.com/StaticTesseract07/Smart-Home-Automation-System.git`
2. Navigate to the backend directory: `cd smart-home-automation/backend`
3. Install dependencies: `npm install`
4. Set up environment variables (e.g., MongoDB URI, JWT secret)
5. Start the server: `npm start`

### Frontend
1. Navigate to the frontend directory: `cd smart-home-automation/frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

### Hardware
1. Set up Raspberry Pi and Arduino with the required sensors and actuators.
2. Write scripts to send and receive data between hardware and backend server.

## Usage
1. Register and log in to the web application.
2. Add your smart devices through the device management interface.
3. Monitor and control your devices in real-time.
4. Create automation rules to control devices automatically based on conditions.
5. Receive notifications for specific events.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

## License
This project is licensed under the MIT License.
