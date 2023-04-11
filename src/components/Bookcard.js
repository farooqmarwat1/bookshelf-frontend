import React from 'react'
import imag1 from '../images/book.jpg'
const Bookcard = () => {
  return (
    <div>
      <div class="card" style={{width:"18rem"}} >
  <img src={imag1} className="card-img-top embed-responsive-item" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  )
}

export default Bookcard
