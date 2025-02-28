// write product card here
import React from 'react'
import Button from './button.jsx';
const productcard = () => {
  const image =
    "https://t4.ftcdn.net/jpg/00/64/67/64/360_F_64676483_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
  const name = "Product Name";
  const price = "$99.99";
  return (
    <>
      <div>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{price}</p>
        <Button />
      </div>
    </>
  );
}

export default productcard
