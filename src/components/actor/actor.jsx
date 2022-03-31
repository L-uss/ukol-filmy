import React from "react";

const Actor = ({name, as}) => {
    return (
        <div className="actor">
            <p><strong>{name}</strong> as {as}</p>
        </div>
    )
}

export default Actor;