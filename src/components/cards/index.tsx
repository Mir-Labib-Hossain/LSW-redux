import React from 'react'
import Card from '../card'

type Props = {}

const Cards = (props: Props) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
  )
}

export default Cards