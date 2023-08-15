document.getElementById('deposit-btn').addEventListener('click',function(){
    let deposit = document.getElementById('deposit-amount');
    let newdepositAmount = document.getElementById('deposit-amount').value
    let previousDepositamount = document.getElementById('total-deposit')
    previousDepositamount.innerText = parseFloat(previousDepositamount.innerText) + parseFloat(newdepositAmount)
    deposit.value = '';
    let total = document.getElementById('total-amount')
    total.innerText= parseFloat(total.innerText) + parseFloat(newdepositAmount)
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
  let withdraw= document.getElementById('withdraw-amount')
  let withdrawamount = document.getElementById('withdraw-amount').value
  let totalwithdraw = document.getElementById('total-withdraw')
  totalwithdraw.innerText = parseFloat(totalwithdraw.innerText) + parseFloat(withdrawamount)
  withdraw.value = '';
  let total = document.getElementById('total-amount')
  total.innerText= parseFloat(total.innerText) - parseFloat(withdrawamount)

})
