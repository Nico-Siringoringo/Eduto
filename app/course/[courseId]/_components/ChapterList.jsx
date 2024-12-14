import React from 'react'

function ChapterList({course}) {

    const CHAPTERS = course?.courseLayout?.chapters

  return (
    <div className='mt-5'>
        <h2 className='font-medium text-xl'>Chapters</h2>
        <div className='mt-3'>
            {CHAPTERS?.map((chapter, index) => (
                <div key={index} className='flex gap-5 items-center p-4 border 
                shadow-md mb-2 rounded-lg mt-3 cursor-pointer'>
                  <h2 className='text-2xl'>{chapter?.icon}</h2>
                  <div>
                    <h2 className='font-medium'>{chapter?.chapter_title}</h2>
                    <p className='text-gray-400  text-sm'>{chapter?.chapter_summary}</p>
                  </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ChapterList