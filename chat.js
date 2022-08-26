
const firebaseConfig = {
    apiKey: "AIzaSyD8VeMDqHV7EIN-QuzkSZn2xve2rQij-ck",
    authDomain: "babu-5982b.firebaseapp.com",
    projectId: "babu-5982b",
    storageBucket: "babu-5982b.appspot.com",
    messagingSenderId: "463500335141",
    appId: "1:463500335141:web:20c7f1e8550fcac04d47cc",
    measurementId: "G-2ZP7T4DK7Z"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



