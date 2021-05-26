// import React, { useState } from 'react'
import React from 'react'
import style from './input.module.css'

function Input({value, name, type, placeholder, label, onChange}) {

    // const [ticketMovie, setTicketMovie] = useState('')
    // const [ticketCategory, setTicketCategory] = useState('')

    return (
        <div>
            <label className={style['label']} htmlFor={name}>{label} </label>
            <input value={value} name={name} type={type} id={name} placeholder={placeholder} className={style['form-control']} onChange={(e)=>onChange(e)} />
        </div>
    )
}

export default Input







// import React, { Component } from 'react'
// import style from './input.module.css' 

// export class Input extends Component {
//     render(type, placeholder, name, value) {
//         return (
//             <div>
//                  {/* <input type="email" className={style['form-control']} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write your email" /> */}
//                  <input value={value} name={name} type={type} id={name} placeholder={placeholder} className={style['form-control']} />
//             </div>
//         )
//     }
// }

// export default Input
