// [JSX 문법이해하기]
// JSX에 표현식 포함하기 {변수나 연산식}
// JSX에 표현식 포함하기 : 컴포넌트를 반환 시 하나의 태그여야함, <>
// 조건부 렌더링 : JSX문 내부에서는 조건부 연산자 사용 가능
// 3항 연산자 사용으로 참인경우와 거짓인 경우에 화면을 다르게 구성할 수 있음
// 인라인 스타일링 : 문자열 형태가 아니고 객체형태로 만들어야함

const inlineStyle = {
  backgroundColor: "#222",
  color: "royalBlue",
  fontSize: "2em",
};

const JsxSyntax = () => {
  const name = "리앧트.";
  const member = false;
  return (
    <>
      {name === "리액트" ? (
        <h1 style={inlineStyle}>React를 공부하겠습니다. </h1>
      ) : (
        <h1 style={inlineStyle}>Javascript를 공부하겠습니다.</h1>
      )}
      {member && (
        <>
          <h1>환영합니다. 고객님..</h1>
          <p>해당 메뉴를 자유롭게 사용하시면 됩니다.</p>
        </>
      )}
      <h1>리액트 공부를 시작하겠습니다.</h1>
      <p>리액트는 JSX문법을 사용하고 리턴문 내에서 작성합니다.</p>
    </>
  );
};
export default JsxSyntax;
