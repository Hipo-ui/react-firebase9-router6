import { forwardRef, useRef } from "react";

const InputText = forwardRef(({name, label}, inputFocus) => {
    return (
        <>  <label htmlFor={name}>{label}</label>
            <input type="text" ref={inputFocus} id={name} />
        </>
    );
});

const ExampleRef = () => {
    const inputFocus = useRef(null);

    const handleButtonClick = () => {
        console.log("me diste click");
        inputFocus.current.focus();
    };

    return (
        <>
            <InputText ref={inputFocus} name="nombre" label="Tu nombre" />
            <button onClick={handleButtonClick}>Click ref</button>
        </>
    );
};
export default ExampleRef;