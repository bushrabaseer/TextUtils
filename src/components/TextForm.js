import React,{ useState } from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("UpperCase was clicked" +text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case","success");
    }
    const handleLoClick=()=>{
      //console.log("UpperCase was clicked" +text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("converted to lower case","success");
  }
  const handleClear=()=>{
    let newText=''
    setText(newText)
    props.showAlert("Text Cleared","success");
    
}
    const handleOnChange=(event)=>{
        console.log("Onchange");
        setText(event.target.value);
    }
    const capitalFirstLetter = ()=>{
      let words = text.split(" ")
     let uppercaseword = ' '
      words.forEach(element => {
         uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
      });
      setText(uppercaseword)
      props.showAlert("done","success");
    }
    const [text, setText] = useState('');
    //setText("new text"); //change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-success mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
        <button className="btn btn-success mx-2" onClick={handleClear} >Cleat Text</button>
        <button className="btn btn-success mx-2" onClick={capitalFirstLetter} >Capital the letter</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}} >
      <h2>You text summary </h2>
      <p>{text.length>0?text.trim().split(" ").length:0} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preview here"}</p>
    </div>
    </>
  )
}
