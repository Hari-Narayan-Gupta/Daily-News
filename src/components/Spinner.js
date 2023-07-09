import React from 'react';
import loading from './Gif/loading.gif';
export default function Spinner() {
    const style = {
        textAlign: 'center',
        margin: 'auto',
        display: 'block'
    }
  return (
    <>
    <div>
        <img src={loading} alt="loading" style={style}/>
    </div>
    </>
  )
}
