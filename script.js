function onFormSubmit(){
var Data= readData();
newRecord(Data);
}

function readData(){
  var Data ={};
  Data["serial-no"]=document.getElementById("serial-no").value;
  Data["product-id"]=document.getElementById("product-id").value;
  Data["product"]= document.getElementById("product").value
  Data["payment-type"]= document.getElementById("payment-type").value
  Data["amount"]=document.getElementById("amount").value
  return Data;
}
function newRecord(data){
  var table = document.getElementById("product-head").getElementsByTagName('tbody')[0];
  var row = table.insertRow(table.length);
  firstCell = row.insertCell(0);
  firstCell.innerHTML = data.product-id;
  secondCell = row.insertCell(1);
  secondCell.innerHTML = data.product;
  thirdCell = row.insertCell(2);
  thirdCell.innerHTML = data.payment-type;
  fourthCell = row.insertCell(3);
  fourthCell.innerHTML = data.amount;
  fifthCell = row.insertCell(4);
  fifthCell.innerHTML = `<a>Edit</a>
                        <a>Delete</a>`;
}