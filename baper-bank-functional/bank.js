document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositvalue = inputvalues('deposit-amount');
    const previousdeposit = totalamount('total-deposit')
    const newdeposit = previousdeposit + depositvalue;
    if (isNaN(depositvalue)) {
        alert('give input only number')
        return;
    } else {
        setinnertext('total-deposit', newdeposit)
        const balancetotal = totalamount('total-amount')
        const newbalancetotal = balancetotal + newdeposit
        setinnertext('total-amount', newbalancetotal)
    }

})


document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawvalue = inputvalues('withdraw-amount')
    const previouswithdraw = totalamount('total-withdraw')
    const newwithdraw = previouswithdraw + withdrawvalue
    const previoustotalbalance = totalamount('total-amount')
    const newtotalbalance = previoustotalbalance - withdrawvalue
    if (isNaN(withdrawvalue)) {
        alert('give input only number')
        return;
    }
    else if (withdrawvalue > previoustotalbalance) {
        alert("you can't withdraw more money then your balance")
        return;
    }
    setinnertext('total-withdraw', newwithdraw)
    setinnertext('total-amount', newtotalbalance)



})