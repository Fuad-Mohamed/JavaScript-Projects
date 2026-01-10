const bill = document.getElementById("bill");
const discount = document.getElementById("discount");
const tips = document.getElementById("tips");
const customers = document.getElementById("customers");
const btn = document.getElementById("btn");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const para3 = document.getElementById("para3");

btn.addEventListener("click", calculateTips);
function calculateTips() {
  const totalTipPaid = Number(bill.value) / Number(tips.value);
  para1.textContent = totalTipPaid;
  const totalAmount =
    totalTipPaid + Number(bill.value) - Number(discount.value);
  para2.textContent = totalAmount;
  const eachCustomer = totalAmount / Number(customers.value);
  para3.textContent = eachCustomer;
}
