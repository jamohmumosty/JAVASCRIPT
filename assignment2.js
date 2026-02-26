// Student marks scenario 
let marks=29
if(marks>=0&& marks<=30){
    console.log("failed")
}
else if (marks>=31 && marks <=50){
    console.log("below average")
}
else if (marks>=51 && marks<=70){
    console.log("above average")
}
else if(marks>=71 && marks <=100){
    console.log("Exallent")
}
else{
    console.log("invalid marks")
}
// Example 2 
let distance = 2000
if(distance>0 && distance<=100){
    console.log("pay5 USD")
}
else if (distance>101 && distance<=500){
    console.log("pay 10 USD")
}
else if (distance>501 && distance <=1000){
    console.log("pay20 USD")
}
else if (distance>1001){
    console.log("pay40 USD")
}
else{
    console.log("distance error")
}