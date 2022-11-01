import React from "react";
import "./pagination.css"

const Pagination = ({ paginate, nPages, nextPage, prevPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
    <nav>
      <ul className="paginated__btn">
        <li>
          <button
            className="pervious__btn"
            onClick={prevPage}
          >
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className="next__page"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            className="next__btn"
            onClick={nextPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;