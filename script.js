document.getElementById("todo").innerHTML=localStorage.getItem("todo")
function inputTask(){
    let getValue=document.getElementsByTagName("input")[0].value
    let date=document.getElementById('date').value
    let time=document.getElementById('time').value
     let getValueTotal=document.getElementsByTagName('ul')[0].innerHTML+=`<li>${getValue}<span>${date} ${time}</span></li>`
        localStorage.setItem("todo",getValueTotal)
    document.getElementsByTagName("form")[0].reset()
    
}
function clearTask() {
  
    localStorage.clear()
    location.reload()
 
}