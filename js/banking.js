document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount diposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    const dipositTotal = document.getElementById('deposit-total');
    const previousDipositAmount = dipositTotal.innerText;

    const newDepositTotal = parseFloat(previousDipositAmount) + parseFloat(newDepositAmount);

    dipositTotal.innerText = newDepositTotal;

    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);

    const newBalanceTotal = previousBalance + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input field 
    depositInput.value = '';
});

// handle with withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalance - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;


    // clear withdraw input
    withdrawInput.value = '';


})