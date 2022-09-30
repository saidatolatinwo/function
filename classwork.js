function studentScore(grade){
if( grade >= 81 && grade <= 100){
    console.log("Congratulations on your well deserved success")
}

else if( grade >= 71 && grade <= 80){
    console.log("Congratulations on your well deserved success")
}

else if( grade >= 61 && grade <= 70){
    console.log("congratulations you can do better")
}

else if( grade >= 50 && grade <= 60){
    console.log("Congratulations you can do better")
}

else if( grade >= 0 && grade <= 49){
    console.log("Sorry please try again later")
}
}
let value = studentScore(70);
console.log(value);


function temperature(degree){
    if(degree >= 0 && degree <= 100){
        console.log("the weather is cold")
    }

    else if(degree >= 35 && degree <= 49){
        console.log("the weather is fine")
    }

    else if(degree >= 60 && degree <= 100){
        console.log("the weather is hot")
    }
}
    let weather = temperature(30);
    console.log(weather)










