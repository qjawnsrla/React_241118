import styled from "styled-components";

const BoxStyle = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 300px;
  font-size: 1.4em;
  background-color: royalblue;
  text-align: center;
  color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  margin: 20px;
`;

const BoxComponent = ({ children }) => {
  return (
    <>
      <BoxStyle>{children}</BoxStyle>
    </>
  );
};
export default BoxComponent;
