console.log("hello world");
function distanceFromHqInBlocks(number){
    var distance=0;
    if(number > 42){
        distance=number-42;
        return distance;
    }
    else if(number < 42){
        distance = 42-number;
        return distance;
    }
}
 function distanceFromHqInFeet(block){
    return block * 246;
 }
 function distanceTravelledInFeet(feet,block){
    return (block - feet)* 264;
 }
 console.log(distanceFromHqInBlocks(50));/////////////////
 console.log(distanceFromHqInFeet(8));
 console,log(distanceTravelledInFeet(50,8));

 
 