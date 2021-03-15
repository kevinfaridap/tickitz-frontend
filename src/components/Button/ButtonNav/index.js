import React from 'react'
import {Link} from 'react-router-dom'

function ButtonNav({value, className, type, to}) {
    return (
        <div>
           <Link className="nav-link" to={to}>
           <button type={type} className={className}>{value}</button>
            {/* <button type="button" className={['btn', Style['btn-nav']].join(' ')}>Sign Up</button> */}
          </Link>
        </div>
    )
}

export default ButtonNav
