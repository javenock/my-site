import React from 'react'

export default function TelPhone({title,name}) {
    return (
        <div className="row">
        <div className="col-8 mx-auto col-sm-6 px-3 text-center">
            <h3 className="text-title ">{title}</h3><strong className="text-blue">{name}</strong>
            </div>
        </div>
    )
}
