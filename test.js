수정 성공 문제
function solution(n) {
  let str = n.toString(); // n을 문자열로 만듬
  let split_str = str.split(""); // 배열은 변환
  let reverse_str = split_str.reverse(); // 순서 뒤집기
  let final_str = reverse_str.map((str) => parseInt(str, 10)); // 뒤집어서 표시
  let plus_str = final_str.join("+"); // 각 +를 집어 넣고
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += final_str[i]; // 숫자들의 합을 내고
  }
  console.log(sum)
  let f_result = `${plus_str} = ${sum}`; // "5"+"4"+"3"+"2"+"1" = "합계"
  return f_result;
  
}
console.log(solution(456756));

첫번째 실패 문제
function solution(n) {
  let str = n.toString(); // n을 문자열로 만듬
  let split_str = str.split(""); // 배열은 변환
  let reverse_str = split_str.reverse(); // 순서 뒤집기
  let final_str = reverse_str.map((str) => parseInt(str, 10)); // 뒤집어서 표시
  let plus_str = final_str.join("+"); // 각 +를 집어 넣고
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    answer += parseInt(sum[i]); // 숫자들의 합을 내고
  }
  return answer;
  let f_result = `&{plus_str} = ${answer}`; // "5"+"4"+"3"+"2"+"1" = "합계"
  return f_result;
}
console.log(solution(456756));


1. 배열 뒤집기 .reverse()
2. 배열 안에서 더해지는 방법을 문자열로 나타내기

다른 문제풀이 방식
1번
function solution(n) {
return String(n).split("").reverse().map(number=>parseInt(number)).reduce((a,b)=>(a+b));
}
console.log(solution(456756));

2번
function solution(n) {
  const reversedNumArr = String(n).split("").reverse();

  let sum = 0;
  sum = reversedNumArr.reduce((acc, cur) => acc + Number(cur), 0);

  let answer = `${reversedNumArr.join("+")} = ${sum}`;

  return answer;
}
console.log(solution(718253));