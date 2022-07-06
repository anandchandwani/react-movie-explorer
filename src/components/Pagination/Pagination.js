import React from "react";
import "./Pagination.css";

const Pagination = ({ paginate, totalPage }) => {
  console.log(totalPage);
  return (
    <nav style={{ textAlign: "center" }}>
      <ul className="pagination">
        {(() => {
          const options = [];

          for (let i = 1; i <= 10; i++) {
            options.push(
              <li>
                <a onClick={() => paginate(i)} className="page-link">
                  {i}
                </a>
              </li>
            );
          }

          return options;
        })()}
      </ul>
    </nav>
  );
};

export default Pagination;
