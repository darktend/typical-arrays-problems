exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0
    }

   let minArr=array[0];
   array.forEach(element => {
       minArr=element<minArr?element:minArr
   });
   return minArr
}


exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0
    }

   let maxArr=array[0];
   array.forEach(element => {
    maxArr=element>maxArr?element:maxArr
   });
   return maxArr
}

exports.avg = function avg(array) {
    if(!array || array.length===0){
        return 0
    }
    let sum = 0;
    array.forEach((item) => {
        sum += item;
    })

    return sum / array.length;

}
