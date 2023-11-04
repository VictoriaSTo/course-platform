"use client"
import React from 'react'

interface TitleFormProps {
  initialData: {
    title: string;
  };
  courseId: string;
}
const TitleForm = ( {initialData, courseId } : 
  TitleFormProps
  ) => {
  return (
    <div>
      Title form
    </div>
  )
}

export default TitleForm
