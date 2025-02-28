import React from 'react';
import parse from 'react-html-parser';

const homepageFeature = ({ title, image, url, summary }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative"
    >
      <div className="relative w-[80%] h-[475px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover overflow-hidden rounded-[7px]"
        />
        <div className="absolute -bottom-[-3rem] -right-[15rem] w-1/2 bg-white p-4 m-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-darkGray mb-2">{title}</h3>
          <div className="text-sm text-midGray">{parse(summary)}</div>
        </div>
      </div>
    </a>
  );
};

export default homepageFeature;