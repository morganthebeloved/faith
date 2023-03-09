import React from "react";
import Avatar from "../components/Avatar";
import Description from "../components/Description";

const Home = () => {
  return (
    <article className="my-5">
      <div className="container pt-lg-5 mb-5 pb-4">
        <div className="row">
          <div className="col-lg my-2 pt-lg-2 d-flex justify-content-lg-end justify-content-center">
            <Avatar />
          </div>

          <div className="col-lg my-2 pt-lg-1 d-flex justify-content-lg-start justify-content-center">
            <Description />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
