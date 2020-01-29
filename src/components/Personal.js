import React, { Component } from 'react'
import {PersonaDataConsumer} from './Contacts';
import {Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';


export default class Personal extends Component {
    render() {

        const {id, title, name,box, tel, email, objective, qualifications,skills,experience,education} = this.props.personal;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-8 mx-auto col-sm-6 px-3 text-center">
                            <h2 className="font-weight-bold">{title}</h2>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-8 mx-auto col-sm-6 px-3 mt-3 ">
                           <AddressWrapper >
                            <h3 className="text-right text-font text-capitalize">{name}</h3>
                            <h3 className="text-right text-font text-capitalize">box :{box}</h3>
                            <h3 className="text-right text-font text-capitalize">tel :{tel}</h3>
                            <h3 className="text-right text-font text-capitalize">email :<em>{email}</em></h3>                            
                           </AddressWrapper>
                           <h3 className="text-title">objective</h3>
                           <p className="text-capitalize text-mute lead mb-3">{objective}</p>
                           <h3 className="text-title">qualifications</h3>
                           <p className="mb-3">{qualifications}</p>
                           <h3 className="text-capitalize text-title">skills</h3>
                           {skills.map(val=>{return (
                             <ul className="list-group">
                                 <li className="list-group-item py-0">{val}</li>
                             </ul>
                           )
                            })}
                            <h3 className="text-capitalize text-title mt-3">work History</h3>
                            {experience.map(exp=>{return (
                             <ul className="list-group">
                                 <li className="list-group-item py-0">{exp}</li>
                             </ul>
                           )
                            })}
                            <h3 className="text-capitalize text-title mt-3">education</h3>
                            <p className="text-capitalize">{education}</p>
                            <h3 className="text-capitalize text-title mt-3">referees</h3>

                        </div>  
                          
                        <div className="col-4 mx-auto col-sm-3 px-3 text-center">
                            <Link target='_blank' to="/cv-git">
                                <i className="fab fa-github" />
                                <p className="text-capitalize ml-2">github link</p>
                            </Link>
                        </div>                     
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const AddressWrapper = styled.div`
background : var(--cynac);
border-bottom : 3px solid;
padding-right : 0.3rem;
`;