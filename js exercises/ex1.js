
function myCalculation (d,p,v){
  let tva = v * (d * p / 100);
  let result = d * p + tva;
    console.log(result)
};
myCalculation(22,100,19);
