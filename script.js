function compute() {
    var principalId = document.getElementById("principal");
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal == "") {
        alert("Pleaser enter an amount.")
        principalId.focus();
        return false;
    } else if (principal <= 0) {
        alert("Pleaser enter a positiv number.")
        principalId.focus();
        return false;
    }


    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML = 
        "If you deposit <span class='inputVals'>" + principal + "</span>, <br />" +
        "at an interest rate of <span class='inputVals'>" + rate +" %</span>. <br />" +
        "You will receive an amount of <span class='inputVals'>" + interest + "</span>, <br />" + 
        "in the year <span class='inputVals'>" + year + "</span>";

    return true;
}

function updateRate() {
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateVal + " %";
}
