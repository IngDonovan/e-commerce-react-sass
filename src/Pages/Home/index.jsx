import { useContext } from "react";
import Layout from "../../Components/Layout";
import './Home.scss';
import Card from "../../Components/Card";

const Home = () => {
  return (
    <Layout>
      <section className="searchSection">
        <div className="title">
            <h1>Products</h1>
        </div>
        <input className="search"
            type="text" 
            placeholder="Chaqueta"
            // onChange={(event) => setSearchByTitle(event.target.value)}
            />
      </section>
      <section className="cardsView">
        <Card />
      </section>
    </Layout>
  );
};

export default Home;
