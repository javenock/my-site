import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
export default class Footer extends Component {
    render() {
        return (
            <div>                
                <FooterWrapper className="page-footer font-small pt-4 mb-0">
                    <div className="container">
                                <ul className="list-unstyled list-inline text-center">
                                <li className="list-inline-item">
                                    <Link to="https://web.facebook.com/bacho.lacho.50" className="btn-floating btn-fb mx-1">
                                     <i className="fab fa-facebook-f"> </i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="btn-floating btn-tw mx-1">
                                         <i className="fab fa-twitter"> </i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="btn-floating btn-gplus mx-1">
                                    <i className="fab fa-google-plus-g"> </i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="btn-floating btn-li mx-1">
                                    <i className="fab fa-linkedin-in"> </i>
                                    </Link>
                                </li>                                
                                </ul>
                            </div>
                            <div className="footer-lessblue">
                                © 2020 Copyright:
                                <a href="https://mdbootstrap.com/education/bootstrap/"> javenock.com</a>
                            </div>
  

                </FooterWrapper>


            </div>
        )
    }
}

const FooterWrapper = styled.div`
background : var(--lightBlue);
padding : 0.1rem;
text-align : center;
`;