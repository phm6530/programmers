function solution(s) {
    const newArr = s.split("");
    newArr.reverse();
    return newArr.join("");
}


console.log(solution('Zbcdefg'))