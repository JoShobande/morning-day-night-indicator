
let changeImage = document.querySelector("#picture")
let timeOfDay = document.querySelector("#timeOfTheDay")
let wake = 8

let lunch = 12

let nap = 15

let nightSleep = 22 




const Time = setInterval(function(){    
    let now = new Date()
    let hours = now.getHours()
    
    let minutes = now.getMinutes()
    
    let seconds = now.getSeconds()
    
    if(seconds < 10){
        seconds = `0${seconds}`
    }
    if(minutes<10){
        minutes = `0${minutes}`
    }
    
    document.querySelector("#hours").innerHTML = `${hours>12 ? hours - 12 : hours} :`
    document.querySelector("#minutes").innerHTML = `${minutes} :`
    document.querySelector("#seconds").innerHTML = `${seconds}`
    if(hours >= 12){
        timeOfDay.innerHTML = "PM"    
    }else{
        timeOfDay.innerHTML = "AM"
    }

    let select = document.getElementById("select").value;
    let wakeUp = select == -1 ? wake : select;
    let select1 = document.getElementById("select1").value
    let lunchTime = select1 == -1 ? lunch : select1
    let select2 = document.getElementById("select2").value
    let napTime = select2 == -1 ? nap : select2

    
    
    if(wakeUp == hours){
        changeImage.setAttribute("src", "./images/wake.jpg")
    }else if(hours > wakeUp && hours < lunchTime ){
        changeImage.setAttribute("src", "./images/morning.jpg")
    }else if(lunchTime == hours){
        changeImage.setAttribute("src", "./images/lunch.jpg")
    }else if(hours > lunchTime && hours < napTime){
        changeImage.setAttribute("src", "./images/afternoon.jpg")
    }else if(hours == napTime){
        changeImage.setAttribute("src", "./images/sleep.jpg" )
    }else if (hours > napTime && hours < nightSleep){
        changeImage.setAttribute("src", "./images/girls-night-out.jpg")
    }else if (hours > nightSleep){
        changeImage.setAttribute("src", "./images/goodnight.jpg")
    }else{
        changeImage.setAttribute("src", "./images/9.jpg")
    }       
}, 1000)






