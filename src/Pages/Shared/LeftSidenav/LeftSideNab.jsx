import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNab = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl">All categorys </h2>

      {
        categorys.map(category => <Link to={`category/${category.id}`} className="block ml-4 text-xl font-semibold " key={category.id}>{ category.name}</Link>)
      }
    </div>
  );
};

export default LeftSideNab;
