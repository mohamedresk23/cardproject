// import React from 'react'
import type { IProduct } from '../interfaces';
import { handelProductDescription } from '../utils/functions';
import Image from './Image';
import Button from './UI/Button';

interface  IProps  {
  product:IProduct
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL } = product;
  return (
    <div className='product-card border p-2 rounded-xl flex flex-col space-x-0.5 space-y-2 bg-[#36373a] justify-between'>
      <Image  imgURL={imageURL} alt="productImage" className="h-1/2 object-fill rounded-xl"/>
      <h2>{title}</h2>
      <p>{handelProductDescription(description)}</p>
      <div className="colorpolets flex justify-between space-x-3.5 items-center w-fit ">
        <span className="bg-blue-400 h-5 w-5 rounded-full"></span>
        <span className="bg-blue-400 h-5 w-5  rounded-full"></span>
        <span className="bg-blue-400 h-5 w-5  rounded-full"></span>
        <span className="bg-blue-400 h-5 w-5  rounded-full"></span>
      </div>
      <div className="pricecat flex justify-between items-center">
        <h4 className="price">
          $120
        </h4>
        <Image className='w-9 h-9 rounded-full' imgURL="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="productCat"  />
      </div>
      <div className="btns flex justify-between items-center space-x-1.5">
        <Button onClick={()=>{console.log("test ONClick")}}  className="edit-btn group  overflow-hidden w-3/5 bg-indigo-700 text-white text-xl font-semibold rounded-xl py-2  transition-all duration-200 ease-in-out cursor-pointer relative after:content-[''] after:bg-indigo-300 after:w-0  after:h-0 after:block after:absolute after:-bottom-11/12 after:-left-4 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[200%] hover:after:h-[200%] after:rounded-3xl after:skew-12">
        <span className='absolute z-10 group-hover:text-indigo-700 transition-all duration-200 ease-in-out'>Edit</span>
        Edit
        </Button>
        <Button  className="delet-btn  w-2/5 group  bg-rose-700 text-white text-xl font-semibold rounded-xl py-2 overflow-hidden   transition-all duration-200 ease-in-out cursor-pointer relative after:content-[''] after:bg-rose-300 after:w-0  after:h-0 after:block after:absolute after:-bottom-11/12 after:-left-4 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[200%] hover:after:h-[200%] after:rounded-3xl after:skew-12">
        <span className='absolute z-10 group-hover:text-rose-700 transition-all duration-200 ease-in-out'>Delete</span>
        Delete</Button>
      </div>
    </div>
  )
}

export default ProductCard