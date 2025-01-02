/*  Name: Cham Kuen Chow
    Date Updated: Sep 21 2024
    Description: JS to handle fraction stuff for assignment 1
    Email: chowcham@shernet.sheridancollege.ca*/

function toFraction(num=0.0,base=16,simplified=false){
    let integer=0;
    let numerator=0;
    if (isNaN(num)){
      return "NaN";
    }else{
      integer=Math.trunc(num);
      numerator=Math.round((num-integer)*base)
      if (numerator==base){
        integer+=1;
        numerator=0;
      }
      if (numerator==0){
        return integer.toString();
      }else{
        if(integer==0){
          if(simplified){
            return reduceFraction(numerator,base);
          }else{
          return numerator+"/"+base;
          }
        }else{
          if(simplified){
            return integer+" "+reduceFraction(numerator,base);
          }else{
          return integer+" "+numerator+"/"+base;
        }
        }
      }
    }
  }
  
function reduceFraction(num1=1,num2=1){
  /*We only have bases 4,8,16,32, therefore common factors can only be 2,4,8,16.
    32 is not considered since we will return 1 when numerator = denominator.
    We make an array from 16 to 2 so that we can find the largest common factor first
    in the for loop.
    Return the reduced fraction once we find the largest common factor.
    If there is no common factor, just return "num1/num2".*/
    const commonFactorArray=[16,8,4,2];
    if (num1==num2){return "1"};
    for (let commonFactor of commonFactorArray) {
      if (num1 % commonFactor==0 && num2 % commonFactor==0){
        return num1/commonFactor+'/'+num2/commonFactor;
      }
    }
    return num1+'/'+num2;
  }