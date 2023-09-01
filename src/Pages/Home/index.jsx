import { useContext } from "react";
import { EcomContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
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
        items.map(item => (
          <Card key={item.id} data={item} />
        ))
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
      <ProductDetail />
    </Layout>
  );
};

export default Home;
