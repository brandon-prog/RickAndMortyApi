import { useState } from "react"
import ResidentCard from "./ResidentCard"
import './ResidentsList.css'
import Pagination from './Pagination'
import { usePagination } from '../hooks/usePagination'


function ResidentsList({ residents }) {

   const {
    page, 
    prev, 
    next, 
    itemsPagination, 
    totalPages, 
    maxItemVisible
} = usePagination (residents, 6)
    
return (
        <>
     {residents.length === 0 && <h2 className='text' style={{textAlign: 'center'}}>No  hay  residentes.</h2>}
    
    <div className='residents'>
        {itemsPagination.map(resident => (
            <ResidentCard key={resident} url={resident} />
        ))}
    </div>  

        {residents.length > maxItemVisible &&
   <Pagination
   page={page}
   totalPages={totalPages}
   prev={prev}
   next={next}
   />
    }
    </>
  )
}
export default ResidentsList