import React from "react";
import Card from "../card/Card";
import CardList from "../card/CardList";
import { URLSlug } from "../URL/URLSlug";



const ProjectList = () => {
  return (
      <CardList>
        {URLSlug.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.img}
            btnSecondary={true}
            to={item.to}
            href={item.href}
          ></Card>
        ))}
      </CardList>
  );
};

export default ProjectList;
