const getSleepHours = (day) => {
    switch (day) {
        case 'Monday':
            return 3
            case 'Tuesday':
            return 3
            case 'Wednesday':
            return 5
            case 'Thursday':
            return 3
            case 'Friday':
            return 6
            case 'Saturday':
            return 7
            case 'Sunday':
            return 3
        
          
    }
}
/*console.log(getSleepHours('Monday')); */

const getActualSleepHours = () => {
getActualSleepHours('Monday')+
getActualSleepHours('Tuesday')+
getActualSleepHours('Wednesday')+
getActualSleepHours('Thursday')+
getActualSleepHours('Friday')+
getActualSleepHours('Saturday')+
getActualSleepHours('Sunday') 
}

const getIdealSleepHours = () => {
    let idealHours = 7 
    return idealHours *7
}

