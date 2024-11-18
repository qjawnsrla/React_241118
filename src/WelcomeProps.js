// 컴포넌트 : 리액트에서 UI를 구성하는 독립적인 모듈
// UI 와 상태 (State)를 가짐
// 대문자로 시작해야함, 소문자로 시작하면 html태그로 판단해버림
// 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달할 때는 props로 전달해야함
// props는 키워드가 아님
// 구조분해 또는 비구조화 할당

const WelcomeProps = (props) => {
  return (
    <>
      <h1>hello {props.name}님</h1>
      <p>직업 : {props.job}</p>
      <p>주소 : {props.addr}</p>
      {props.isAdult ? <p>성인입니다.</p> : <p>미성년자 입니다.</p>}
      <p>{JSON.stringify(props.isAdult)}</p>
      <p>정보 : {props.info.product}</p>
    </>
  );
};
export default WelcomeProps;

// const WelcomeProps_a = ({name, job, addr, isAdult, info}) => {
//     return (
//       <>
//         <h1>hello {name}님</h1>
//         <p>직업 : {job}</p>
//         <p>주소 : {addr}</p>
//         {isAdult ? <p>성인입니다.</p> : <p>미성년자 입니다.</p>}
//         <p>{JSON.stringify(isAdult)}</p>
//         <p>정보 : {info.product}</p>
//       </>
//     );
//   };
//   export default WelcomeProps_a;

// const WelcomeProps_b = (props) => {
//   const { name, job, addr, isAdult, info, age } = props;
//   return (
//     <>
//       <h1>hello {name}님</h1>
//       <p>직업 : {job}</p>
//       <p>주소 : {addr}</p>
//       {isAdult ? <p>성인입니다.</p> : <p>미성년자 입니다.</p>}
//       <p>{JSON.stringify(isAdult)}</p>
//       <p>정보 : {info.product}</p>
//       <p>나이 : {age}</p>
//     </>
//   );
// };
// export default WelcomeProps_b;
