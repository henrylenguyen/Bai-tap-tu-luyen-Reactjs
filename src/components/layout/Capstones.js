import React from "react";
import Card from "../card/Card";
import CardList from "../card/CardList";
import { URLCapstone } from "../URL/URLCapstone";


const Capstones = () => {
  return (
    <div>
      <h1 className="text-center text-white font-bold text-[4rem]">
        Bài tập capstone
      </h1>
      <CardList>
        {URLCapstone.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.img}
            btnSecondary={true}
            href={item.href}
            hrefOthers={item.hrefOthers}
          ></Card>
        ))}
      </CardList>
    </div>
  );
};

export default Capstones;
