import React from "react";

const Intro = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) => {
  return (
    <div className="text-center space-y-5 relative">
      <h2 className="text-3xl font-extrabold text-dark-desaturated-blue">
        {title}
      </h2>
      <p className="text-grayish-blue text-base font-semibold">{desc}</p>
      <img
        src={img}
        className="absolute top-1/2  -z-10 left-1/2 translate-y-[-50%] translate-x-[-50%]"
        alt=""
      />
    </div>
  );
};

export default Intro;
