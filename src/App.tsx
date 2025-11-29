
// import { Fragment } from 'react/jsx-runtime'
import { useState, type ChangeEvent } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import Modal from './components/UI/Modal';
import { formInputsList, productList } from './data';
import Button from './components/UI/Button';
import Input from './components/UI/Input';
import type { IProduct } from './interfaces';
// import type { IFormInput } from './interfaces';

function App() {
  /* -------------------------- STATE & VARIABLES ------------------------- */

    // Default object for product initialization
  const defaultProductObj = {
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: ''
    }
  }
  const [isOpen, setIsOpen] = useState(false);
  // const [products, setProducts] = useState<IProduct[]>(productList)
  const [product, setProduct] = useState<IProduct>(defaultProductObj)

  /* ---------------------------- HANDLER  --------------------------- */
      function open() {
        setIsOpen(true)
      }

      function close() {
        setIsOpen(false)
      }

      const onChangeHandel = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        setProduct({ ...product, [name]: value })
      }

      const submitHandelar = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(product);
        // You can add further logic to handle the submitted product data
      }

      const onCancel = () => {
        setProduct(defaultProductObj);
        close();
      }

/**
 * Render Products
 */
  const renderProducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  /*
   * Render Products other way
  const renderProducts = () => {
    return productList.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

    * use like this when you have more logic to implement
    };
    
    renderProducts();

  */

    /* Render Form Inputs */
    const renderFormInputs = formInputsList.map((input) => (

      <div key={input.id} className="flex flex-col space-y-1.5" >
          <label htmlFor={input.name} className="font-medium">
            {input.label}
          </label>
          <Input type={input.type} id={input.name} name={input.name} value={product[input.name]} onChange={onChangeHandel}  className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-black/80 focus:ring-1 focus:ring-black/80 mb-2"  />
          {/* <input
            type={input.type}
            id={input.name}
            className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-black/80 focus:ring-1 focus:ring-black/80"
          /> */}
      </div>
    ) );
  return (
    <main className="container mx-auto ">
      
      <Button
        onClick={open}
        className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30">
        Open dialog
      </Button>
      <Modal isOpen={isOpen} closeModal={close} title="Edit Product">
        <form action="" onSubmit={submitHandelar}>

          {/* Render Form Inputs */}
            {renderFormInputs}

          {/* submit button & close button */}
            <div className="flex justify-between items-center space-x-1.5">
              <Button   className="edit-btn group  overflow-hidden w-2/4 bg-green-700 text-white text-xl font-semibold rounded-xl py-2  transition-all duration-200 ease-in-out cursor-pointer relative after:content-[''] after:bg-green-300 after:w-0  after:h-0 after:block after:absolute after:-bottom-12/12 after:-left-4 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[200%] hover:after:h-[250%] after:rounded-3xl after:skew-12" type='submit'>
                <span className='absolute z-10 group-hover:text-green-700 transition-all duration-200 ease-in-out'>Submit</span>
                Submit  
                </Button>

                
                <Button  className="delet-btn  w-2/4 group  bg-rose-700 text-white text-xl font-semibold rounded-xl py-2 overflow-hidden   transition-all duration-200 ease-in-out cursor-pointer relative after:content-[''] after:bg-rose-300 after:w-0  after:h-0 after:block after:absolute after:-bottom-11/12 after:-left-4 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[200%] hover:after:h-[200%] after:rounded-3xl after:skew-12"  onClick={onCancel}>
                <span className='absolute z-10 group-hover:text-rose-700 transition-all duration-200 ease-in-out'>Close</span>
                Close</Button>
            </div>
        </form>

      </Modal>

      
      <div className=' grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4'>
        {renderProducts}
      </div>
    </main>
  )
}

export default App
