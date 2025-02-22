import React from 'react';
import parse from 'react-html-parser';

const homepageFeature = ({ title, image, url, summary }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative max-w-4xl mx-auto rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-full h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 w-1/4 bg-white p-4 m-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-darkGray mb-2">{title}</h3>
          <div className="text-sm text-midGray">{parse(summary)}</div>
        </div>
      </div>
    </a>
  );
};

export default homepageFeature;