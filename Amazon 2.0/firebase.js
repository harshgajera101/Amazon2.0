  var firebaseConfig = {
    apiKey: "AIzaSyDiX3N0DBF6gdz9-10xdl6i74g0uphmhT4",
    authDomain: "clone-8d65b.firebaseapp.com",
    projectId: "clone-8d65b",
    storageBucket: "clone-8d65b.appspot.com",
    messagingSenderId: "862404787454",
    appId: "1:862404787454:web:74c71b2e87c0c79d24f9af",
    measurementId: "G-BC5RTKQK2N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();