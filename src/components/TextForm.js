import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUPclick=()=>{
        // console.log('uppercase was clicked: '+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoclick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleREclick=()=>{
        const newText = text.split("").reduce((acc, char) => char + acc, "");
        setText(newText)
        props.showAlert("Text Reversed","success");
    }
    const handleChange=(event)=>{
        // console.log("onChange");
        setText(event.target.value)
        
    }
  const [text, setText] = useState("Enter your text here");
  return (
    <>
    <body>
        
    <div className="contanier " >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleChange} id="myBox"  rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPclick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleREclick}>reverse the string</button>
    </div>
    <div className= "container my-3 ">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words,{text.length} character</p>
        <p>{0.008 * text.split(" ").length}Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </body>
    </>

  )
}
