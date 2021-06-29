import './ConvertPage.css';
import React, { useState } from "react";

let convert = require('convert-units')



const units = [
    {key:"kg" ,value: "kg"},
    {key: "g" ,value: "g"},
    {key: "mg" ,value: "mg"},
    {key: "oz" ,value: "oz"},
    {key: "lb" ,value: "lb"},
    {key: "l" ,value: "l"},
    {key: "tsp" ,value: "tsp"},
    {key: "Tbs" ,value: "Tbs"},
    {key: "fl-oz" ,value: "fl-oz"},
    {key: "cup" ,value: "cup"},
    {key: "pnt" ,value: "pnt"},
    {key: "qt" ,value: "qt"},
    {key: "gal" ,value: "gal"},
]

const Converter = () => {
    console.log(convert(1).from('l').to('ml'))
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [convertVal, setConvertVal] = useState('');
    const [result, setResult] = useState('');

    


const handleConversion =  event => {
    event.preventDefault();
    try {
    if (convertVal && from && to){
        setResult(convert(convertVal).from(from).to(to))
    }
    }
    catch(err){
        console.log(err);
    }
}

    return (
        <div className="converter-container">
            <div className="from-and-to">

                <select className="convert-from" placeholder="from" value={from} onChange={(event)=> setFrom (event.target.value)}>
                <option value="">From</option>
                {units.map((unit)=>(
                    <option value={unit.value} key={"from"+unit.key}> {unit.key} </option>
                ))}
                </select>

                <select className="convert-to" placeholder="to" value={to} onChange={(event)=> setTo (event.target.value)}>
                <option value="">To</option>
                {units.map((unit)=>(
                    <option value={unit.value} key={"to"+unit.key}> {unit.key} </option>
                ))}
                </select>

            </div>

            <div className="init-value-and-submit-btn">

                <input className="convertVal" placeholder="initial value" onChange={(event)=> setConvertVal (event.target.value)} ></input>

                <button className="convert-btn" onClick={handleConversion}>convert!</button>

            </div>

            <div className="returned-value-container" placeholder="result" >
                <div className="returned-value">{result}</div>
            </div>
        </div>
    );
};

export default Converter;