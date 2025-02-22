import React from 'react';
import parse from 'react-html-parser';

const recipePreview = ({ title, image, url, summary }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-bold text-darkGray mb-2">{title}</h3>
        <div className="text-sm text-midGray">{parse(summary)}</div>
      </div>
    </a>
  );
};

export default recipePreview;