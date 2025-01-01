import React from 'react'
import { useParams } from 'react-router-dom'

const Services = () => {
    const params = useParams();

    console.log(params?.id)
  return (
    <div className='page-container'>Services</div>
  )
}

export default Services