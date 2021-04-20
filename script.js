function onFormSubmit(){
var Data= readData();
}
function readData(){
  var Data ={}
  Data["serial-no"]=document.getElementById("serial-no").value;
  Data["product-id"]=document.getElementById("product-id").value;
  Data["product"]= document.getElementById("product").value
  Data["payment-type"]= document.getElementById("payment-type").value
  Data["amount"]=document.getElementById("amount").value
  return Data
}
function newRecord(data){
  var table = document.getElementById("serial-no").getElementsByTagName('tbody')[0];
  var row = table.insertRow(table.length);
}