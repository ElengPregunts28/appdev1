import { useState } from "react";

const ToggleButton = () => {
    const [isOn, setIson] = useState(false);

    return (
        <div>
            <h2>{isOn ? 'The Button is ON' : 'The Button is OFF'}</h2>
            <button onClick={() => setIson(!isOn)}>Toggle</button>
        </div>
    );
}

export default ToggleButton
