// get a reference to the textbox where the bill type is to be entered
let textBill=TextBill();
const enterTxt=document.querySelector(".billTypeText");
//get a reference to the add button
const addBtn=document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
const callTotalElement=document.querySelector(".callTotalOne");
const smsTotalElement=document.querySelector(".smsTotalOne");
const total=document.querySelector(".totalOne");
const color=document.querySelector(".red");

function calculateBtnClicked(){
  var billSt=enterTxt.value;
  textBill.totPhoneBill(billSt)
  callTotalElement.innerHTML=textBill.getTotalCallPrice();;
   smsTotalElement.innerHTML=textBill.getTotalSmsPrice();
   total.innerHTML = textBill.getTotalPrice();;
   styledApplic()

}
function styledApplic(){
  
  color.classList.remove("danger");
  color.classList.remove("warning");
color.classList.add(textBill.styledTotal())
}

    // addBtn.addEventListener("click",calculateBtnClicked);
