var loginValue = localStorage.getItem("loginStatus");

if (loginValue == "logout") {
  location.assign("./index.html");
} else {
}

var link = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users";
var link2 =
  "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=John";

var searchBar = document.getElementById("data-table");
var searchedDataArray = [];
var usersList = [];
var newUsers = [];

onload();
function onload() {
  searchBar.innerHTML = ``;

  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      data.map((users, i) => {
        usersList.push(users);

        searchBar.innerHTML += ` <tr>
        <td>       ${users.id}</td>
        <td>	<img src =${users.profilePic} alt="">    </td>
        <td>   ${users.fullName}   </td>
        <td>	${users.dob}</td>
        <td>	${users.gender}</td>
        <td>${users.currentCity},${users.currentCountry}</td>
    </tr>`;
      });
    })
    .catch((e) => console.log("Booo"));
}

var el = document.getElementById("search-box");
el.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    var a = el.value;
    if (a.length < 2) {
      alert("Please enter at least 2 characters");
    } else {
      searchBar.innerHTML = ``;
      usersList.map((list, i) => {
        if (list.fullName.toLowerCase().includes(a)) {
          console.log(list.fullName);

          searchBar.innerHTML += ` <tr>
             <td>       ${list.id}</td>
             <td>	<img src =${list.profilePic} alt="">    </td>
             <td>   ${list.fullName}   </td>
             <td>	${list.dob}</td>
             <td>	${list.gender}</td>
             <td>${list.currentCity},${list.currentCountry}</td>
         </tr>`;
        }
      });
    }
  }
});

var btn = document.getElementById("reset");
btn.addEventListener("click", function (event) {
  var a = document.getElementById("search-box");
  a.value = "";
  onload();
});

function logout() {
  localStorage.setItem("loginStatus", "logout");
  location.assign("./index.html");
}
