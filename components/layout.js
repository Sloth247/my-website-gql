import Meta from './meta';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <>{children}</>
    </>
  );
}
