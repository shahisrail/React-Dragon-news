import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Nabbar from "../Shared/Navbar/Nabbar";
import RightSidenav from "../Shared/RightSidenav/RightSidenav";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const { id } = useParams();


  const idInt = parseInt(id);

  const anews = news.find((anews) => anews.id === idInt);

  return (
    <div>
      <Header></Header>
      <Nabbar></Nabbar>
      <div className="grid md:grid-cols-4">
        <div className="md:col-span-3">
          {anews ? (
            <>
              <h2 className="text-2xl">News details</h2>
              <h2>{anews.thumbnail_url}</h2>
              <p>{anews.details}</p>
              <p>Published on: {anews.date}</p>
            </>
          ) : (
            <p>No news found for the selected ID.</p>
          )}
        </div>
        <div>
          <RightSidenav></RightSidenav>
        </div>
      </div>
    </div>
  );
};

export default News;
