// 솔루션 1

function solution(number) {
    const filterNumber = "*".repeat(number.length - 4 );
    const lastNumber =  number.slice(-4);
    return filterNumber + lastNumber;
}
console.log(solution("027778888"));

//솔루션2

function solution_seconed(number) {
    return [...number].fill("*",0, number.length - 4);
}
console.log(solution_seconed("027778888"));
