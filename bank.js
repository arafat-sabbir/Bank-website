document.getElementById('deposit-btn').addEventListener('click', function () {
  let deposit = document.getElementById('deposit-amount');
  let newdepositAmount = document.getElementById('deposit-amount').value
  let totalDepositamount = document.getElementById('total-deposit')
  deposit.value = '';
  if (isNaN(newdepositAmount)) {
    alert('please provide a number')
    return
  }
  totalDepositamount.innerText = parseFloat(totalDepositamount.innerText) + parseFloat(newdepositAmount)
  let total = document.getElementById('total-amount')
  total.innerText = parseFloat(total.innerText) + parseFloat(newdepositAmount)
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
  let withdraw = document.getElementById('withdraw-amount')
  let withdrawamount = document.getElementById('withdraw-amount').value
  let totalwithdraw = document.getElementById('total-withdraw')
  withdraw.value = '';
  if (isNaN(withdrawamount)) {
    alert('please provide a number')
    return
  }
  let total = document.getElementById('total-amount')
  if (withdrawamount > total.innerText) {
    alert("you can't witdraw more money then your total balance")
  } else {
    total.innerText = parseFloat(total.innerText) - parseFloat(withdrawamount)
    totalwithdraw.innerText = parseFloat(totalwithdraw.innerText) + parseFloat(withdrawamount)
  }


})
