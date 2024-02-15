function solution(k, d) {
    let arr = [];
    for(let i = 0; i <= d; i += k) {
        for(let j = i; j <= d; j += k){
            console.log(i , j);
        }
    }
    return arr;
}

solution(1,5)