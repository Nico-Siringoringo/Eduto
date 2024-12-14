import Image from 'next/image'
import React, { useState } from 'react'

function Options({selectedCourseType}) {

    const Categories = [
        {
            name: 'Exam',
            icon: '/exam_1.png'
        },
        {
            name: 'Coding Preparation',
            icon: '/code.png'
        },
        {
            name: 'Job Interview',
            icon: '/job.png'
        },
        {
            name: 'Practice',
            icon: '/practice.png'
        },
        {
            name: 'Other',
            icon: '/knowledge.png'
        }
    ]

    const [selectedCategory, setSelectedCategory] = useState()

  return (
    <div>
        <h2 className='text-center mb-2 text-lg'>Choose Your Study Material Category</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5'>
            {Categories.map((category, index) => (
                <div key={index}
                className={`p-4 flex flex-col items-center justify-center border rounded-xl 
                hover:border-primary cursor-pointer ${category?.name == selectedCategory && 'border-primary'}`}
                onClick={() => {setSelectedCategory(category.name); selectedCourseType(category.name)}}>
                    <Image src={category.icon} alt={category.name} width={50} height={50}/>
                    <h2 className='text-sm mt-2'>{category.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Options