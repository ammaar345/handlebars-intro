// const { text } = require("body-parser");

// const { text } = require("body-parser");

// get a reference to the textbox where the bill type is to be entered
let textBill = TextBill();
const enterTxt = document.querySelector(".billTypeText");
//get a reference to the add button
const addBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
const callTotalElement = document.querySelector(".callTotalOne");
const smsTotalElement = document.querySelector(".smsTotalOne");
const total = document.querySelector(".totalOne");
const color = document.querySelector(".red");


// var templateSource2 = document.querySelector(".costTemplate").innerHTML;


// //compile template 
// var userTemplate2 = Handlebars.compile(templateSource2);

function calculateBtnClicked() {
  var billSt = enterTxt.value;
  textBill.totPhoneBill(billSt)
  // callTotalElement.innerHTML=textBill.getTotalCallPrice();;
  //  smsTotalElement.innerHTML=textBill.getTotalSmsPrice();
  //  total.innerHTML = textBill.getTotalPrice();
  var result2 = { smsTotalAmount: textBill.getTotalSmsPrice(), callTotalAmount: textBill.getTotalCallPrice(), totalAmount: textBill.getTotalPrice() }
  pricesAll2.innerHTML = userTemplate(result2)
   styledApplic();
color.classList.add(text.styledTotal())
}
function styledApplic() {
  color.classList.remove("danger");
  color.classList.remove("warning");
  color.classList.add(textBill.styledTotal())
  
 
}

addBtn.addEventListener("click", calculateBtnClicked);
