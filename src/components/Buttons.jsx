import React from "react";

const Button = ({ value }) => {
    return <div>
            <button onClick={() => {alert("hey")}}>{value}</button>
        </div>
}

export default Button;