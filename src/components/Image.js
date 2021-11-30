import React from "react"

function Image({ className, img }) {

  const [hoverState, setHoverState] = useState({ display: 'none' });


  return (
    <div className={`${className} image-container`}>
      <img src={img.url} alt="" className="image-grid" />
    </div>
  )
}

export default Image
