let balance = 10000;

function login(){
    let pin = document.getElementById("pin").value;

    if(pin==="1234"){
        document.getElementById("login").style.display="none";
        document.getElementById("menu").style.display="block";
    }else{
        alert("Wrong PIN");
    }
}

function deposit(){
    let amount = Number(document.getElementById("amount").value);

    balance += amount;

    document.getElementById("balance").innerHTML=balance;
    document.getElementById("message").innerHTML="Deposit Successful";
}

function withdraw(){
    let amount = Number(document.getElementById("amount").value);

    if(amount<=balance){
        balance-=amount;
        document.getElementById("balance").innerHTML=balance;
        document.getElementById("message").innerHTML="Withdrawal Successful";
    }else{
        document.getElementById("message").innerHTML="Insufficient Balance";
    }
}

function logout(){
    location.reload();
}
