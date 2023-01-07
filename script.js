btn=document.getElementById('btn')
tp1=document.getElementById('mail')
tp2=document.getElementById('pass')
btn.addEventListener("mouseenter", check);
btn.addEventListener("click", check);
function check()
{   
    if (tp1.value== "")
    {
        tp1.style.animation="shake 0.5s 1"
    }
    if (tp2.value== "")
    {
        tp2.style.animation="shake 0.5s 1"
    }
    
    if (tp1.value=="abc@gmail.com" && tp2.value=="abc@123")
    {
        btn.removeEventListener("mouseenter", mouseEnter);
        tp1.removeEventListener("click", mouseLeave);
        tp2.removeEventListener("click", mouseLeave);
        btn.style.backgroundColor="#0cc100";
        btn.style.color="#fff";
        btn.style.border="2px solid #fff";
        btn.classList.add('animate')
    }
    else
    {
        btn.addEventListener("mouseenter", mouseEnter);
        tp1.addEventListener("mouseenter", mouseLeave);
        tp2.addEventListener("mouseenter", mouseLeave);
        btn.style.backgroundColor="#fff";
        btn.style.color="#777";
        btn.style.border="none";
        btn.classList.remove('animate')
    }
}

let t=0
function mouseEnter()
{
    t++;
    if(t==1)
    {
        btn.classList.add("moveright1");
    }
    else if(t%2==0)
    {
        btn.classList.remove("moveright1");
        btn.classList.remove("moverightodd");
        btn.classList.add("moverighteven");
    }
    else
    {
        btn.classList.remove("moverighteven");
        btn.classList.add("moverightodd");    
    }
}
function mouseLeave()
{
    btn.classList.remove("moverighteven");
    btn.classList.remove("moverightodd");
    btn.classList.remove("moveright1");
}
function show() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }