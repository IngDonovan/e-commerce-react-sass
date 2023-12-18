import { useContext } from "react";
import { EcomContext } from "../../Context";
import Layout from "../../Components/Layout";
import "./SignIn.scss";

const SignIn = () => {
  const { 
    isCardFlipped,
    setIsCardFlipped,
    handleCardFlip,
    account,
  } = useContext(EcomContext);

  //Account
  const accountInLcl = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountInLcl);
  //Has ann account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const renderView = () => {
    if(hasUserAnAccount) {
      return (
        <section className="wrapper">
          <div className="card-switch">
            <div className={`switch ${isCardFlipped ? "flipped" : ""}`} >
              <input type="checkbox" className="toggle" />
              <span className="slider" onClick={handleCardFlip} ></span>
              <span className="card-side"></span>
              <article className="flip-card__inner">
                <div className="flip-card__front">
                  <h2>Login</h2>
                  <form className="flip-card__form" action="">
                      <input type="email" name="email" placeholder="Email" className="flip-card__input" />
                      <input type="password" name="password" placeholder="Password" className="flip-card__input" />
                      <button className="flip-card__btn" type="button">Let`s go!</button>
                  </form>
                </div>
                <div className="flip-card__back">
                  <h2>Sign Up</h2>
                  <form className="flip-card__form" action="">
                      <input type="name" name="name" placeholder="Name" className="flip-card__input" />
                      <input type="email" name="email" placeholder="Email" className="flip-card__input" />
                      <input type="password" name="password" placeholder="Password" className="flip-card__input" />
                      <button className="flip-card__btn" type="button">Confirm!</button>
                  </form>
                </div>
              </article>
            </div>
          </div>
        </section>
      );

      }
    else {
      return (
        <section className="wrapper">
          <div className="card-switch">
            
          </div>
        </section>
      );

    }
    }

    return (
      <Layout>
        <section className="wrapper">
          <div className="card-switch">
            <div className="switch" >
              <article className="flip-card__inner">
                <div className="flip-card__front">
                  <h2>Welcome</h2>
                  <form className="flip-card__form" action="">
                      <span className="flip-card__input flipSpan">lord</span>
                      <span className="flip-card__input flipSpan">lord@gm.com</span>
                      <button className="flip-card__btn btnOut" type="button">Sign out</button>
                  </form>
                </div>
              </article>
            </div>
          </div>
        </section>
      </Layout>
    );
};

export default SignIn;
