import { useContext, useState, useRef } from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
import { EcomContext } from "../../Context";
import Layout from "../../Components/Layout";
import "./SignIn.scss";

const SignIn = () => {
  const { 
    isCardFlipped,
    setIsCardFlipped,
    handleCardFlip,
    account,
    setAccount,
    setSignOut,
  } = useContext(EcomContext);
  const [view, setView] = useState('user-info');
  const form = useRef(null);

  //Account
  const accountInLcl = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountInLcl);
  //Has ann account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    setSignOut(false)
    // Redirect
    return <Navigate replace to={'/'} />
  }

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    }
    // Create account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    setAccount(data)
    // Sign In
    handleSignIn()
  }

  const renderLogIn = () => {
    return (
      <section className="wrapper">
        <div className="card-switch">
          <div className="switch" >
            <article className="flip-card__inner">
              <div className="flip-card__front">
                <h2>Welcome</h2>
                <form className="flip-card__form" action="">
                    
                    <span className="flip-card__input flipSpan">{parsedAccount?.name}</span>
                    
                    <span className="flip-card__input flipSpan">{parsedAccount?.email}</span>
                    
                    <span className="flip-card__input flipSpan">{parsedAccount?.password}</span>
                    <Link to="/">
                      <button className="flip-card__btn"
                      onClick={() => handleSignIn()}
                      disabled={!hasUserAnAccount}
                      type="button">Log in</button>
                    </Link>
                    <button className="flip-card__btn btnOut" 
                    onClick={() => setView('create-user-info')}
                    disabled={hasUserAnAccount}
                    type="button">Sign out</button>
                </form>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  };

  const renderCreateUserInfo = () => {
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
                <form ref={form} className="flip-card__form" action="">
                    <input type="email" name="email" placeholder="Email"
                    defaultValue={parsedAccount?.email}
                    className="flip-card__input" />
                    <input type="password" name="password" placeholder="Password"
                    defaultValue={parsedAccount?.password}
                    className="flip-card__input" />
                    <button className="flip-card__btn" type="button">Let`s go!</button>
                    <a href="/">Forgot my Password</a>
                </form>
              </div>
              <div className="flip-card__back">
                <h2>Sign Up</h2>
                <form ref={form} className="flip-card__form" action="">
                    <input type="name" name="name" placeholder="Name" className="flip-card__input" />
                    <input type="email" name="email" placeholder="Email" className="flip-card__input" />
                    <input type="password" name="password" placeholder="Password" className="flip-card__input" />
                    <NavLink to="/">
                      <button className="flip-card__btn" type="button"
                      onClick={() => createAnAccount()}
                      >Confirm!</button>
                    </NavLink>
                </form>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  };

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn();
  // const renderView2 = () => {
  //   if(!hasUserAnAccount) {
  //     return (
  //       <section className="wrapper">
  //         <div className="card-switch">
  //           <div className={`switch ${isCardFlipped ? "flipped" : ""}`} >
  //             <input type="checkbox" className="toggle" />
  //             <span className="slider" onClick={handleCardFlip} ></span>
  //             <span className="card-side"></span>
  //             <article className="flip-card__inner">
  //               <div className="flip-card__front">
  //                 <h2>Login</h2>
  //                 <form className="flip-card__form" action="">
  //                     <input type="email" name="email" placeholder="Email"
  //                     defaultValue={parsedAccount?.email}
  //                     className="flip-card__input" />
  //                     <input type="password" name="password" placeholder="Password"
  //                     defaultValue={parsedAccount?.password}
  //                     className="flip-card__input" />
  //                     <button className="flip-card__btn" type="button">Let`s go!</button>
  //                     <a href="/">Forgot my Password</a>
  //                 </form>
  //               </div>
  //               <div className="flip-card__back">
  //                 <h2>Sign Up</h2>
  //                 <form className="flip-card__form" action="">
  //                     <input type="name" name="name" placeholder="Name" className="flip-card__input" />
  //                     <input type="email" name="email" placeholder="Email" className="flip-card__input" />
  //                     <input type="password" name="password" placeholder="Password" className="flip-card__input" />
  //                     <button className="flip-card__btn" type="button"
  //                     onClick={createAnAccount}
  //                     >Confirm!</button>
  //                 </form>
  //               </div>
  //             </article>
  //           </div>
  //         </div>
  //       </section>
  //     );

  //     }
  //   else {
  //     return (
  //       <section className="wrapper">
  //         <div className="card-switch">
  //           <div className="switch" >
  //             <article className="flip-card__inner">
  //               <div className="flip-card__front">
  //                 <h2>Welcome</h2>
  //                 <form className="flip-card__form" action="">
  //                     <span className="flip-card__input flipSpan">{parsedAccount?.name}</span>
  //                     <span className="flip-card__input flipSpan">{parsedAccount?.email}</span>
  //                     <span className="flip-card__input flipSpan">{parsedAccount?.password}</span>
  //                     <button className="flip-card__btn btnOut" type="button">Sign out</button>
  //                 </form>
  //               </div>
  //             </article>
  //           </div>
  //         </div>
  //       </section>
  //     );

  //   }
  //   }


    return (
      <Layout>
        {renderView()}
      </Layout>
    );
};

export default SignIn;
