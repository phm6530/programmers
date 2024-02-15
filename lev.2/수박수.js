const solution = (n) => {
	return [...Array(n)].map((_,idx)=> idx % 2 ? "박" : "수").join("");
}
const solution2 = (n) => {
    const waterMelon = "수박";
    return (waterMelon.repeat(Math.ceil(n/waterMelon.length))).slice(0,n);
}

console.log(solution(9));
console.log(solution2(9));
