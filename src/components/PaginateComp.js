import React from 'react'

const PaginateComp = () => {
  return (
    <nav>
  <ul className="pagination pagination-lg">
    <li className="page-item active" aria-current="page" style={{zIndex:'-1'}}>
      <span className="page-link">1</span>
    </li>
    <li className="page-item"><button className="page-link">2</button></li>
    <li className="page-item"><button className="page-link">3</button></li>
  </ul>
</nav>
  )
}

export default PaginateComp
