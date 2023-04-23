import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { typeHelp } from '../redux/previewSlice'

const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`

const Header = () => {
  const dispatch = useDispatch()
  const {isShowingHelp} = useSelector(state => state.previewSlice)

  const handleClick = () => {
    dispatch(typeHelp(help))
  }

  const helpActivated = isShowingHelp ? 'helpActivated' : ''
  return (
    <header>
        <h1>Markdown Previewer</h1>
        <button className= {`help ${helpActivated}`} onClick={handleClick}>?</button>
    </header>
  )
}

export default memo(Header)