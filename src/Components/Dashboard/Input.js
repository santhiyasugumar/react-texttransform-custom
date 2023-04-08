import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useSpeechSynthesis } from "react-speech-kit";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function Input() {
    const [totalcharacters, settotalcharacters] = useState('0');
    const [totalwords, settotalwords] = useState('0');
    const [value, setValue] = React.useState("");
    const [txtArea, settxtArea] = React.useState("");
    const { speak } = useSpeechSynthesis();

    useEffect(() => {
        // const data = window.localStorage.getItem('MY_APP_STATE');
        // if ( data !== null ) settxtArea((data));
    }, []);

    const onchange_Event = event => {
        settotalcharacters(event.target.value.length);
        if(event.target.value)
        { 
            const totword_array = event.target.value.split(' ');
            settotalwords(totword_array.length);
            setValue(event.target.value);
        } else {
            settotalwords("0");
        }
        settxtArea(event.target.value);
        window.localStorage.setItem('MY_APP_STATE', event.target.value)
    }
    
    const upper = event => {
        settxtArea(txtArea.toUpperCase());
    }

    const lower = event => {
        settxtArea(txtArea.toLowerCase());
    }

    const singlequotefront = event => {
        if(txtArea.includes('\n')) {
            var arr = txtArea.split(/\n/);
            arr = arr.map(el => '\'' + el + '\'' )
            navigator.clipboard.writeText(arr)
            settxtArea(arr);
        } else if(typeof txtArea == "object") {
            var arrs = txtArea.map(el => el.replaceAll("\"", "'") )
            settxtArea(arrs);
        }
    }

    const copied = event => {
        navigator.clipboard.writeText(txtArea)
    }

    const doublequotefront = event => {
        console.log(typeof txtArea);
        if(txtArea.includes('\n')) {
            var arr = txtArea.split(/\n/);
            arr = arr.map(el => '"' + el + '"' )
            navigator.clipboard.writeText(arr)
            settxtArea(arr);
        } else if(typeof txtArea == "object") {
            var arrsd = txtArea.map(el => el.replaceAll("'", "\"") )
            settxtArea(arrsd);
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className="my-4">Text Transformation</h3>
                    <FloatingLabel controlId="floatingTextarea2" label="" className="mt-2 float-right">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '400px' }}
                        className="textarea"
                        value={txtArea}
                        onChange={onchange_Event}
                        />
                    </FloatingLabel>
                    <div className="mt-3">
                        <Button variant="outline-primary" onClick={() => singlequotefront({ text: value })} >Place Single at both end with comma</Button>{' '}
                        <Button variant="outline-secondary" onClick={() => doublequotefront({ text: value })}>Place Double at both end with comma</Button>{' '}
                        <Button variant="outline-secondary" onClick={() => copied({ text: value })}>Copied</Button>{' '}
                        <Button variant="outline-info " onClick = {() => settxtArea('')}>Clear</Button>{' '}
                    </div>
                    <div className="mt-3 d-none">
                        <Button variant="outline-primary" onClick={() => speak({ text: value })} >Speech</Button>{' '}
                        <Button variant="outline-secondary" onClick={upper}>Text to Uppercase</Button>{' '}
                        <Button variant="outline-dark" onClick={lower}>Text to Lowercase</Button>{' '}
                        <Button variant="outline-info " onClick = {() => settxtArea('')}>Clear</Button>{' '}
                    </div>
                    <div className="d-none">
                        <h3 className="mt-3 text-muted">Summary of my text</h3>
                        <p className="text-muted">Words: {totalwords}, characters: {totalcharacters}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Input