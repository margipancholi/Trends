import React from "react";
import { Outlet, Link } from "react-router-dom";
export const products = [
  {
    id: 1,
    name: "Jackson Villa",
    href: "#",
    price: "$20056",
    description:
      "Jackson Villa Blue Pearl with Swimming Pool",
    options: "days , week and month",
    imageSrc:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    imageAlt:
      "Jackson villa",
  },
  {
    id: 2,
    name: "Elisn",
    href: "#",
    price: "$20100",
    description:
      "Open environment concept with garden view",
    options: "days , week and month",
    imageSrc:
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Elisn",
  },
  {
    id: 3,
    name: "Orcio",
    href: "#",
    price: "$20206",
    description:
      "Open environment with street view",
    options: "days , week and month",
    imageSrc:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt:
      "Orcio",
  },
  {
    id: 4,
    name: "Felice",
    href: "#",
    price: "$30020",
    description:
      "Grand villa that has huge swimming pool with clear sky view",
    options: "days , week and month",
    imageSrc:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "villa",
  },
  {
    id: 5,
    name: "Pratello",
    href: "#",
    price: "$18056",
    description:
      "Single flat open house in the middle of a forest",
    options: "days , week and month",
    imageSrc:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt:
      "villa",
  },
  {
    id: 6,
    name: "Ottopini",
    href: "#",
    price: "$10202",
    description:
      "Enjoy the fresh sunlight with the world's rarest natural views ",
    options: "days , week and month",
    imageSrc:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "House",
  },
  {
    id: 7,
    name: "Merelli",
    href: "#",
    price: "$16256",
    description:
      "Merelli farmhouse surrounded by an olive grove and expanses of golden wheat ",
    options: "days , week and month",
    imageSrc:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    imageAlt:
      "House",
  },
  {
    id: 8,
    name: "Pinella",
    href: "#",
    price: "$19932",
    description:
      "Pinella covers about 30 hectares divided between the olive grove and a thick wooded area composed of oaks and holm oaks and dotted with footpaths",
    options: "days , week and month",
    imageSrc:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "House",
  },
 
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <Link to={`product/${product.id}`}>
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">
                      {product.options}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
