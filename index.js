var t=0;
var ini="78";
function access(id)
{
    if(ini==id)
    {
        return;
    }
    if(t%2==0)
    {
        document.getElementById("0"+id).innerHTML="X";
        document.getElementById("0"+id).style.visibility="visible";
        document.getElementById("turn").innerHTML="Turn: Player 2";
    }
    else 
    {
        document.getElementById("0"+id).innerHTML="0";
        document.getElementById("0"+id).style.visibility="visible";
        document.getElementById("turn").innerHTML="Turn: Player 1";
    }
   t++;

    if(t>4)
    {
        check();
    }
    ini=id;
}
function check()
{
    var x00=document.getElementById("000").innerHTML;
    var x01=document.getElementById("001").innerHTML;
    var x02=document.getElementById("002").innerHTML;
    var x10=document.getElementById("010").innerHTML;
    var x11=document.getElementById("011").innerHTML;
    var x12=document.getElementById("012").innerHTML;
    var x20=document.getElementById("020").innerHTML;
    var x21=document.getElementById("021").innerHTML;
    var x22=document.getElementById("022").innerHTML;
    
    console.log(x00);
    console.log(x01);
    console.log(x02);
    console.log(x10);
    console.log(x11);
    console.log(x12);
    console.log(x20);
    console.log(x21);
    console.log(x22);
    
    console.log(typeof x00);
    console.log(typeof x01);
    console.log(typeof x02);
    console.log(typeof x10);
    console.log(typeof x11);
    console.log(typeof x12);
    console.log(typeof x20);
    console.log(typeof x21);
    console.log(typeof x22);
    

    if(x00===x01 && x01===x02)
    {
        console.log("1");
        windec(x00);
    }
    else if(x10===x11 && x11===x12)
    {
        console.log("2");
        windec(x10);
    }
    else if(x20===x21 && x21===x22)
    {
        console.log("3");
        windec(x20)
    }
    else if(x00===x10 && x10===x20)
    {
        console.log("4");
        windec(x00)
    }
    else if(x01===x11 && x11===x21)
    {
        console.log("5");
        windec(x01)
    }
    else if(x02===x12 && x12===x22)
    {
        console.log("6");
        windec(x02)
    }
    else if(x00===x11 && x11===x22)
    {
        console.log("7");
        windec(x00)
    }
    else if(x02===x11 && x11===x20)
    {
        console.log("8");
        windec(x02)
    }
    else if(t==9)
    {
        windec("draw");
    }
}
function windec(id)
{
    
    if(id==="X")
    document.getElementById("snackbar").innerHTML="Winner:Player 1";
    else if(id=="0")
    document.getElementById("snackbar").innerHTML="Winner:Player 2";
    else
    document.getElementById("snackbar").innerHTML="Draw Match";
    document.getElementById("snackbar").className="show";
}

function refr()
{
    window.location.reload();
}
