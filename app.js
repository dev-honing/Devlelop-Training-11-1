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

    // 필터링된 배열에서 '@'와 '.' 문자의 존재 여부를 확인
    // includes() 메서드는 배열 메서드이다.
    // 원활한 사용을 위해서는 공식문서(MDN) 사용이 필수적
    const hasAtSign = filteredArray.includes("@");
    const hasDot = filteredArray.includes(".");

    return hasAtSign && hasDot;
  } else {
    console.log(email + "<- 이 매개변수는 올바른 데이터 타입이 아닙니다.");
  }
}