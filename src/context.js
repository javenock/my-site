import React, { Component } from 'react'
import {PersonalData} from './data';

const PersonalDataContext = React.createContext();

 class PersonalDataProvider extends Component {
     state = {
         personalData : PersonalData,
 }
    render() {


        return (
            <PersonalDataContext.Provider value={
                {
                ...this.state
                }
            }>
                {this.props.children}
            </PersonalDataContext.Provider>
        );
    }
}

const PersonalDataConsumer = PersonalDataContext;

export {PersonalDataConsumer, PersonalDataProvider };