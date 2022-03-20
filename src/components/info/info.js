import React, { Component } from 'react';
import styled from "styled-components";


export const StyledImgXsmall = styled.img`
  width: 50px;
  @media (min-width: 900px) {
    width: 50px;
  }
  @media (min-width: 1000px) {
    width: 50px;
  }
  transition: width 0.5s;
`;
const initData = {
    itemImg: "/img/BoredGif.gif",
    date: "2022-03-13",
    publicDate: "2022-03-14",
    tab_1: "Bids",
    tab_2: "History",
    tab_3: "Details",
    ownerImg: "/img/avatar_1.jpg",
    itemOwner: "Themeland",
    created: "15 Jul 2021",
    title: "Walking On Air",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    price_1: "1.5 ETH",
    price_2: "$500.89",
    count: "1 of 5",
    size: "14000 x 14000 px",
    volume: "64.1",
    highest_bid: "2.9 BNB",
    bid_count: "1 of 5",
    btnText: "Place a Bid"
}

const tabData_1 = [
    {
        id: "1",
        img: "/img/avatar_1.jpg",
        price: "14 ETH",
        time: "4 hours ago",
        author: "@arham"
    },
    {
        id: "2",
        img: "/img/avatar_2.jpg",
        price: "10 ETH",
        time: "8 hours ago",
        author: "@junaid"
    },
    {
        id: "3",
        img: "/img/avatar_3.jpg",
        price: "12 ETH",
        time: "3 hours ago",
        author: "@yasmin"
    }
]

const tabData_2 = [
    {
        id: "1",
        img: "/img/avatar_6.jpg",
        price: "32 ETH",
        time: "10 hours ago",
        author: "@hasan"
    },
    {
        id: "2",
        img: "/img/avatar_7.jpg",
        price: "24 ETH",
        time: "6 hours ago",
        author: "@artnox"
    },
    {
        id: "3",
        img: "/img/avatar_8.jpg",
        price: "29 ETH",
        time: "12 hours ago",
        author: "@meez"
    }
]

const sellerData = [
    {
        id: "1",
        img: "/img/avatar_1.jpg",
        seller: "@ArtNoxStudio",
        post: "Creator"
    },
    {
        id: "2",
        img: "/img/avatar_2.jpg",
        seller: "Virtual Worlds",
        post: "Collection"
    }
]

class ItemDetails extends Component {
    state = {
        initData: {},
        tabData_1: [],
        tabData_2: [],
        sellerData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            tabData_1: tabData_1,
            tabData_2: tabData_2,
            sellerData: sellerData
        })
 
    }

    
    render() {
        return (
            <section className="item-details-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="item-info">
                                <div className="item-thumb text-center">
                                    <img style={{ width: "300px",
                                    boxShadow:" 0px 5px 11px 2px rgba(0, 0, 0, 0.7)",
                                    border: "4px dashed var(--secondary)"

                                }}src={this.state.initData.itemImg} alt="" />
                                </div>

                            
                            </div>
                        </div>
 
                        <div className="col-12 col-lg-6">
                            {/* Content */}
                            <div className="content mt-5 mt-lg-0">
                                <h3 className="m-0" >Pre-Mint for Whitelist-ed<StyledImgXsmall src={'img/sum.png'}/></h3>
                                <div className="card no-hover countdown-times my-4" style={{ backgroundColor: "#db1143",}}>
                                    <h5 style={{textAlign:'center'}} >Coming soon</h5>
                                    <div className="countdown d-flex justify-content-center" data-date={this.state.initData.date} />
                                </div>


                                <h3 className="m-0">PUBLIC MINT<StyledImgXsmall src={'img/sum.png'}/></h3>

                                <div className="card no-hover countdown-times my-4">
                                <h5 style={{textAlign:'center'}}>Coming soon</h5>

                                    <div className="countdown d-flex justify-content-center" data-date={this.state.initData.publicDate} />
                                </div>                               


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ItemDetails;