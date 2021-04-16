import React, {useState} from 'react';

export function ContadorHook(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Has hecho Click  desde hook {count} veces</p>
            <button onClick={() => setCount(count + 1)}>
            Haz click desde hook
            </button>
        </div>
    )
}

export default ContadorHook;