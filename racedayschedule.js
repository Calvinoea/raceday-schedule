let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true

let runnerAge = 19

switch (registeredEarly && runnerAge > 18) {
    case true && true:
        console.log(raceNumber += 1000)
        break;

}




if (runnerAge > 18 && registeredEarly) {

    console.log(`Race at 9.30 am ${raceNumber}`)

} else if (runnerAge > 18 && !registeredEarly) {


    console.log(`You will race at 11:00 am ${raceNumber}`)


} else if (runnerAge < 18) {

    console.log(`You race at 12.30 pm ${raceNumber}`)

} else {

    console.log('See the registration desk')

}