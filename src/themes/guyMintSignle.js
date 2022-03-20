import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Explore from '../components/Explore/ExploreTwo';
import BVCGuyMintSignle from '../components/BVCGuy/mintPageSingle';

import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import { Provider } from "react-redux";
import RedexStore from'../redux/store';

class ExploreOne extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                    <Provider store={RedexStore}>
                    <BVCGuyMintSignle/>
                    </Provider>
                {/*<Explore />*/}
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ExploreOne;