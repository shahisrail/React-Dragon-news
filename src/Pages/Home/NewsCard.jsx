import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="card   bg-base-100 shadow-xl mb-16">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
      <figure>
        <img src={image_url} />
      </figure>
      {details.length > 200 ? (
        <p>
          {details.slice(0, 200)}
          <Link to={`/news/${_id}`} className="text-blue-600">
            Read more ...
          </Link>
        </p>
      ) : (
        <p>{details}</p>
      )}
    </div>
  );
};

export default NewsCard;
