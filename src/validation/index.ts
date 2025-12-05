/**
 * Validates a product's details including title, description, imageURL, and price.
 *
 * @param {Object} product - The product object to be validated.
 * @param {string} product.title - The title of the product. Must be between 10 and 80 characters.
 * @param {string} product.description - The description of the product. Must be between 10 and 900 characters.
 * @param {string} product.imageURL - The URL of the product image. Must be a valid URL format.
 * @param {string} product.price - The price of the product. Must be a numeric value.
 *
 * @returns {Object} errors - An object containing validation error messages.
 * @returns {string} errors.title - Error message for title validation. Empty string if valid.
 * @returns {string} errors.description - Error message for description validation. Empty string if valid.
 * @returns {string} errors.imageURL - Error message for imageURL validation. Empty string if valid.
 * @returns {string} errors.price - Error message for price validation. Empty string if valid.
 *
 * @example
 * const product = {
 *   title: 'Sample Product',
 *   description: 'This is a product description',
 *   imageURL: 'https://example.com/product.jpg',
 *   price: '19.99'
 * };
 * 
 * const errors = onProductValidation(product);
 * if (Object.values(errors).every((error) => error === '')) {
 *   // No validation errors, product is valid.
 * } else {
 *   // Handle validation errors.
 * }
 */
  
export const onProductValidation = (product: { title: string, description: string, imageURL: string, price: string }) => {
  const errors = {
    title: '',
    description: '',
    imageURL: '',
    price: ''
  };

  // Destructure product properties for easier reference
  const { title, description, imageURL, price } = product;

  // Helper function to check if a field is empty or doesn't meet length criteria
  const isInvalidLength = (field: string, min: number, max: number) =>
    !field.trim() || field.length < min || field.length > max;

  // Title validation (10-80 characters)
  if (isInvalidLength(title, 10, 80)) {
    errors.title = 'Product title must be between 10 and 80 characters';
  }

  // Description validation (10-900 characters)
  if (isInvalidLength(description, 10, 900)) {
    errors.description = 'Product description must be between 10 and 900 characters';
  }

  // Image URL validation (must be a valid URL)
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(imageURL);
  if (!imageURL.trim() || !validUrl) {
    errors.imageURL = 'Valid product image URL is required';
  }

  // Price validation (must be a number)
  if (!price.trim() || isNaN(Number(price))) {
    errors.price = 'Enter a valid numeric price';
  }

  // Return errors if any, or an empty object if no errors
  return errors;
};
