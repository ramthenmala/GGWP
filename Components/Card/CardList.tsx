import React from 'react';
import { News } from '../../types/newstypes';

const CardList = ({ title, platform, score, genre, editors_choice }: News) => {
  return (
    <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-semibold">{platform}</p>
      <p className="font-semibold text-gray-700">Score: {score}</p>
      <p className="text-sm text-gray-700">Genre : {genre}</p>
      <p className="text-sm text-gray-500">
        Editors Choice :
        <span
          className={`${
            editors_choice == 'Y' ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {editors_choice}
        </span>
      </p>
    </div>
  );
};

export default CardList;
