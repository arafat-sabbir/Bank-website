function inputvalues(inputvalue) {
    const inputfield = document.getElementById(inputvalue);
    const newinputvalueint = inputfield.value
    const newinputvalue = parseFloat(newinputvalueint)
    inputfield.value = '';
    return newinputvalue;
}
function totalamount(amounttotal){
    const element = document.getElementById(amounttotal)
    const amountint = element.innerText;
    const amount = parseFloat(amountint);
    return amount;
}
function setinnertext(element,elementvalue){
    const textstring = document.getElementById(element)
    textstring.innerText = elementvalue
}