var loginValue = localStorage.getItem("loginStatus");

if (loginValue == "logout") {
  location.assign("./index.html");
} else {
}

var url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products";

var productArray = [];
var arr2 = [];
let filterValue = [];
var tableRows = document.getElementById("product-table");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.map((items, i) => {
      productArray.push(items);

      tableRows.innerHTML += ` <tr class="data-row" id="${i}"   >
          
          <td>${items.id}</td>
              <td>	${items.medicineName}</td>
              <td>${items.medicineBrand}</td>
                  <td>${items.expiryDate}</td>
            
              <td>$${items.unitPrice}</td>
              <td>	${items.stock}</td>
          </tr> `;
    });
  })
  .catch((e) => console.log("Booo"));

function func(e) {
  tableRows.innerHTML = `<tr>
    <th>       ID</th>
    <th>	Product Name    </th>
    <th>    Product Brand    </th>
    <th>	Expiry Date</th>
    <th>	Unit Price</th>
    <th>	Stock</th>
</tr>`;

  var todaysDate = new Date();

  var classes = document.getElementsByClassName("input-cl");

  for (var i = 0; i < classes.length; i++) {

    if (classes[0].checked == true && classes[1].checked == true) {
      if (classes[i].value)
        productArray.map((val) => {
          tableRows.innerHTML += ` <tr class="data-row " id="${i}"   >
            
            <td>${val.id}</td>
                <td>	${val.medicineName}</td>
                <td>${val.medicineBrand}</td>
                    <td>${val.expiryDate}</td>
              
                <td>$${val.unitPrice}</td>
                <td>	${val.stock}</td>
            </tr> `;
        });
    }

    else if (classes[0].checked == false) {
      tableRows.innerHTML = `<tr>
        <th>       ID</th>
        <th>	Product Name    </th>
        <th>    Product Brand    </th>
        <th>	Expiry Date</th>
        <th>	Unit Price</th>
        <th>	Stock</th>
    </tr>`;
      var count = 0;

      productArray.map((it, i) => {
        var productexpiry = new Date(it.expiryDate);

        if (productexpiry >= todaysDate) {
          count++;
          console.log(it);

          tableRows.innerHTML += ` <tr class="data-row " id="${i}"   >
                            
                            <td>${it.id}</td>
                                <td>	${it.medicineName}</td>
                                <td>${it.medicineBrand}</td>
                                    <td>${it.expiryDate}</td>
                              
                                <td>$${it.unitPrice}</td>
                                <td>	${it.stock}</td>
                            </tr> `;
        }
      });
      console.log(count);
    }


    else if (classes[1].checked == false) {
      tableRows.innerHTML = `<tr>
        <th>       ID</th>
        <th>	Product Name    </th>
        <th>    Product Brand    </th>
        <th>	Expiry Date</th>
        <th>	Unit Price</th>
        <th>	Stock</th>
    </tr>`;
      var count = 0;

      productArray.map((ite, i) => {


        if (
          ite.stock > 100 &&
          ite.id !== "68180-303" &&
          ite.id !== "63730-222" &&
          ite.id !== "49571-002" &&
          ite.id !== "63776-075" &&
          ite.id !== "61016-0002" &&
          ite.id !== "0024-0335"
        ) {
          count++;
          console.log(ite);

          tableRows.innerHTML += ` <tr class="data-row ${
            i == 0 ? "active" : ""
          }" id="${i}"   >

                          <td>${ite.id}</td>
                              <td>	${ite.medicineName}</td>
                              <td>${ite.medicineBrand}</td>
                                  <td>${ite.expiryDate}</td>

                              <td>$${ite.unitPrice}</td>
                              <td>	${ite.stock}</td>
                          </tr> `;
        }


        else if (classes[1].checked == false && classes[0].checked == false) {
          productArray.map((vi, i) => {
            if (productexpiry >= todaysDate && vi.stock > 100) {
              count++;
              console.log(vi);

              tableRows.innerHTML += ` <tr class="data-row ${
                i == 0 ? "active" : ""
              }" id="${i}"   >
                                    
                                    <td>${vi.id}</td>
                                        <td>	${vi.medicineName}</td>
                                        <td>${vi.medicineBrand}</td>
                                            <td>${vi.expiryDate}</td>
                                      
                                        <td>$${vi.unitPrice}</td>
                                        <td>	${vi.stock}</td>
                                    </tr> `;
            }
          });
        }
      });
      console.log(count);
    }
  }
}

function logout() {
  localStorage.setItem("loginStatus", "logout");
  location.assign("./index.html");
}
