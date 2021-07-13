import React from "react"


const ContainerComponent = (props) => {
    return (
        <div className={`container ${props.className}`} style={{padding: 0, ...props.style}} onClick={props.onClick}>
            <div
                className={`container-component ${props.selected === true ? "selected" : ""} ${props.disabled ? "disabled" : ""}`}
                id={props.id}
                style={{minHeight: props.minHeight}}>
                <div className={"heading"}>{props.heading}</div>
                {props.children}
            </div>
        </div>
    )
}

export default ContainerComponent
