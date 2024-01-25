import React from 'react'

export const Display = ({ name, age, number }: any) => {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{number}</p>
        </div>
    )
}

