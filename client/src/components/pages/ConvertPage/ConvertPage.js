import React, { useState } from "react";

import './ConvertPage.css';

const Converter = () => {

    return (
        <div className="converter-container">
            
            <div className="converter-app-container">

                <div className="converter-app">

                    <div className="from-and-to">

                        <select className="convert-from" placeholder="from">
                            <option value="" disabled selected hidden>convert from</option>
                            <option value="cat">cat</option>
                            <option value="cat">cat</option>
                            <option value="cat">cat</option>
                        </select>

                        <select className="convert-to" placeholder="to">
                            <option value="" disabled selected hidden >convert to</option>
                            <option value="cat">cat</option>
                            <option value="cat">cat</option>
                            <option value="cat">cat</option>
                        </select>

                    </div>

                    <div className="init-value-and-submit-btn">

                        <input className="initial-value" placeholder="initial value"></input>

                        <button className="convert-btn">convert!</button>

                    </div>

                    <div className="returned-value-container" placeholder="result">
                        {/* <div className="returned-value">{converter.result}</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Converter;