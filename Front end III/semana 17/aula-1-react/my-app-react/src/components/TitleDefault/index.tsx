import React from "react"
import Heading from "./styles"

interface TitleDefaultProps {
    title: string

}

const TitleDefault:React.FC<TitleDefaultProps> = (props)=>{
    return <Heading size="36px" color="red">{props.title}</Heading>
}

export default TitleDefault