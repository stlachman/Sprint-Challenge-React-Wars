import React from 'react';

const Pagination = (props) => {
  return (
    <div className="pagination">
      <ul>
        <li><a onClick={props.onHandleClick} href={props.nextPage}>2</a></li>
      </ul>
    </div>
  )
}

export default Pagination;