import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-blue-700 flex justify-between px-3 items-center text-white '>
      <div className='flex w-full justify-between items-center'>
        <div className="logo font-bold text-2xl"> 
            <Link href="/">ShortLinks</Link>
        </div>
        <div className='flex gap-3'>
            <Link href="/github"><button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold'>GitHub</button></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar