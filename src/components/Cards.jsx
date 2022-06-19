import React from 'react'
import {Card } from '@mui/material'

const Cards = (props) => {
    return(
        <div>
             {props.monsters.map(monster => (
             <Card key={monster.id} > {monster.name}</Card>
      ))}
        </div>
    )

    }

export default Cards;