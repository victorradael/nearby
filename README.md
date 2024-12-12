# **Nearby** 📍  

**Nearby** is a mobile application built with **React Native** and **Expo** that allows users to explore nearby locations, utilize geolocation features, and scan QR codes to redeem discount coupons. This project was developed during the **Next Level Week (NLW)** hosted by Rocketseat.

---

## **📱 Features**  

- **Real-Time Geolocation**:  
  Displays the user’s current location on a map using geolocation APIs.  
- **Nearby Locations Search**:  
  Consumes an API to list nearby places, allowing users to explore points of interest.  
- **QR Code Scanning**:  
  Use the device camera to scan QR codes for discount coupons.  
- **Available Coupons List**:  
  Displays available coupons and details about the locations where they can be used.  
- **Modern and Intuitive Interface**:  
  Responsive and accessible design following UI/UX best practices.  

---

## **🚀 Technologies Used**  

### **Frontend**  
- **[React Native](https://reactnative.dev/)**: Framework for mobile app development.  
- **[Expo](https://expo.dev/)**: A platform that simplifies development with React Native.  
- **[expo-maps](https://docs.expo.dev/versions/latest/sdk/map-view/)**: Library to render maps.  
- **[expo-camera](https://docs.expo.dev/versions/latest/sdk/camera/)**: Library to access the camera and scan QR codes.  

### **APIs and Services**  
- **Geolocation API**: Provides the user’s current location.  
- **Nearby Locations API**: Lists locations based on the user’s position.  
- **Coupons API**: Manages discount coupons and additional details.  

---

## **📂 Project Structure**  

```
/src
├── app            # Main application modules and configurations
├── assets         # Images, fonts, and other static files specific to the project
├── components     # Reusable components like buttons, cards, etc.
├── services       # API integration and external service logic
├── styles         # Global and reusable styles (e.g., themes, layouts)
└── utils          # Utility functions and helpers
```

---

## **🛠️ How to Run the Project**  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/your-username/nearby.git
   cd nearby
   ```

2. **Install Dependencies**:  
   Ensure you have Node.js installed. Then, run:  
   ```bash
   npm install
   ```

3. **Start the Expo Server**:  
   ```bash
   expo start
   ```

4. **Run on Emulator or Physical Device**:  
   - Use the **Expo Go** app to run on your phone.  
   - Or run it on an Android/iOS emulator configured in your environment.

---

## **📸 App Preview**  

![Images from app]("assets/images/image.png")

---

## **📋 Next Steps**  

- Enhance authentication with social login (Google/Facebook).  
- Add push notifications to alert users about new coupons and nearby locations.  
- Implement a location rating system.  

---

## **🤝 Contribution**  

Contributions are welcome!  
1. Fork this repository.  
2. Create a new branch for your feature (`git checkout -b my-feature`).  
3. Commit your changes (`git commit -m 'Add new feature'`).  
4. Push to the main branch (`git push origin my-feature`).  
5. Open a Pull Request.  

---

## **📄 License**  

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

---

**Developed with 💜 during the NLW by Rocketseat 🚀**  

