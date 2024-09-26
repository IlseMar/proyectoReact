import "../styles/itemListContainer.scss";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1 className="description">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
