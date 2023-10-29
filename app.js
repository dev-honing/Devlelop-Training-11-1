// 이메일 유효성 검사
// * 선언적 처리 예제
function validateEmail(email) {
  if (typeof(email) === "string") {
    // 문아열이면 배열로 변환
    const emailArray = Array.from(email);
    
    // '@'와 '.' 문자를 필터링
    const filteredArray = emailArray.filter(char => {
      if (char === "@") {
        return true;
      } else if (char === ".") {
        return true;
      } else {
        return false;
      }    
    });
}
}