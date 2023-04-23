import { marked } from 'marked';
import React from 'react'
import { useSelector } from 'react-redux'

const Preview = () => {
  const textCurrent = useSelector(state => state.previewSlice.textCurrent)
  const parsedText = marked(textCurrent, { sanitize: true});
  const processedText = { __html: parsedText };

  return (
    <div className='preview block' >
        <div dangerouslySetInnerHTML={processedText}/>
    </div>
  )
}

export default Preview