import React from 'react'
import ResearchPage from '../ui/researchpage/ResearchPage'
import Scientists from '../ui/scientists/Scientists'
import Publications from '../ui/publication/Publications'

const Study = () => {
  return (
    <div>
        <ResearchPage/>
        <Scientists/>
        <Publications/>
    </div>
  )
}

export default Study