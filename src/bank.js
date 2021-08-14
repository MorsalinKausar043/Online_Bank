document.getElementById("diposite_btn").addEventListener("click", () => {
    
    let diposite_val = document.getElementById("input_diposite");
    let diposite_value = diposite_val.value;
    let dipostie_value_int = parseFloat(diposite_value);
    // console.log(dipostie_value_int);

    const current_diposite = document.getElementById('current_diposite');
    const previousDepositText = current_diposite.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + dipostie_value_int;
    console.log(previousDepositText);

    current_diposite.innerText = newDepositTotal;
    // console.log(newDepositTotal);

    // main balance marge 
    const current_balance = document.getElementById("current_balance");
    const main_balance = current_balance.innerText;
    const show_balance = parseFloat(main_balance);
    current_balance.innerText = show_balance + dipostie_value_int;

    diposite_val.value = "";
});

// withdraw

document.getElementById("withdraw_btn").addEventListener("click", () => {
    
    let input_withdraw = document.getElementById("input_withdraw");
    let withdraw_value = input_withdraw.value;
    let withdraw_value_int = parseFloat(withdraw_value);
    // console.log(dipostie_value_int);

    const current_withdraw = document.getElementById('current_withdraw');
    const previousDepositwithdraw = current_withdraw.innerText;
    const previousWidthdrawAmount = parseFloat(previousDepositwithdraw);
    const newWidthTotal = previousWidthdrawAmount + withdraw_value_int;
    // console.log(previousDepositText);

    current_withdraw.innerText = newWidthTotal;
    // console.log(newDepositTotal);

    // main balance marge 
    const current_balance = document.getElementById("current_balance");
    const main_balance = current_balance.innerText;
    const show_balance = parseFloat(main_balance);
    current_balance.innerText = show_balance - withdraw_value_int;

    input_withdraw.value = "";
})