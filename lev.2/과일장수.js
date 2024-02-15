// k = 최상품사과 최대점
// m = 묶음 몇개씩
// score = 점수
//(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
//result = 8 

function solution(k, m, score) {
    score.sort((a,b) => b - a);
    
    let boxsing = [];
    for(let i = 0; i <= score.length; i += m){

        const box = score.slice(i , i + m)
        if(box.length === m){
            boxsing.push(box);    
        }
        
    }
    const result = boxsing.reduce((sum, val)=>{
        sum += Math.min(...val) * val.length;
        return sum;
    },0);
    return result;
}

const sol = solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
console.log(sol);



