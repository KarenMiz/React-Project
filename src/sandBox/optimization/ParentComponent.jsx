import React, { useCallback, useMemo, useState } from 'react'
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    const [counter, setCounter] = useState(0);
    const user = useMemo(() => ({
        firstName: "karen",
        lastName: "Mizrahi",
    }), []
    );

    const PrintSomething = useCallback(() => {
        console.log("something");
    }, []);

    console.log("parent render");
    return (
        <div>
            <h4>{counter} kk</h4>
            <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
            <ChildComponent data={user} PrintSomething={PrintSomething} />
        </div>
    )
}
