let tasks=[]


function inputTask(){
    event.preventDefault()
    let getValue=document.getElementsByTagName("input")[0].value
    let time=new Date().toString()
    tasks.push(`<li>${getValue}<span>${time}</span></li>`)
    
        document.getElementsByTagName('ul')[0].innerHTML+=`<li>${getValue}<span>${time}</span></li>`
 
    console.log(tasks);
    document.getElementsByTagName("form")[0].reset()
    
}