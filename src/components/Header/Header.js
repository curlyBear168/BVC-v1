import React from 'react';
import styled from "styled-components";
import { isMobile } from 'react-device-detect';

export const StyledLogoXSmall = styled.img`
  width: 25px;
  @media (min-width: 767px) {
    width: 25px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

const { ethereum } = window;
let login = window.localStorage.getItem('loginWallet');
const Header = () => {
    const this_State = {
        walletAddress: "",
        showWallet:""
    }
    const [state, setState] = React.useState(this_State);
    
    const handleClickOpen = () => {
        if (window.ethereum) {
            console.log(window.ethereum.isConnected())
            ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
                console.log("get wallet data " + JSON.stringify(accounts))
                setState({ ...state, walletAddress: accounts[0],
                                        showWallet:(accounts[0]).substr(-4) })
                //set local storage
                window.localStorage.setItem('loginWallet', accounts[0]);
                console.log("enter handleClickOpen ?", state.walletAddress)
               // alert(window.localStorage.getItem('loginWallet'))
            }).catch((err) => console.log(err))
        } else {
            handlingForNoMetaMask()
        }
        //console.log(state.walletAddress)
    };
    
    const handlingForNoMetaMask= ()=> {
        if (isMobile) {
            window.open('https://metamask.app.link/dapp/dev.zdna.io/')
        } else {
            window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn')
        }
    }
    const handleChangeWallet = () => {
        setState({ ...state, walletAddress: "" })
       // window.localStorage.setItem('user', 'userLogout');
      //`  window.location.reload();
       // router.push(dynamicConfig().domainPath)
     //  window.location.reload();
        window.localStorage.removeItem('loginWallet')
       console.log("enter handleChangeWallet ?", state.walletAddress)

    }
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                <div className="container header">
                    {/* Navbar Brand*/}
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-sticky" src="img/curlybearlogo.png" alt="sticky brand-logo" />
                    </a>
                    <div className="ml-auto" />
                    {/* Navbar */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Collection <i className="fas fa-angle-down ml-1" /></a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="/test_girl_URL" className="nav-link">Coming Soon</a></li>
                                <li className="nav-item"><a href="/testURL" target={"_blank"}className="nav-link">Coming Soon</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Activity <i className="fas fa-angle-down ml-1" /></a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="https://gleam.io/w1YyY/free-bored-valentines-club-nft-giveaway" className="nav-link"target={"_blank"}>FREE Bored Valentines NFT</a></li>
                            </ul>
                        </li>
                    </ul>
                    {/* Navbar Icons */}
                    <ul className="navbar-nav icons">
                        <li className="nav-item">
                        </li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0" />
                            </a>
                        </li>
                    </ul>
                    {/* Navbar Action Button */}
                    <ul className="navbar-nav action">
                        <li className="nav-item ml-3" ><a href="https://discord.gg/STByPkf2V2"  target={"_blank"}><StyledLogoXSmall src={"img/Discord.png"} /></a></li>
                        <li className="nav-item ml-3" ><a href="https://www.instagram.com/boredvalentinesclub_nft/" target={"_blank"}><StyledLogoXSmall src={"img/IG.png"} /></a></li>
                        <li className="nav-item ml-3" ><a href="https://twitter.com/BoredValentines"  target={"_blank"}><StyledLogoXSmall src={"img/Twitter.png"} /></a></li>
                        
                        {(state.walletAddress == "" || state.walletAddress == null) ?
                            <view >
                                <li className="nav-item ml-3">
                                     <a className="btn ml-lg-auto btn-bordered-white" style={{color:'#fff'}} onClick={handleClickOpen}><i className="icon-wallet mr-md-2" />Wallet Connect</a>
                                
                                
                                </li> 
                            </view > : 
                            <view > 
                                <li className="nav-item ml-3">
                                    <a className="btn ml-lg-auto btn-bordered-white" style={{color:'#fff'}} onClick={handleChangeWallet}><i className="icon-wallet mr-md-2" />...{state.showWallet}</a>
                                </li> 

                            </view>}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;