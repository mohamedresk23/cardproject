/**
 * Truncates the product description to a specified maximum length and adds an ellipsis ("...") 
 * if the description exceeds the max length.
 *
 * @param {string} description - The product description to be truncated.
 * @param {number} [maxLinth=50] - The maximum length of the truncated description. Defaults to 50 if not provided.
 * @returns {string} The truncated description if it exceeds the max length, otherwise the original description.
 */
export const handelProductDescription = (description:string,maxLinth:number = 50) : string => {
  const truncatedDescription : string = description.length > maxLinth ? `${description.slice(0,maxLinth) }...` : description;
  return truncatedDescription; 
}