import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='pt-4 bg-sky-700'>
      <ul className='flex justify-around text-white'>
        <li>
          <Link href='/'>HOME</Link>
        </li>
        <li>
          <Link href='/about'>ABOUT</Link>
        </li>
      </ul>
      {/* <label id='username'>email</label>
      <input aria-labelledby='username' /> */}
      <small className='block text-center mt-4 bg-sky-100'>@2023 YMDM</small>
    </footer>
  );
};
