import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>
        <Link href='/'>ブログ</Link>
      </h1>
      <Link href='/articles/new'>記事を書く</Link>
    </header>
  );
};

export default Header;
