interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { // declare a props interface that includes all native button attributes
  children: React.ReactNode; // required prop: anything React can render (text, elements, fragments)
  className?: string; // optional CSS class name string for styling
      // (question mark makes it optional)
} // end of IProps interface

const Button = ({children, className, ...rest}:IProps) => { // functional component that destructures props and types them with IProps
  return ( // start JSX return
    <button className={className} {...rest}> 
    {/* // render a native button, apply className and spread any other HTML button attributes/events */}
       {children} {/*// place the passed children inside the button */}
    </button> // close button element
  ) // end JSX return
} // end Button component

export default Button // export the component as the default export from this module