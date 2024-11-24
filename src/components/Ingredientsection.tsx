import React from "react";
import { Typography } from "./typography";

const Ingredientsection = () => {
  return (
    <div className="mt-8 relative">
      <Typography fontSize="title" className="justify-center flex items-center">
        Ingredient
      </Typography>
      <div className=" ml-[218px] box-content flex flex-row gap-2">
        <div>
          <div className="flex flex-col  p-2">
            <img
              src="/backery/download (1).png"
              alt=""
              width={283}
              height={165}
              className="object-cover ml-4"
            />
            <Typography fontSize="heading2" className="p-4">
              Freshy Baking Powder
            </Typography>
            <Typography fontSize="description" className="p-4">
            Extracts and flavorings are used to add or <br />
             enhance the flavor of baked goods, beverages, and cooked dishes. <br />
             They can be used in place of or in addition <br />
              to other ingredients like fruits, <br />
              seeds, and aromatics. 
            </Typography>
          </div>
        </div>
        <div>
          <div className="flex flex-col  p-2">
            <Typography fontSize="heading2" className="p-2">
            Flour
            </Typography>
            <Typography fontSize="description" className="p-2">
            Flour is a powder made from grinding grains, roots, beans,
            <br />  nuts, or seeds. It's a key ingredient in many foods, <br />
             including bread, pasta, cakes, cookies, and tortillas
            </Typography>
            <img
              src="/backery/flour.jpeg"
              alt=""
              width={383}
              height={265}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredientsection;
