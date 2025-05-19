function oddSeries(a){
    let result = []
    for(i = 0; i<a; i++){
        oddNumber = 2*i +1;
        result.push(oddNumber)
    }
    console.log(result.join(", "))
}
oddSeries(5)