import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

import Footer from '../components/Footer/Footer';
//import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import BVCHomeMint from '../components/BVCGuy/mintPageHome';
import Info from '../components/info/info'
import Roadmap from '../components/info/roadmap'
import { Provider } from "react-redux";
import RedexStore from'../redux/store_guy/store';
import { isAfter, isBefore } from 'date-fns'


class ThemeOne extends Component {
componentDidMount(){
    //this.user = window.localStorage.getItem('loginWallet');
    //console.log("componentDidMount = ??  ",this.user)

//day 
const todayDay = new Date();
const preSale = new Date(2022, 5, 13);
const publicSale = new Date(2022, 5, 14);
this.presale = isAfter(todayDay, preSale)
//this.publicSale = isAfter(todayDay, publicSale)

/*alert( this.presale )
    if(this.presale){
        this.setState({
            isPresale : true,
        })
    }
*/
//alert( this.presale )   
    
}
    render() {
        return (
            <div className="main">
                <Header />
                <Hero />
                
                {(this.presale = true) ?
                    <view ><Info/></view > :
                    <view >
                        <Provider store={RedexStore}>
                        <BVCHomeMint/>
                        </Provider>
                    </view>}
                <Roadmap/>
                <Footer />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ThemeOne;