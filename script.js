// task1

var div=document.createElement("div");
div.innerHTML="this is div";
div.addEventListener("mouseover",bar);
document.body.append(div);

function bar(){
    document.querySelector("div").style.color="red";
}

// task2

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Click me";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    var ele=prompt("enter the age");
    var span=document.createElement("span");
    span.style.fontSize="32px";
    span.style.color="green";
    span.innerHTML=ele;
    document.body.append(span);
  
}