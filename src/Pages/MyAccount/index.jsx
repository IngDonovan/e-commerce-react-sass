import { useContext, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { EcomContext } from "../../Context";
import Layout from "../../Components/Layout";
import "./MyAccount.scss";

const MyAccount = () => {
  const { account, setAccount } = useContext(EcomContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null);
  //Account
  const accountInLcl = localStorage.getItem("account");
  const parsedAccount = JSON.parse(accountInLcl);

  const editAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    // Update account
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);
    setAccount(data);
  };

  const renderUserInfo = () => {
    return (
      <section className="wrapper">
        <div className="card-switch">
          <div className="switch">
            <article className="flip-card__inner">
              <div className="flip-card__front">
                <h2>My Account</h2>
                <form className="flip-card__form" action="">
                  <span className="flip-card__input flipSpan">
                    {parsedAccount?.name}
                  </span>
                  <span className="flip-card__input flipSpan">
                    {parsedAccount?.email}
                  </span>
                  <span className="flip-card__input flipSpan">
                    {parsedAccount?.password}
                  </span>
                  <button
                    className="flip-card__btn btnOut"
                    onClick={() => setView("edit-user-info")}
                    type="button"
                  >
                    Edit
                  </button>
                </form>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  };

  const renderEditUserInfo = () => {
    return(
    <section className="wrapper">
      <div className="card-switch">
        <div className="switch">
          <article className="flip-card__inner">
            <div className="flip-card__front">
              <h2>My Account</h2>
              <form ref={form} className="flip-card__form" action="">
                <input
                  type="name"
                  name="name"
                  defaultValue={parsedAccount.name}
                  placeholder="Name"
                  className="flip-card__input"
                />
                <input
                  type="email"
                  name="email"
                  defaultValue={parsedAccount.email}
                  placeholder="Email"
                  className="flip-card__input"
                />
                <input
                  type="password"
                  name="password"
                  defaultValue={parsedAccount.password}
                  placeholder="Password"
                  className="flip-card__input"
                />
                
                  <button
                    className="flip-card__btn"
                    type="button"
                    onClick={() => {setView('user-info'), editAccount()}}
                  >
                    Edit
                  </button>
                
              </form>
            </div>
          </article>
        </div>
      </div>
    </section>
    )
  };

  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo();

  return <Layout>{renderView()}</Layout>;
};

export default MyAccount;
