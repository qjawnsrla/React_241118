import Article from "./Article";

const data = [
  {
    title: "정치",
    description: "@@@",
    date: "2024-11-12",
  },
  {
    title: "경제",
    description: "@@@",
    date: "2024-11-13",
  },
  {
    title: "과학",
    description: "@@@",
    date: "2024-11-14",
  },
  {
    title: "스포프",
    description: "@@@",
    date: "2024-11-15",
  },
];

const Articles = () => {
  return (
    <>
      <h1>오늘의 뉴스</h1>
      {data && data.map((e) => <Article data={e} />)}
    </>
  );
};

export default Articles;
