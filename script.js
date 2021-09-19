document.getElementById("todo").innerHTML=localStorage.getItem("todo")
function inputTask(){
    event.preventDefault()

    let tasks=[]
    localStorage.setItem("todo",tasks.toString())
    let getFromStorage=localStorage.getItem("todo").split("")
    let getValue=document.getElementsByTagName("input")[0].value
    let time=new Date().toString()
    getFromStorage.push(`<li>${getValue}<span>${time}</span></li>`)
   
     let getValueTotal=document.getElementsByTagName('ul')[0].innerHTML+=`<li>${getValue}<span>${time}</span></li>`
        localStorage.setItem("todo",getValueTotal)
    document.getElementsByTagName("form")[0].reset()
    
}
function clearTask() {
  
    localStorage.clear()
    location.reload()
 
}