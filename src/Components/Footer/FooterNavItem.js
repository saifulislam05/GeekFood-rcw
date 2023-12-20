import React from 'react'

const FooterNavItem = ({title}) => {
  return (
    <li>
      <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
        {title}
      </a>
    </li>
  );
}

export default FooterNavItem