import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/footer";

class Footer extends Component {
    state = {
        data: {},
        socialData: [],
        widgetData_1: [],
        widgetData_2: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    socialData: res.data.socialData,
                    widgetData_1: res.data.widgetData_1,
                    widgetData_2: res.data.widgetData_2
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <footer className="footer-area">

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                    {/* Copyright Left */}
                                    <div className="copyright-left" style={{color:"#ffffff"}}> <a href="testcurlybbsumsum">©</a>2022 CurlyBear</div>
                                    {/* Copyright Right */}
                                    <div className="copyright-right" style={{color:"#ffffff"}}>Made with <i  className="fas fa-heart" /> By <a href="#">Team CurlyBear</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;