import React from 'react'

const CourseIdPage = ({ params } : {
  params: { courseId: String }
}) => {
  return (
    <div>
      Course ${params.courseId} Page
    </div>
  )
}

export default CourseIdPage
