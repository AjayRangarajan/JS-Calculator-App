
function val(x){
    let a=document.getElementById('result').value;
    a+=x;
    document.getElementById("result").value=a;
}

function equals(y){
    let b=document.getElementById('result').value;
    let c=eval(b);
    document.getElementById("result").value=c;
}

function clr(){
    document.getElementById("result").value='';
}