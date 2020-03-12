import React from "react";
import ReactDOM from "react-dom";
import { useDencrypt } from "use-dencrypt-effect";

const values = ["3.14"];
const options = {
    chars: ["_"]
}

const Example = params => {

    let paramArray = [params.answer.toString()]

    const { result, dencrypt } = useDencrypt(options);

    React.useEffect(() => {
        let i = 0;

        const action = setInterval(() => {
            dencrypt(paramArray[i]);

            i = i === paramArray.length - 1 ? 0 : i + 1;
        }, 2250);

        return () => clearInterval(action);
    }, []);

    return <h1>{result.substring(0, 5)}</h1>;
};




export default Example;