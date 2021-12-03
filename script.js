function compute()
{
    let p = document.getElementById("principal").value;
    if(p>0){
        let rate = document.getElementById("rate").value / 100.0;
        let rateOnScreen = document.getElementById("rate").value;
        let years = parseInt(document.getElementById("years").value);
        let interest = 0.00;
        interest = p * rate * years;
        let year = new Date().getFullYear();
        year = year+years;
        total = interest+p;

        deposit = document.getElementById("deposit");
        deposit.textContent = "If you deposit " + p + ",";
        interestratetext = document.getElementById("interestratetext");
        interestratetext.textContent = " at an interest rate of " + rateOnScreen + "%.";
        finalamount = document.getElementById("finalamount");
        finalamount.textContent = "You will receive an amount of " +interest + ",";
        finalyear =  document.getElementById("finalyear");
        finalyear.textContent = "in the year " + year;
}
    else
    {
        alert("Please enter positive number in amount");
        document.getElementById("principal").focus();
    }
}
        
function changeInterest()
{   
    let rate = document.getElementById("rate").value;
    let interestRate = document.getElementById("interestRate");
    interestRate.textContent = rate +"%";
}