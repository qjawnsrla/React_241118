import "./App.css";

const member = {
  name: "범준",
  job: "Developer",
  addr: "경기도 부천시",
  gender: "남성",
};

const getGreeting = (user) => {
  return user ? <h1>환영합니다. {user}님.</h1> : <h1>환영합니다. 방문자님.</h1>;
};

// class 선택자는 class가 아니고 className 으로 변경됨
// 태그는 닫힘 태그이어야함
const GreetingComponent = () => {
  return (
    <div className="App">
      <p className="title-name">제 이름은 {member.name}</p>
      <p className="title-name">직업은 {member.job}</p>
      <p className="title-name">주소는 {member.addr}</p>
      <p className="title-name">성별은 {member.gender}</p>
      <p>{getGreeting(member.name)}</p>
    </div>
  );
};

export default GreetingComponent;

// 소문자와 대문자의 차이는 Component가 되느냐의 차이이다
const GetGreeting = (user) => {
  return <>{user}</>;
};
