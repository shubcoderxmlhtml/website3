
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyClM_wfLJ8uqsHyV6a1okd4F8RkX8HL7mY",
      authDomain: "lesapp-8a115.firebaseapp.com",
      databaseURL: "https://lesapp-8a115-default-rtdb.firebaseio.com",
      projectId: "lesapp-8a115",
      storageBucket: "lesapp-8a115.appspot.com",
      messagingSenderId: "272394283098",
      appId: "1:272394283098:web:0f449ee36f964ffd189063"
    };
    firebase.initializeApp(firebaseConfig);
    // Initialize Firebase
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "LETCHAT_page.html";
    }
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_Name -"+ Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout()
{
    user_name = document.getElementById("user_name").value;

    localStorage.removeItem("user_name", user_name);

    window.location = "index.html";
}