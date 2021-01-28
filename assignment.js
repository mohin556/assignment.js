
    //    kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
    }
var convert =kilometerToMeter(9);
console.log(convert);


//    budgetCalculator

function budgetCalculator(watch,mobile,laptop) {
     
    var result = (watch*50) + (mobile*100) + (laptop*500);
return  result;
}
    var budget = budgetCalculator(1,10,10);
    console.log(budget);



    // hotelCost

function hotelCost(day){
        
    var taka = 0;
if(day<=10) {
    taka = day*100;
}
else if (day<=20) {
        var first10 =10*100;
        var remaining = day-10;
        var second10 = remaining*80;
        taka = first10 + second10;
} else{
        var first10 =10*100;
        var second10 =10*80;
        var remaining = day-20;
        var third = remaining*50;
        taka = first10 + second10 + third;
}return taka;
}      var  calculate = hotelCost(11);
       console.log(calculate);


    //    megaFriend

var names = ["sabbir","mohin","arafath","walid","irfan","shabu","minhar","abuBokkor"]
function megaFriend(names){
    
 var large = names[0];
for(var i =0; i <names.length; i++) {
    var element = names[i];
   if(element < large){
        large = element;
    }
 }
return large;
}
var longName = megaFriend(names);
console.log(longName);


