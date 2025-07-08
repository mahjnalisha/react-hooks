import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'


const useLayoutEffectComponent = () => {
    const [toggle, setToggle] = useState(false);
    const textRef = useRef()
    useLayoutEffect(() => {
        if (textRef.current != null) {
            const dimension = textRef.current.getBoundingClientRect();
            textRef.current.style.paddingTop = `${dimension.height}px`

        }

    }, [toggle])


    return (
        <div>
            <button onClick={() => setToggle('toggle')} >Toggle</button>
            {toggle && <h4>God Bless you</h4>}
        </div>
    )
}

export default useLayoutEffectComponent