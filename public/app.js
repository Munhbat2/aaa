let loc = window.location.href;
let url = new URL(loc);
let roomid = url.searchParams.get("roomid");

let firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

let roomData;

let red = document.getElementsByClassName("red")[0];
let blue = document.getElementsByClassName("blue")[0];
let field = document.getElementById("reset");
db.collection("rooms")
  .doc(roomid)
  .onSnapshot((doc) => {
    roomData = doc.data();
    blue.style.width = doc.data().blue + "vw";
    red.style.width = doc.data().red + "vw";
  });

const reset = () => {
  field.reset();
};

const redToggle = () => {
  let pw = roomData.red;
  pw++;
  db.collection("rooms")
    .doc(roomid)
    .update({
      red: pw,
      blue: 100 - pw,
    });
  let div = document.getElementsByClassName("redscore")[0];
  let too = parseInt(div.innerHTML);
  div.innerHTML = too = too + 1;
};

const blueToggle = () => {
  let bWidth = roomData.blue;
  bWidth++;
  db.collection("rooms")
    .doc(roomid)
    .update({
      red: 100 - bWidth,
      blue: bWidth,
    });
  let div = document.getElementsByClassName("bluescore")[0];
  let too = parseInt(div.innerHTML);
  div.innerHTML = too = too + 1;
};
