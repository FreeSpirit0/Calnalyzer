import React from 'react'

const Card = ({ name }: { name: string }) => {
  return (
    <div className="p-8">
        {name}
    </div>
  )
}

export default Card