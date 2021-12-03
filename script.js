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
        deposit.innerHTML = "If you deposit " + "<span class=\"highlight\">"+p +"</span>"+ ",";  
        interestratetext = document.getElementById("interestratetext");
        interestratetext.innerHTML = " at an interest rate of " + "<span class=\"highlight\">"+rateOnScreen + "%</span>.";
        finalamount = document.getElementById("finalamount");
        finalamount.innerHTML = "You will receive an amount of " +"<span class=\"highlight\">"+interest+"</span>" + ",";
        finalyear =  document.getElementById("finalyear");
        finalyear.innerHTML = "in the year " + "<span class=\"highlight\">"+year + "</span>.";

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