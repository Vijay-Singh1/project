var loginValue = localStorage.getItem("loginStatus");

if (loginValue == "logout") {
  location.assign("./index.html");
} else {
}

var url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders";

var arr1 = [];
var arr2 = [];
let filterValue = [];
var tableRows = document.getElementById("data-table");
var filterTable = document.getElementById("filter-table");
console.log(filterTable);

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.map((items, i) => {
      arr1.push(items);

      tableRows.innerHTML += ` <tr class="data-row " id="${i}"   >
          
          <td>${items.id}</td>
              <td>	${items.customerName}</td>
              <td>${items.orderDate}<br>
                  ${items.orderTime}</td>
              <td>${items.amount}</td>
              <td>	${items.orderStatus}</td>
          </tr> `;
    });
  })
  .catch((e) => console.log("Booo"));

function func(e) {
  tableRows.innerHTML = `<tr>
    <th>       ID</th>
    <th>	Customer    </th>
    <th>    Date    </th>
    <th>	Amount</th>
    <th>	Status</th>
</tr>`;

  var classes = document.getElementsByClassName("input-cl");

  for (var i = 0; i < classes.length; i++) {
    if (classes[i].checked == true) {
      arr1.filter((item) => {
        if (item.orderStatus.includes(classes[i].value)) {
          tableRows.innerHTML += ` <tr class="data-row" id="${i}"   >
              
              <td>${item.id}</td>
                  <td>	${item.customerName}</td>
                  <td>${item.orderDate}<br>
                      ${item.orderTime}</td>
                  <td>${item.amount}</td>
                  <td>	${item.orderStatus}</td>
              </tr> `;
        }
      });
    }
  }
}

function logout() {
  localStorage.setItem("loginStatus", "logout");
  location.assign("./index.html");
}
