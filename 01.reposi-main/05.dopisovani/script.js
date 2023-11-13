const userData = []

function calcBMI() {

    const weightInput = parseFloat(document.getElementById("weight").value)
    const heightInput = parseFloat(document.getElementById("height").value)

    const BMI = weightInput / (heightInput * heightInput).toFixed(1)

    console.log(BMI)

     if ( weightInput<= 0 || heightInput<=0) {
        document.getElementById("output").innerHTML = "ERROR/XDDD"
     } else if(BMI < 18.5) {
        document.getElementById("output").innerHTML = "Podváha"
        userData.push("podváha")
    } else if(BMI >=18.5 && BMI <25){
        document.getElementById("output").innerHTML = "Normální váha"
        userData.push("normální váha")
    }else if(  BMI <= 25 && BMI < 30){
        document.getElementById("output").innerHTML = "Nadváha"
        userData.push("nadváha")
    } else if( BMI> 30){
        document.getElementById("output").innerHTML = "Obezita"
        userData.push("obezita")
    }

    
    document.getElementById("arrayOutput").innerHTML = userData
}
