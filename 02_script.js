console.log("script 확인");

// DOM
const form = document.querySelector("#searchForm");

// Event Listener
form.addEventListener("submit", searchFormHandler);

// Event Handler
function searchFormHandler() {
  console.log("searchFormHandler 확인");
}

// 데이터 조회
// https://pokeapi.co/
// https://pokeapi.co/docs/v2
// https://pokeapi.co/docs/v2#pokemon
// GET https://pokeapi.co/api/v2/pokemon/{id or name}/
// form을 통해서 '번호'나 '영어이름' -> API로 호출

// 데이터 변형

// 화면 그리기
