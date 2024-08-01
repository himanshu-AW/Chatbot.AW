import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import { useAuth0 } from "@auth0/auth0-react";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  //for athuntication
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =useAuth0();

  //for event handling while pressed enter
      // const keyHandler = (e) => {
      //   if(e.key === "Enter") {
      //     setInput(e.target.value);
      //   }
      // };
      
    
  return (
    <div className="main">
      <div className="nav">
        <p className="logo">
          <span>Chatbot.Aw</span></p>
        <div className="nav-left">
          {isAuthenticated ? (<p onClick={() =>logout({ logoutParams: { returnTo: window.location.origin } })} >Log Out</p>) 
          : (<p onClick={() => loginWithRedirect()}>Log In</p>)}
          
          {isAuthenticated &&<p>Welcome {user.name}</p>}
          <div className="userImg">
            {isAuthenticated ? <img src={user.picture} alt="" /> : <img src={assets.user_icon} alt="" /> }
            
          </div>
        </div>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <div className="icon"><i className="fa-regular fa-compass fa-beat"></i></div>
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urbam planning.</p>
                <div className="icon"> <i className="fa-regular fa-lightbulb  fa-beat"></i></div>
              </div>
              <div className="card">
                <p>Brainstrom team bonding acticities for our work retreat.</p>
                <div className="icon"><i className="fa-regular fa-message fa-beat"></i></div>
              </div>
              <div className="card">
                <p>Imporve the readability of the folling code.</p>
                <div className="icon"><i className="fa-solid fa-code fa-beat"></i></div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <pre>{recentPrompt}</pre>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Friday.Ai may display inaccurate info, including about people, so
            double-click its responses. Your privacy and Friday.Ai App
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
