import React from "react";

export default function Title(props) {
    return (<>
        <h1 className="text-5xl mt-12 mx-8 capitalize">
            {props.title}
        </h1>
        <p className="mx-8 my-6">{props.description}</p>
    </>)
}