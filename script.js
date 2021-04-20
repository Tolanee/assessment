function onFormSubmit(event){
event.preventDefault()

var Data= readData();
newRecord(Data);
// console.log(Data,);

}

function readData(){
  var Data ={};
  Data["serialNo"] = document.getElementById("serialNo").value;
  Data["productId"] = document.getElementById("productId").value;
  Data["product"] = document.getElementById("product").value;
  Data["paymentType"] = document.getElementById("paymentType").value;
  Data["amount"] = document.getElementById("amount").value;
  // console.log(Data);
  return Data;
}

function newRecord(data){
  var table = document.getElementById("productHead").getElementsByTagName('tbody')[0];
  var row = table.insertRow(table.length);
  Cell1 = row.insertCell(0);
  Cell1.innerHTML = data.serialNo;

  Cell2 = row.insertCell(1);
  Cell2.innerHTML = data.productId;

  Cell3 = row.insertCell(2);
  Cell3.innerHTML = data.product;

 Cell4 = row.insertCell(3);
  Cell4.innerHTML = data.paymentType;

  Cell5 = row.insertCell(4);
  Cell5.innerHTML = data.amount;

  Cell6 = row.insertCell(5);
 Cell6.innerHTML = `<a href="#" onclick= "onEdit(this)">Edit</a>
                    <a  href="#">Delete</a>`;
}
function reset(){
  document.getElementById("serialNo").value ="";
  document.getElementById("productId").value ="";
  document.getElementById("product").value ="";
  document.getElementById("paymentType").value ="";
  document.getElementById("amount").value ="";
}

function onEdit(td){
  selectedRow= td.parentElement.parentElement;
  document.getElementById("serialNo").value = selectedRow.cells[0].innerHTML;
  document.getElementById("productId").value =selectedRow.cells[1].innerHTML;
  document.getElementById("product").value =selectedRow.cells[2].innerHTML;
  document.getElementById("paymentType").value =selectedRow.cells[3].innerHTML;
  document.getElementById("amount").value =selectedRow.cells[4].innerHTML;
}
