function compute()
{
    let p = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value / 100.0;
    let rateOnScreen = document.getElementById("rate").value;
    let years = parseInt(document.getElementById("years").value);
    let interest = 0.00;
    interest = p * rate * years;
    let year = new Date().getFullYear();
    year = year+years;
    total = interest+p;
    result = document.getElementById("result");
    result.textContent = "If you deposit " + p + ", at an interest rate of " 
            + rateOnScreen + "%. You will receive an amount of " 
            + interest +",in the year " + year;
}
        
function changeInterest()
{   
    let rate = document.getElementById("rate").value;
    let interestRate = document.getElementById("interestRate");
    interestRate.textContent = rate +"%";
}