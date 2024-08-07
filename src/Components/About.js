import React, { useState } from 'react'


export default function About(props) {
 
 
  let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',

  }
 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='my-3'>About Us</h1>
    <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
    <strong>Analyze Your Text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       <code>TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count,character count or Time to read.</code>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
       <strong> Free to Use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      <code> Completely Free to use for everyone allowing everyone to analyze the text from them.</code>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
      <strong> Browser Compatibility</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      <code> This word counter works in any web browsers such as Chrome,Firefox,internet Explorer,Safari,Opera.It suits to count characters in facebook,blog,books,excel doucments,pdf document,essays,etc.</code>
      </div>
    </div>
  </div>
</div>


</div>
</>
  )
}
