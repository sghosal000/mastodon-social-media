import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 h-16 flex justify-between items-center px-4 bg-white border-b-2 border-b-gray-300'>
        <div className='flex items-center space-x-1'>
            <img src="https://www.svgrepo.com/show/505378/explore.svg" alt="explore" className='w-6' />
            <h1 className='text-2xl font-bold'>Explore</h1>
        </div>
        <div>
            <img src="https://www.svgrepo.com/show/503076/profile.svg" alt="profile" className='w-10 rounded-full bg-gray-300' />
        </div>
    </div>
  )
}

export default Header