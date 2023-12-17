import React from 'react'

const FeedbackCard = ({ data }) => {
  const { avatar, content, name, designation } = data;
  
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
        <p className="leading-relaxed text-gray-700">
         {content}
        </p>
      </blockquote>

      <div className="mt-4 flex items-center gap-4">
        <img
          alt={name}
          src={avatar}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="text-sm">
          <p className="font-medium">{name}</p>
          <p className="mt-1">{designation}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard