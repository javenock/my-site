import React, { Component } from 'react'
import TelPhone from "./TelPhone";
export default class Contacts extends Component {
    render() {
        return (
            <div>
                <TelPhone title="telephone" name="number" />
                <p className="text-title text-center">07-087-61-565</p>
            </div>
        )
    }
}
