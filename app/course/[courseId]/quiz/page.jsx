"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios'
import { useParams} from 'next/navigation'
import React, { useEffect, useState } from 'react'
import QuizCardItem from './_components/QuizCardItem';

function Quiz() {
    const { courseId } = useParams();
    const [quizData, setQuizData] = useState()
    const [quiz, setQuiz] = useState([])
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState()
    const [stepCount, setStepCount] = useState(0)
    useEffect(() => {
        getQuiz()
    }, [])

    const getQuiz = async() => {
        const result = await axios.post('/api/study-type', {
            courseId: courseId,
            studyType: 'quiz'
        })

        setQuizData(result.data)
        setQuiz(result.data.content)
        console.log(result.data)
    }

    const checkAnswer = (userAnswer, currentQuestion) => {

        setCorrectAnswer(currentQuestion?.answer)
        if (userAnswer == currentQuestion?.answer) {
            setIsCorrectAnswer(true)
            return
        }
        setIsCorrectAnswer(false)
    }

    useEffect(() => {
        setCorrectAnswer(null)
        setIsCorrectAnswer(null)
    }, [stepCount])

  return (
    <div>
      <h2 className="font-bold text-2xl text-center mb-2">Quiz</h2>

      <div className="flex gap-5 items-center mt-2">
        {stepCount != 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStepCount(stepCount - 1)}
          >
            Previous
          </Button>
        )}
        {quiz?.map((item, index) => (
          <div
            key={index}
            className={`w-full h-2 rounded-full
                    ${index < stepCount ? "bg-primary" : "bg-gray-200"}
                  `}
          ></div>
        ))}
        {stepCount < quiz.length && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStepCount(stepCount + 1)}
          >
            Next
          </Button>
        )}
      </div>

      <div>
        <QuizCardItem
          quiz={quiz[stepCount]}
          userSelectedOption={(v) => checkAnswer(v, quiz[stepCount])}
        />
      </div>

      {isCorrectAnswer == false && (
        <div className="border p-3 border-red-700 bg-red-200 rounded-lg">
          <h2 className="font-bold text-lg text-red-600">Incorrect</h2>
          <p className="text-red-600">Correct answer is {correctAnswer}</p>
        </div>
      )}
      {isCorrectAnswer == true && (
        <div className="border p-3 border-green-700 bg-green-200 rounded-lg">
          <h2 className="font-bold text-lg text-green-600">Correct</h2>
          <p className="text-green-600">Your Answer is Correct</p>
        </div>
      )}
    </div>
  );
}

export default Quiz