import React, { Component, useState } from 'react'

const Demo = ()=> {

    const [num,setNum]=useState('nothing');

return(
    <div>
        <select value={num} onChange={(event)=>{setNum(event.target.value)}}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
        <h1>You selected {num}</h1>
    </div>
)

}
export default Demo;