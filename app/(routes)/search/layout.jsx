import React from 'react'
import CategorySidebar from './_components/CategorySidebar'

const layout = ({children}) => {
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 gap-10'>
      <div className='col-span-1 hidden md:block'>
        <CategorySidebar />
      </div>
      <div className='md:col-span-3 '>
        {children}
      </div>
    </div>
  )
}

export default layout
