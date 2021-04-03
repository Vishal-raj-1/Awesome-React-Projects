import React from "react";

const Avatarlist = (props) => {
    return (
        <div className="Avatar-component">
                <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"/>
                <h1>{props.name}</h1>
                <h4>{props.work}</h4>
        </div>
    )
}

export default Avatarlist;