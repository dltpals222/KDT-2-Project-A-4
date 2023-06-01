import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div>홈</div>
      <div>여기가 홈입니다.</div>
      <Link to="/about">about</Link>
    </div>
  );
};
export default Home;
