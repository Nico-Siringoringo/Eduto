import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from 'react'

function TopicInput({setTopic, setDifficulty}) {
  return (
    <div className='w-full flex flex-col items-center'>
        <h2>Enter the Topic</h2>
        <Textarea placeholder='Type your Topic' className='mt-2 w-full'
        onChange={(event) => setTopic(event.target.value)}/>

        <h2 className='mt-5 mb-3'>Select the Difficulty</h2>
        <Select onValueChange={(value) => setDifficulty(value)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Difficulty Level" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Moderate">Moderate</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
        </Select>
    </div>
  )
}

export default TopicInput