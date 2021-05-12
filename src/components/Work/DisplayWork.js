import React from "react";
import { worklist } from "./worklist";
import "./displayWork.css";
import { Link } from "react-router-dom";

const DisplayWork = ({ id }) => {
  const work = worklist.filter((item) => item.id === id)[0];
  console.log(work.imgUrl);
  return (
    <div
      className="display"
      style={{ background: "url(" + work.image + ")", backgroundSize: "cover" }}
    >
      <div className="heading">
        <h1>
          <Link to="/works">
            <i
              className="fas fa-arrow-left"
              style={{ marginRight: "2rem", color: "#ffffff" }}
            ></i>
          </Link>
          Project Description
        </h1>
      </div>
      <div className="body">
        <h2>{work.name}</h2>
        {/* <hr style={{ width: "90%", color: "#000" }} /> */}
        <img src={work.image} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          alias, cupiditate hic numquam necessitatibus sunt eos repellat, eum
          minus, voluptate omnis ipsam corrupti temporibus animi nisi. Ex,
          consectetur debitis! Inventore? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo aliquid cum sint voluptatibus dolorem
          <br />
          consequuntur a aliquam quaerat voluptatem ut temporibus, mollitia
          fugit earum incidunt voluptas repudiandae accusantium, eum rerum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor
          eaque vero eveniet non cum inventore saepe accusantium ab? Consequatur
          est architecto ipsum fuga vitae impedit dolor aperiam perferendis nam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          <br />
          repudiandae, perspiciatis facilis debitis architecto fuga quasi fugit
          quaerat vitae? Dolorum voluptatum quibusdam eveniet fugiat quaerat
          quia est laboriosam cumque quas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Numquam suscipit aperiam ad molestias!
          Id sequi perspiciatis molestias earum maiores numquam dolorem nulla
          culpa, officiis facere necessitatibus, magni doloribus vero
          quaerat.lore Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt animi placeat ducimus explicabo exercitationem alias
          <br />
          voluptates iusto dicta, labore facere at reiciendis rem, nobis saepe
          velit magnam in veniam sed? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio, ullam blanditiis! Ipsum aperiam officia
          corporis quisquam delectus iste ea ad sunt sit eum, molestiae nemo
          esse eius et culpa deserunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur esse eveniet enim molestiae,
          repudiandae fuga autem ea consequatur amet quia perferendis odit quas
          tenetur alias voluptatem? Reprehenderit reiciendis at cum.
          <br />
          voluptates iusto dicta, labore facere at reiciendis rem, nobis saepe
          velit magnam in veniam sed? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio, ullam blanditiis! Ipsum aperiam officia
          corporis quisquam delectus iste ea ad sunt sit eum, molestiae nemo
          esse eius et culpa deserunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur esse eveniet enim molestiae,
          repudiandae fuga autem ea consequatur amet quia perferendis odit quas
          tenetur alias voluptatem? Reprehenderit reiciendis at cum.
          <br />
          voluptates iusto dicta, labore facere at reiciendis rem, nobis saepe
          velit magnam in veniam sed? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio, ullam blanditiis! Ipsum aperiam officia
          corporis quisquam delectus iste ea ad sunt sit eum, molestiae nemo
          esse eius et culpa deserunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur esse eveniet enim molestiae,
          repudiandae fuga autem ea consequatur amet quia perferendis odit quas
          tenetur alias voluptatem? Reprehenderit reiciendis at cum.
          <br />
          voluptates iusto dicta, labore facere at reiciendis rem, nobis saepe
          velit magnam in veniam sed? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio, ullam blanditiis! Ipsum aperiam officia
          corporis quisquam delectus iste ea ad sunt sit eum, molestiae nemo
          esse eius et culpa deserunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur esse eveniet enim molestiae,
          repudiandae fuga autem ea consequatur amet quia perferendis odit quas
          tenetur alias voluptatem? Reprehenderit reiciendis at cum.
        </p>
      </div>
    </div>
  );
};

export default DisplayWork;
