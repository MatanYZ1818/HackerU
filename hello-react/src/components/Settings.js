import { useState } from "react";
import './Settings.css';

function Settings() {
    const [brightness, setBrightness] = useState(100);
    const [letterSpacing, letterChange] = useState(10);

    function changeBrightness(val) {
        setBrightness(val);
        document.querySelector('html').style.filter = `brightness(${val}%)`;
    }

    return (
        <>
            <div className="card">
                <Range 
                    title="בהירות"
                    value={brightness} 
                    min={10} 
                    max={100} 
                    change={val => changeBrightness(val)} /> 
                
                {/*
                <input type="range" min="10" max="100" value={brightness} onChange={ev => changeBrightness(ev.target.value)} />
                <input type="number" min="10" max="100" value={brightness} onChange={ev => changeBrightness(ev.target.value)} />
                */}
            </div>            <div className="card">
                <Range 
                    title="ריווח בין תווים"
                    value={brightness} 
                    min={10} 
                    max={100} 
                    change={val => changeBrightness(val)} /> 
            </div>

            <div className="card">
                
            </div>
        </>
    );
}

export default Settings;