import Card from "./Card";
import "../../scss/Cards.scss";

export default function Cards({ ownerships }) {
  return (
    <div className="cardsGrid">
      {ownerships?.map((o) => (
        <Card
          key={o.id}
          images={o.images[0]}
          name={o.name}
          location={o.location}
          price={o.price}
          rooms={o.rooms}
          type={o.type}
          id={o.id}
        />
      ))}
    </div>
  );
}