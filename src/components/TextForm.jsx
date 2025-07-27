import React, { useState } from 'react'

export default function TextForm({mode,showAlert, themeColor}) {
    let [tUc, settUc] = useState(false);
    let [text, setText] = useState("");
    let handleChange = (event) => {
        setText(event.target.value);
    }
    let toUC = () => {
         if(text.length==0){
            showAlert("Text box is Empty !","warning");
        }
        let newText = text.toUpperCase();
        setText(newText);
        settUc(true);
    }
    let toLC = () => {
         if(text.length==0){
            showAlert("Text box is Empty !","warning");
        }
        let newText = text.toLowerCase();
        setText(newText);
        settUc(false);
    }
    let clearText = () => {
        if(text.length==0){
            showAlert("Text box is already clear","primary");
        }
        setText("");
    }
    let handleSpeech = () => {
        
         if(text.length==0){
            showAlert("Text box is Empty !","warning");
        }
        if ("speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        } else {
            alert("Sorry, your browser does not support text-to-speech.");
        }
    }
    let removeSpace = () => {
         if(text.length==0){
            showAlert("Text box is Empty !","warning");
        }
        setText(text.replace(/\s+/g, ' ').trim());
    }
    const handleCopy = async () => {
         if(text.length==0){
            showAlert("Text box is Empty !","warning");
        }
        try {
            await navigator.clipboard.writeText(text);
            if(text.length!=0){
            showAlert("Copied to clipboard.","success");
           }
            
        } catch (err) {
            alert("Failed to copy text");
        }
    };

    let stylesUC = { display: "inline" };
    let stylesLC = { display: "inline" };

    if (tUc == true) {
        stylesUC = { display: "none" };
    } else {
        stylesLC = { display: "none" };
    }

    return (
        <div className=''>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"><h2>Enter the text to Analyze</h2></label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleChange} style={mode=="dark"?{backgroundColor:"#070d24ff",color:"white"}:null}></textarea>
            </div>
            <button className={`btn btn-primary mx-1`} style={stylesUC} onClick={toUC}>Convert to UpperCase</button>
            <button className={`btn btn-primary mx-1`} style={stylesLC} onClick={toLC}>Convert to LowerCase</button>
            <button className={`btn btn-primary mx-1`} onClick={handleSpeech}>text-to-Speech</button>
            <button className={`btn btn-primary mx-1`} onClick={removeSpace}>Remove Extra Spaces</button>
            <button className={`btn btn-primary mx-1`} onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-outline-danger mx-1" onClick={clearText}>Clear Text</button>
            <br /><br />
            <hr />
            <div className="my-3">
                <h2>Your Text Summary</h2>
                <ul>
                    <li><p>your text has {text.split(" ").length - 1} Words and {text.length} letters. </p></li>
                    <li><p>You will require approx {(text.split(" ").length - 1) * 0.008} mins to read this all.</p></li>
                </ul>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
