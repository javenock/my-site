import React from 'react'

export default function Title({name, title}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center text-uppercase text-title py-5">
                     <h2>{name} <strong className="text-blue">{title}</strong>
                     </h2>
                </div>
            </div>
        </div>
    )
}
