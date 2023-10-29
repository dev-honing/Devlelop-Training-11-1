// 이메일 유효성 검사
// * 절차적 처리 예제
function validateEmail(email) {
  let hasAtSign = false;
  let hasDot = false;

  if (typeof(email) === "string") {
    for (i=0; i < email.length; i++){
      let char = email[i];
      if (char === "@") {
        hasAtSign = true;
      }
      if (char === ".") {
        hasDot = true;
      }
    }
  
  
  return hasAtSign && hasDot;

} else {
  console.log(email + "<- 이 매개변수는 올바른 데이터 타입이 아닙니다.")
}
}
