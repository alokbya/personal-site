import React from 'react'
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <>
        <nav 
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/readables'>Readables</Link> | {" "}
        <Link to='/playables'>Playables</Link> | {" "}
        <Link to='/about'>About</Link> | {" "}
        <Link to='/distractions'>Distractions</Link>
      </nav>
    </>
  )
}

export default Navigation