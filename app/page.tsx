import s from "../components/CardBikeComponent.module.scss";
import CardBikeComponent from "../components/CardBikeComponent";

const Home = () => {
  return (
    <div className={s.container}>
      <h1>Home</h1>
      <CardBikeComponent id={1} />
      <CardBikeComponent id={2} />
    </div>
  );
};

export default Home;
