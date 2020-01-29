import React, { Component } from 'react'
import {PersonalDataConsumer} from '../context';
import Personal from './Personal';

export default class Cv extends Component {
    render() {
        return (
            <PersonalDataConsumer>
              {value =>{
                  return value.personalData.map(personal =>{return <Personal personal={personal} />})
              }}
            </PersonalDataConsumer>
            
        )
    }
}
// <Personal />