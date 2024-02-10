
document.getElementById("btn").onclick=fibonacci;

function fibonacci(num) {
    num = document.getElementById("fibo").value;
    console.log(num);
    
    let a = 0,b=1,c;
    if(num==1){
        c=0;
    }
    else if(num==2 || num==3){c=1;}
    else {
        for (let i = 2; i < num; i++) {
            c = a + b;
            console.log(c);
            a = b;
            b = c;
        }
    }
    document.getElementById("Res").innerHTML=c;
}

module.exports = fibonacci;
