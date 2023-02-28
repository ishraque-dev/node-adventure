import React from 'react';

function BackDrop({ onClick, open }) {
  return (
    <>
      {open && (
        <div
          className="fixed top-0 left-0 z-30 h-[100vh] w-screen backdrop-blur"
          onClick={onClick}
        ></div>
      )}
    </>
  );
}

export default BackDrop;
