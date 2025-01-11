# CryptoTracker Assignment

## 📖 Overview
CryptoTracker is a backend-only web application that allows users to track the latest cryptocurrency prices and trends in real time. This project demonstrates key backend skills, including the use of modern JavaScript frameworks, APIs, and database management techniques.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API:** Fetching data from a cryptocurrency API (e.g., CoinGecko, CoinMarketCap).
- **Version Control:** Git and GitHub

---

## 🚀 Getting Started
Follow these instructions to set up and run the project locally.

### Prerequisites
Make sure you have the following installed:
- Node.js (v16 or above)
- npm or yarn

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Athul-coder-021/CryptoTracker-Assignment.git
    ```

2. Navigate to the project directory:
    ```bash
    cd CryptoTracker-Assignment
    ```

3. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application
1. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your browser and go to:
    ```
    http://localhost:8000
    ```

### Building for Production
To create a production build:
```bash
npm run build
# or
yarn build
```

---

## 🧩 Project Structure
```
CryptoTracker-Assignment/
├── src/
│   ├── controllers/      # Controllers calling API
│   ├── db/              # Database configuration
│   ├── models/          # Database collections
│   ├── routes/          # API service logic
│   ├── app.js           # Main application file
│   ├── constants.js     # Constants stored here
│   ├── index.js         # Entry point
├── .env                 # Environment files
├── .gitignore           # Ignored files
├── .prettierrc          # Prettier configuration
├── package.json         # Project metadata and dependencies
└── README.md            # Documentation
```

---

## ✨ Features
1. **Database Integration**
   - MongoDB integration for efficient storage and management of cryptocurrency data.
   - Designed models to handle dynamic cryptocurrency data structures.

2. **Real-time Data Fetching**
   - Utilized external APIs like CoinGecko or CoinMarketCap to fetch up-to-date cryptocurrency prices and trends.
   - Implemented API rate limit handling to ensure seamless data updates.

3. **RESTful API Endpoints**
   - Developed modular routes for different functionalities, including fetching cryptocurrency data and managing database interactions.
   - Ensured scalability by organizing routes and controllers effectively.

---

## 🛠️ Tasks Completed
1. **Database Integration:** Successfully set up MongoDB for storing and managing cryptocurrency data.
2. **API Integration:** Integrated with external cryptocurrency APIs to fetch real-time data.
3. **Routing and Controllers:** Designed and implemented RESTful API routes and controllers for handling client requests.

---

## 🐛 Known Issues
- Make sure to handle API rate limits when fetching real-time data.

---

## 📂 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

---

## 📬 Contact
For questions or suggestions, feel free to contact me:
- **Name:** Athul Krishna K R
- **GitHub:** [Athul-coder-021](https://github.com/Athul-coder-021)

---

Happy Coding! 🚀
