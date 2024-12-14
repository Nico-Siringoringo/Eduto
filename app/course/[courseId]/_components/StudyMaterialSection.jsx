import React, { useEffect, useState } from 'react'
import MaterialCardItem from './MaterialCardItem'
import axios from 'axios'
import Link from 'next/link';

function StudyMaterialSection({courseId, course}) {

    const [studyTypeContent, setStudyTypeContent] = useState();
    const MaterialList = [
        {
            name: 'Notes/Chapters',
            desc: 'Read note to prepare',
            icon: '/notes.png',
            path: '/notes',
            type: 'notes'
        },
        {
            name: 'Flashcard',
            desc: 'Flashcard help to remember',
            icon: '/flashcard.png',
            path: '/flashcards',
            type: 'flashcard'
        },
        {
            name: 'Quiz',
            desc: 'Test your knowledge',
            icon: '/quiz.png',
            path: '/quiz',
            type: 'quiz'
        }
    ]

    useEffect(() => {
        GetStudyMaterial()
    }, [])

    const GetStudyMaterial = async() => {
        const result = await axios.post('/api/study-type', {
            courseId: courseId,
            studyType: 'ALL'
        })

        console.log(result?.data)
        setStudyTypeContent(result.data)
    }

  return (
    <div className='mt-5'>
        <h2 className='font-medium text-xl'>Study Material</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-3'>
            {MaterialList.map((item, index) => (
                <MaterialCardItem key={index} item={item}
                    studyTypeContent={studyTypeContent}
                    course={course}
                    refreshData={GetStudyMaterial}
                />
            ))}
        </div>
    </div>
  )
}

export default StudyMaterialSection