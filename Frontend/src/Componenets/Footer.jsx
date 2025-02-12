import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button id='bt' className='item-center' style={{height:"50px"}} >Contact us</button>
        </div>
        <p style={{color:"white"}}>
"Embark on a literary journey with our book haven – where every page turns into an adventure!"</p>
<p style={{color:"blue"}}>"हमारे पुस्तक स्वर्ग के साथ एक साहित्यिक यात्रा पर निकलें – जहाँ हर पन्ना एक रोमांचक सफर बन जाता है!"</p>
            <p  style={{ color: 'white', marginBottom: '0' }}>Call At: 7324824323</p>
      <p style={{ color: 'white', marginBottom: '0' }}>
      Copyright  &copy; {new Date().getFullYear()}  BookStore.
        by ravikant
       <br/>All Rights Reserved.
      </p>
    </footer>
    </div>
  )
}

export default Footer