import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const data = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
    img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Long Sleeve Graphic T-Shirt',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Coat',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Skirt',
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Hat',
    oldPrice: 19,
    price: 12,
  },
]

const FeaturedProducts = ({ type }) => {
  return (
    <div className="featured-products">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          dignissimos dolor inventore, nulla omnis quibusdam voluptatum! A
          aspernatur aut delectus, deserunt dolore ea illum, inventore ipsam
          libero repellat saepe veniam.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
