import React from "react";
import { useContext } from "react";
import CardCom from "../components/Card.com";
import Loading from "../components/Loading";
import { PostContext } from "../context/PostContext";

const Home = () => {
  const { post } = useContext(PostContext);
  return (
    <div className="all_post">
      <div className="card_container">
        {post.length ? (
          post.map((item) => <CardCom item={item} key={item.id} />)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
