import React from 'react'

const DisplayCard = (props) => {
    return (
        <div className={props.styleCard}>
            {props.children}
        </div>
    )
}

export default DisplayCard
