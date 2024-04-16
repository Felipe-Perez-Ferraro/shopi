import React from 'react';
import { spinner } from '../../utils/icons';

const Loading = () => {
  return (
    <article className="flex justify-center pt-10">
      <div className="bg-gray py-8 px-14 rounded-md flex flex-col gap-4">
        <svg className="animate-spin text-primary" viewBox="0 0 24 24">
          {spinner}
        </svg>
        <p className="text-primary text-xl font-bold">Loading</p>
      </div>
    </article>
  );
};

export default Loading;
