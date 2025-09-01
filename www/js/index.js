import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD9gbluIEK_qq3MTGAj6SKl4xr9_9XvAfI",
  authDomain: "report-3cece.firebaseapp.com",
  projectId: "report-3cece",
  storageBucket: "report-3cece.firebasestorage.app",
  messagingSenderId: "520890833630",
  appId: "1:520890833630:web:23db6e2723d948690cc04f",
  measurementId: "G-BQ5N10QEEH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

cordova.plugins.permissions.requestPermission(
  cordova.plugins.permissions.CAMERA,
  () => console.log("Camera permission granted"),
  () => alert("Camera permission denied")
);
document.addEventListener(
  "deviceready",
  function () {
    console.log("Device is ready, plugins loaded!");
  },
  false
);
document.addEventListener("deviceready", () => {
  const permissions = cordova.plugins.permissions;
  permissions.requestPermission(
    permissions.ACCESS_FINE_LOCATION,
    (status) => {
      if (status.hasPermission) {
        console.log("Location permission granted");
        getLocation();
      }
    },
    (err) => console.error("Permission denied", err)
  );
});
  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  }

  // 🔹 Logout button logic
  if (localStorage.getItem("token")) {
    document.getElementById("logoutBtn").style.display = "inline";
  } else {
    document.getElementById("logoutBtn").style.display = "inline";
  }
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("token");
    alert("Logged out!");
    window.location.href = "index.html";
  });