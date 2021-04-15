import React from 'react'

export default function emojiItem(props) {
    return (
   
            <li style={{listStyle:"none",width:"200px",height:"200px",textAlign:"center",lineHeight:"200px",fontSize:"50px",backgroundColor:"white", boxShadow:"3px 5px 5px gray", margin:"10px",borderRadius:"25px"}}>{props.symbol}</li>
   
    )
}
