var firebaseConfig = {
    apiKey: "AIzaSyAVU1XVA03CtbeGyBc47F-7JXuw7mg1n10",
    authDomain: "snapgram-3st24.firebaseapp.com",
    databaseURL: "https://snapgram-3st24-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "snapgram-3st24",
    storageBucket: "snapgram-3st24.appspot.com",
    messagingSenderId: "85448427053",
    appId: "1:85448427053:web:1d6bfee83df60bd5a9daa4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom() 
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update
    ({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}