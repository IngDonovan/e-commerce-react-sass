import { useContext } from "react";
import Layout from "../../Components/Layout";
import './Home.scss';

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
        cards
      </section>
    </Layout>
  );
};

export default Home;
