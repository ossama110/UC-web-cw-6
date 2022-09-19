function BMI(weight,height){
return weight/(height*height)
}


console.log(BMI (80,180))

function STATUS(bmi) {
    
    if(bmi>18.5){
return " لديك نقص في الوزن";

}else if( bmi>=18.5 && bmi<25){
    return " وزنك صحي"

    }
    else if( bmi>=25){

       return "لديك زيادة في الوزن"
    }

}
 
function caculate() {
let weight=document.getElementById( "weight").value 
let height=document.getElementById( "height").value
let bmiResult=BMI(weight,height)
let desc= STATUS( bmiResult)
document.getElementById("result").innerText= desc +" :"+ bmiResult
}




