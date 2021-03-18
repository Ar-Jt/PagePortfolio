let textP = document.getElementById("text")
let botton = document.getElementById("botton")
let x = 0;

function postFunction()
{
    t = text.value

    if(t == "")
    alert ("You should type before enter");

    else if(x == 0 && t != "")
    {
        document.getElementById("Topic1").innerHTML = t;
        document.getElementById("text").value ="";
        x++
    }

    else if(x == 1 && t != "")
    {
        document.getElementById("comment1").innerHTML = t;
        document.getElementById("text").value ="";
        x++
    }

    else if(x == 2 && t != "")
    {
        document.getElementById("comment2").innerHTML = t;
        document.getElementById("text").value ="";
        botton.disabled = true;
        x++
    }
}

function clearFunction()
{
    document.getElementById("Topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    document.getElementById("text").value = "";
    x=0;
}

