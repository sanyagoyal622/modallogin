import React from 'react'

 const Button = (props) => {
     console.log(props)
    return (
        <div>
            <button style={{display:props.isButtonHidden}} onClick={()=>props.openModalBox(true)} >Login Here</button>
        </div>
    )
}
export default Button;