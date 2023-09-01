import { useContext } from "react";
import { EcomContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import './Home.scss';

const Home = () => {
  const { 
    items,
    setItems,
  } = useContext(EcomContext);

  // console.log(items);
  const renderView = () => {
    if (items?.length > 0) {
      return (
        <Card key={items[0].id} data={items[0]} />
      );
    } else {
      return <p>No Results Found</p>;
    }
  };

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
        {renderView()}
      </section>
    </Layout>
  );
};

export default Home;
