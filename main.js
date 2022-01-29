//do do list
// get total
// creat product
// save localStorage
// clear inputs
// read
// count
// delete
// update
// search
// clean date

let title = document.getElementById(`title`);
let price = document.getElementById(`price`);
let taxes = document.getElementById(`taxes`);
let ads = document.getElementById(`ads`);
let discount = document.getElementById(`discount`);
let total = document.getElementById(`total`);
let count = document.getElementById(`count`);
let category = document.getElementById(`category`);
let submit = document.getElementById(`submit`);

let mode = 'creat';
let tmp;

console.log(taxes, title, price, ads, discount, total, count, category, submit);
// get total

function getTotal() {
  if (price.value != ``) {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    console.log(`done`);
    total.innerHTML = result;
    total.style.background = `#040`;
  } else {
    total.innerHTML = ` `;
    total.style.background = `#a00d02`;
  }
}
// creat product
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

submit.onclick = function () {
  let newPro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
    // count
  };
  if (mode === 'creat'){
  if (newPro.count > 1) {
    for (let i = 0; newPro.count; i++) dataPro.push(newPro);
  } else {
    dataPro.push(newPro);
  }
  }else{
      dataPro [tmp] = newPro;
      mode = 'creat';
      submit.innerHTML = 'creat';
      count.style.display = 'block';
  }
}

  // save localStorage
  localStorage.setItem(`product`, JSON.stringify(dataPro));
  console.log(dataPro);
  clearData();
  showData();


// clean date
function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}
// read
function showData() {
    getTotal()
  let table = " ";
  for (let i = 0; i < dataPro.length; i++) {
    table += `

<tr>
              <td>${i}</td>
              <td>${dataPro[i].title}</td>
              <td>${dataPro[i].price}</td>
              <td>${dataPro[i].taxes}</td>
              <td>${dataPro[i].ads}</td>
              <td>${dataPro[i].discount}</td>
               <td>${dataPro[i].total}</td> 
              <td>${dataPro[i].category}</td>
              <td><button onclick= "updateData(${i})     id="update">Update</button></td>
              <td><button onclick= "deleteData(${i}) "   id="delete">Delete</button></td>
            </tr>

`;
  }
  document.getElementById(`tbody`).innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (dataPro.length > 0) {
    btnDelete.innerHTML =
      '<button onclick ="deleteAll(${dataPro.length})"> Delete All</button>';
  } else {
    btnDelete.innerHTML = " ";
  }
}

showData();

// delete

function deleteData(i) {
  dataPro.splice(i, 1);
  localStorage.product = JSON.stringify(dataPro);
  showData();
}

//deleteAll
function deleteAll() {
  localStorage.clear();
  dataPro.splice(0);
  showData();
}
// update
function updateData (i){
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    getTotal();
    count.style.display= 'non';
    category.value = dataPro[i].category;
    submit.innerHTML= 'Update';
    mode = 'update';
    tmp= i;
    scroll({
        behavior: 'smooth',
    })
  
}