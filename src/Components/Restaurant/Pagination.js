import React from "react";

const Pagination = ({ currentPage, totalPages, pageHandler }) => {
  const maxPages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <ol className="flex justify-center gap-1 text-xs font-medium my-4">
      <li>
        <a
          href="#"
          className={`inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => pageHandler(currentPage - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      {maxPages.map((page) => (
        <li key={page}>
          <a
            href="#"
            className={`block h-8 w-8 rounded border ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-900"
            } text-center leading-8 cursor-pointer`}
            onClick={() => pageHandler(page)}
          >
            {page}
          </a>
        </li>
      ))}

      <li>
        <a
          href="#"
          className={`inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => pageHandler(currentPage + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
  );
};

export default Pagination;
