import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
  let count = props.count;
  let total = Math.ceil(count / 10);
  let index = [];
  for (let i = 1; i <= total; i++) {
    index.push(i);
  }
  return (
    <div className="pagination">
      <ul>
        {
          index.map(item => {
            return <li key={item}><a href={`https://swapi.co/api/people/?page=${item}`} onClick={props.onHandleClick}>{item}</a></li>
          })
        }
        {/* <li><a onClick={props.onHandleClick} href={props.nextPage}>2</a></li> */}
      </ul>
    </div>
  )
}

export default Pagination;