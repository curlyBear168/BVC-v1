import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as s from "../../styles/globalStyles";
import styled from "styled-components";
//import DateCountdown from 'react-date-countdown-timer';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 150px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledLogoLeft = styled.img`
  width: 200px;
  vertical-align: middle;
  @media (min-width: 767px) {
    width: 150px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;
export const StyledLogoXSmall = styled.img`
  width: 25px;
  @media (min-width: 767px) {
    width: 25px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;
export const StyledLogoSmall = styled.img`
  width: 30px;
  @media (min-width: 767px) {
    width: 30px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;
export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;
export const StyledImgXsmallHsq = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);

  background-color: var(--accent);
  border-radius: 10%;
  width: 150px;
  @media (max-width: 510px) {

    width: 250px;
  }
  @media (min-width: 810px) {
    width: 150px;
  }
  @media (min-width: 1000px) {
    box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
    border: 4px dashed var(--secondary);

    background-color: var(--accent);
    border-radius: 10%;
    width: 200px;
  }
  transition: width 0.5s;
`;


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
export const StyledImgHsq = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 10%;
  width: 250px;

  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledImgHsqLeft = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  background-color: var(--accent);
  border-radius: 10%;
  width: 250px;
  @media (max-width: 510px) {
    display: none;
  }
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;
export const StyledImgSq = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 5%;
  width: 100px;
  @media (min-width: 900px) {
    width: 150px;
  }
  @media (min-width: 1000px) {
    width: 200px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;


function App() {

  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });


  return (
    <s.Screen>

      <s.Container
        flex={2}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "#ffcfe1" }}
      >
        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
        <s.Container
            flex={2}
            jc={"center"}
            ai={"left"}

            style={{

              backgroundColor: "#f3cbda",
              padding: 24,
              borderRadius: 24,
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >     
          <s.TextTitle
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  color: "var(--accent-text)",
                }}
            >
          The Bored Valentines Club is a fixed set of 6,868 randomly generated unique 
          bored guy displaying how we guys view a relationship.
          </s.TextTitle>
          <s.SpacerXSmall/>
          <s.TextTitle
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  margin:0.8,
                  color: "var(--accent-text)",
                }}
            >
            Owning a Bored Valentine Guy grants you access to the BV Dating Club, 
            where you can meet other owners of the upcoming Bored Valentine Girls. 
            There will also be a Mating Room where you can create Bored Valentine Babies.
             Excited, yea?
            </s.TextTitle>
            <s.SpacerXSmall/>
            <s.TextTitle
                style={{
                  textAlign: "left",
                  fontSize: 18,
                 
                  color: "var(--accent-text)",
                }}
            >
            You could buy this NFT as a Valentine's Gift to your virtual partner, 
            or as a display of Bored status on socials. 2% of the earnings will 
            be donated to "The Charity for Male traumatized from a Relationship".
             Or just flip it, bruh.
            </s.TextTitle>

          </s.Container>
          <s.SpacerLarge />  

          <s.Container
           flex={0.5} jc={"center"} ai={"center"}
          >
            <s.SpacerXSmall/>
            <StyledImgXsmallHsq alt={"example"} src={"img/display4.png"}/>
            <s.SpacerXSmall/>

            <StyledImgXsmallHsq alt={"example"} src={"img/display2.png"}/>
            <s.SpacerXSmall/>

          </s.Container>
          <s.Container
           flex={0.5} jc={"center"} ai={"center"}
          >
          <s.SpacerXSmall/>

            <StyledImgXsmallHsq alt={"example"} src={"img/display3.png"}/>
            <s.SpacerXSmall/>

            <StyledImgXsmallHsq alt={"example"} src={"img/display1.png"}/>
            <s.SpacerXSmall/>

              </s.Container>


        </ResponsiveWrapper>
        
        <s.SpacerLarge/>
        
        <ResponsiveWrapper>
        <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImgHsqLeft alt={"example"} src={"img/281.png"}/>
            {/* style={{ transform: "scaleX(-1)" }} */}
          </s.Container>
                <s.Container
                  flex={2}
                  jc={"center"}
                  ai={"center"}
                  style={{
                    width:"95%",
                    backgroundColor: "#f3cbda",
                    padding: 24,
                    borderRadius: 24,
                    boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
                  }}
                >
                  <StyledImgXsmall src={'img/sum.png'}/>
                  <s.TextTitle
                      style={{
                        textAlign: "center",
                        fontSize: 40,
                        fontWeight: "bold",
                        color: "var(--accent-text)",
                      }}
                    >
                      Roadmap
                    </s.TextTitle>
                    <div  class="row ">
                  <div className="table-responsive"  style={{   color: "var(--accent-text)"  }}>
                  <table class="table-sm">

                    <tbody>
                        <tr>
                        <td>Feb 9, 2022</td>                        
                        <td>Register open for Free NFT</td>

                        </tr>
                        <tr>
                        <td>Q1, 2022</td>
                        <td>Pre-Mint for Whitelist-ed</td>

                        </tr>
                        <tr>
                        <td>Q1, 2022</td>
                        <td>PUBLIC MINT</td>
                        </tr>
                        <tr>
                        <td>Q3 2022</td>
                        <td>Launch of the BV Dating Club</td>
                        </tr>
                        <tr>
                        <td>Q1 2023</td>
                        <td>Launch of the Mating Room</td>
                        </tr>


                    </tbody>
                    </table>
                    </div>
                    </div>
                    <StyledImgXsmall src={'img/sum.png'}/>
                </s.Container>   
        </ResponsiveWrapper>




        <s.SpacerSmall />        
        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>    
        <s.Container
            flex={2}
            jc={"center"}
            ai={"left"}
            
            style={{
              width:"100%",
              backgroundColor: "#f3cbda",
              padding: 24,
              borderRadius: 24,
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >        
          <s.TextTitle
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "var(--accent-text)",
                }}
            >
            What is BV Dating Club?
            </s.TextTitle>  
            <s.SpacerXXSmall/>
            <s.TextTitle
              style={{
                margin:1.8,
                textAlign: "left",
                fontSize: 15,
                color: "var(--accent-text)",
              }}
            >
 BV Dating Club is essentially a blockchain-based social dating community that offers key elements missing from current dating app, like trust, transparency, data security and fraud protection against nefarious actors, or ‘catfishes.
             
            </s.TextTitle>  
           <s.SpacerXXSmall/>
            <s.TextTitle
              style={{

                textAlign: "left",
                fontSize: 15,
                color: "var(--accent-text)",
              }}
            >
              By owning a Bored Valentines Club NFT, you gain accesss to the Dating Club community where you can meet other like-minded Valentines. NFT owner will also be airdropped a Bored Valentine Girl NFT in the future.
            </s.TextTitle>  
        </s.Container>
        <s.SpacerLarge />
        <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImgHsq alt={"example"} src={"img/Teaser.png"}/>
            {/* style={{ transform: "scaleX(-1)" }} */}
          </s.Container>

        </ResponsiveWrapper>

        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>    
        <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            
            style={{
              width:"100%",
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 24,
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
              display:"inline",
              margin: "0 auto",

            }}
          >   
          <s.TextTitle
              jc={"center"} ai={"center"} 
              style={{
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >

            <StyledImgSq
              alt={"example"}
              src={"img/christina.png"}
            />
          <s.TextTitle
                style={{
                textAlign: "left",
                fontSize: 12,
                color: "var(--accent-text)",
              }}
            >
 Christina, the Tech Lead of the project, an experienced full stack developer, and is in love with blockchain in recent years. She loves drawing, meditating & reading in her spare time.             
           </s.TextTitle>            
            </s.TextTitle>  
        </s.Container>  
        <s.SpacerXSmall/>
        <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            
            style={{
              width:"100%",
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 24,
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
              display:"inline",
              margin: "0 auto",

            }}
          >   
          <s.TextTitle
              jc={"center"} ai={"center"} 
              style={{
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >

            <StyledImgSq
              alt={"example"}
              src={"img/jack.png"}
            />
          <s.TextTitle
                style={{
                textAlign: "left",
                fontSize: 12,
                color: "var(--accent-text)",
              }}
            >
Jake, the Project Manager of Bored Valentines Club, has over 10 years of experience in game development and project management.          </s.TextTitle>            
            </s.TextTitle>  
        </s.Container> 
        <s.SpacerXSmall/>          
        <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            
            style={{
              width:"100%",
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 24,
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
              display:"inline",
              margin: "0 auto",

            }}
          >   
          <s.TextTitle
              jc={"center"} ai={"center"} 
              style={{
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >

            <StyledImgSq
              alt={"example"}
              src={"img/sophia.png"}
            />
          <s.TextTitle
                style={{
                textAlign: "left",
                fontSize: 12,
                color: "var(--accent-text)",
              }}
            >
Sophia, the Community Manager, loves speaking with people, she will be your helping hand.               </s.TextTitle>            
            </s.TextTitle>  
        </s.Container>  
        <s.SpacerXSmall/>
        <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            
            style={{
              width:"100%",
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 24,
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
              display:"inline",
              margin: "0 auto",

            }}
          >   
        
          <s.TextTitle
              jc={"center"} ai={"center"} 
              style={{
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >

            <StyledImgSq
              alt={"example"}
              src={"img/lex.png"}
            />

          <s.TextTitle
                style={{
                textAlign: "left",
                fontSize: 12,
                color: "var(--accent-text)",
              }}
            >
Lex, the Utility Manager, will be managing the utility of the NFT, like the BV Dating Club & the Mating Room.
              </s.TextTitle>
            </s.TextTitle>  
        </s.Container>  
        </ResponsiveWrapper>

      </s.Container>
      
    </s.Screen>

    
  );
}

export default App;
