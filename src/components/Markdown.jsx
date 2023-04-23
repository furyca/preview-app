import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePreview } from '../redux/previewSlice';

const Markdown = () => {
  const dispatch = useDispatch()
  const {isShowingHelp, textCurrent} = useSelector(state => state.previewSlice)

  const handleChange = (e) => {
    dispatch(updatePreview(e.target.value))
  }
  
  return (
    <div className='block'>
        <textarea value={textCurrent} onChange={e => handleChange(e)} readOnly={isShowingHelp}/>
    </div>
  )
}

export default Markdown