import logo from "./logo.svg";
import "./App.css";
import JsxSyntax from "./Jsx문법"; //매핑되는 역할
import GreetingComponent from "./GreetingComponent";
import WelcomeProps from "./WelcomeProps";
import WelcomeProps_a from "./WelcomeProps";
import WelcomeProps_b from "./WelcomeProps";
import Articles from "./Articles";
import MyComponent from "./MyComponents";
import BoxComponent from "./BoxComponent";

const productInfo = {
  date: "2024-09-01",
  product: "iPhone 15 Pro",
};

function App() {
  const getAge = "21";
  return (
    <>
      {/* <h1>여기는 App.js 입니다.</h1> */}
      {/* <JsxSyntax />
      <GreetingComponent /> */}
      {/* <WelcomeProps
        age={getAge}
        name="범준"
        job="개발자"
        addr="경기도 부천시"
        isAdult={true}
        info={productInfo}
      /> */}
      {/* <hr /> */}
      {/* <WelcomeProps
        age={getAge}
        name="안유진"
        job="아이돌"
        addr="대전 서구"
        isAdult={true}
        info={productInfo}
      /> */}

      {/* <Articles /> */}
      {/* <MyComponent name="안유진" age={21} /> */}
      <BoxComponent>첫번째 박스입니다.</BoxComponent>
      <BoxComponent>두번째 박스입니다.</BoxComponent>
      <BoxComponent>세번쨰 박스입니다.</BoxComponent>
    </>
  );
}
export default App;
