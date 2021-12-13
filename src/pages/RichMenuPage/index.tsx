import { useState } from 'react'
import ImageMapper, { CustomArea, AreaEvent } from 'react-img-mapper'
import Areas from './areas.json'

const RichMenuPage = () => {
  const [area, setArea] = useState<CustomArea | null>(null)
  const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
  const MAP = {
    name: 'my-map',
    areas: Areas,
  }

  const handleClick = (area: CustomArea, index: number, event: AreaEvent) => {
    console.log(area, index, event)
    setArea(area)
  }

  return (
    <div>
      <ImageMapper src={URL} map={MAP} active={false} onClick={handleClick} />
      {
        area &&
        <div>{JSON.stringify(area, null, 2)}</div>
      }
    </div>
  )
}

export default RichMenuPage
