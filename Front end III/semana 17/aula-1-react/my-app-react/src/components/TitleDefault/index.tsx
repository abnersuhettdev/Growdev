import React from "react"

interface TitleDefaultProps {
    title: string

}

const TitleDefault:React.FC<TitleDefaultProps> = (props)=>{
    return <h1>{props.title}</h1>
}

export default TitleDefault