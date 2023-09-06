const clock = document.getElementById('clock');
let alarmTime = null
const message = document.getElementById('alarmMessage')


let alarms = []
function updateClock() {
    const now = new Date();
    let hour  = now.getHours();
    hour = ("0" + hour).slice(-2);
    const min = now.getMinutes();
    let sec = now.getSeconds();
    sec = ("0" + sec).slice(-2);
    
    
    const time = `${hour}:${min}:${sec}`
    clock.textContent = time;
    
    for(const alarm of alarms){
        const alarmTime = `${alarm.hour}:${alarm.min}:${alarm.sec}`;
        console.log(alarmTime);
        console.log(time);
        if(time == alarmTime) {
            alert(`Alarm: ${alarmTime}  ${alarm.ap}`)
        }
    }

}



function setAlarm(){
    
    const hours = document.getElementById('hrs');
    const minutes = document.getElementById('min');
    const seconds = document.getElementById('sec')
    const time = document.getElementById('AM/PM');

    let alarmHours = hours.value;
    const alarmMinutes = minutes.value;
    const alarmSeconds = seconds.value;
    const ampm = time.value
    if(ampm ==="PM" && alarmHours !== "12"){
        alarmHours = String(parseInt(alarmHours) + 12).padStart(2,'0');
    } else if(ampm === "AM" && alarmHours === "12"){
        alarmHours = "00"
    }
    console.log(alarmHours)

    const newAlarm = {
        hour : alarmHours,
        min : alarmMinutes,
        sec : alarmSeconds,
        ap : ampm
    }
    alarms.push(newAlarm)
    updateAlarmlist();
    alert(`Alarm set for ${alarmHours}:${alarmMinutes}:${ampm}`)
}

function updateAlarmlist() {
    const list = document.getElementById('alarmList')
    list.classList.add("cen")
    list.innerHTML="";
    alarms.forEach((alarm,index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Alarm ${index + 1}:  ${alarm.hour}:${alarm.min}:${alarm.sec} ${alarm.ap}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.onclick = function() {
            deleteAlarm(index)
        }

        
        listItem.appendChild(deleteButton)
        list.appendChild(listItem)
        
    })
}

function deleteAlarm(index) {
    alarms.splice(index,1);
    updateAlarmlist();
}
setInterval(updateClock,1000);