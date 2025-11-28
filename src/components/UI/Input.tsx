import { InputHTMLAttributes } from 'react';
// Import the InputHTMLAttributes type from React to extend the props for the input element.

interface IProps extends InputHTMLAttributes<HTMLInputElement> {};
// Define an interface `IProps` that extends all native input attributes for better type safety.

const Input = ({ ...rest }: IProps) => {
// Create a functional component `Input` that destructures all props using the rest operator and types them with `IProps`.

  return (
    // Start the JSX return block.
    <input
      className="border border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-3 text-md"
      {...rest}
    />
    // Render an `input` element with a default className for styling and spread all other props passed to the component.
  );
  // Close the JSX return block. 
};
// End the `Input` component.

export default Input;
// Export the `Input` component as the default export of this module.