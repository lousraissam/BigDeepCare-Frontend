import React from 'react'

export const Search = props => {
    return(
        <div>
        <input type='search' placeholder='search monsters' onChange={props.handleChange} ></input>
        </div>
    )
}