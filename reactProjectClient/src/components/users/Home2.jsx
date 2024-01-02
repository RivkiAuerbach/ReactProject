import React from 'react';
import de from './de.jpg';

export default function Home2() {
  return (
    <div
      style={{
        width: '100%', 
        overflow: 'hidden',
      }}
    >
      <img
        src={de}
        alt="Discount Image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
