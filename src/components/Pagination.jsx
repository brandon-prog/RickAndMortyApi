import './Pagination.css' 

function Pagination({ page, totalPages, prev, next }) {
  return (
    <div className='pagination'>
        <button  className='pagination_button1' onClick={prev} disabled={page === 1} ></button>
        <span className='pagination_span' style={{color: 'white'}}>{page} of {totalPages}</span>
        <button className='pagination_button2' onClick={next} disabled={page === totalPages}></button>
    </div>
  )
}

export default Pagination