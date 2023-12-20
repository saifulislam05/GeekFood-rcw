import React from 'react'

const SingleSocialIcons = ({data}) => {
    const { link, title, svg } = data;
  return (
    <li>
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="text-gray-700 transition hover:text-gray-700/75"
      >
        <span className="sr-only">{title}</span>
        {svg}
      </a>
    </li>
  );
}

export default SingleSocialIcons