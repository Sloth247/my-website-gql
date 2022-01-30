import Meta from './meta';
import HeaderHome from './headerHome';
import FooterHome from './footerHome';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <>{children}</>
    </>
  );
}
