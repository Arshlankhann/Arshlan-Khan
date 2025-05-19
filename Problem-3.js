function generateOddSeries(a){
    if (a%2 === 0){
        a = a-1;
    }
     let result = [];
     for(i = 0; i<a; i++){
        oddNumber = 2*i +1;
        result.push(oddNumber)
     }
     console.log(result.join(", "))
}

generateOddSeries(8)