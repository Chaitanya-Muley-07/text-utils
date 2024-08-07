import React,{useState} from  'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const[text,setText]=useState('Enter the text here');
  
  const handleUpClick = ()=>{
 
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success");
   } 
   const handleLoClick = ()=>{
 
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
   } 
   const handleClear = ()=>{
 
    let newText="";
    setText(newText)
    props.showAlert("Cleared Text","success");
   } 
   const handleCopy = ()=>{
       navigator.clipboard.writeText(text).then(()=>
      {
        props.showAlert("Copied Text","success");
      });
   
   }
   const handleOnChange=(event)=>{
  
    setText(event.target.value);
    
   }
   const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed","success");
   }
  return (
<>

  <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
<h1 className='my-2'  >{props.heading }</h1>
<div className="mb-3">

  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleLoClick}>Convert to LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleClear}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleCopy}>Copy</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleExtraSpaces}>Remove Extra Spaces</button>

</div> 
<div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}} >
  <h2>Your Text Summary</h2>
  <p>  {text.split(" ").filter(element => element.length !== 0).length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").filter(element => element.length !== 0).length}  Minutes  read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to Preview"}</p>
</div>
  
</>
  )
}
 
