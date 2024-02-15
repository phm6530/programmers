
function solution(A,B){
    const newArr1 = A.sort((a,b)=> a - b);
    const newArr2 = B.sort((a,b)=> b - a);
    const result = newArr1.map((_,idx) => newArr1[idx] * newArr2[idx] );
    return result.reduce((sum,val) => sum + val);
}

solution([1,2],[3,4]);