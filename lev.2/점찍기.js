function solution(k, d) {
    let arr = [];
    for(let i = 0; i <= d; i += k) {
        //console.log(i);//[0,1,2,3,4,5];
        for(let j = 0; j <= d; j += k){

            if(i + j <= d) arr.push([i,j]);            
        }
    }
    console.log(arr.length);
    
}

solution(1,5)