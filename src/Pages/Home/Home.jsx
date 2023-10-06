import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNab from "../Shared/LeftSidenav/LeftSideNab";
import Nabbar from "../Shared/Navbar/Nabbar";
import RightSidenav from "../Shared/RightSidenav/RightSidenav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Nabbar></Nabbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNab> </LeftSideNab>
        </div>
        <div className="md:col-span-2 ">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div>
          <RightSidenav></RightSidenav>
        </div>
      </div>
    </div>
  );
};

export default Home;
