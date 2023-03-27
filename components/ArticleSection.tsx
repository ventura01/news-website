import Image from "next/image";
import React from "react";

interface Articles {
  url: string;
  num: number;
  title: string;
  desc: string;
}

const articles: Articles[] = [
  {
    url: "/images/image-gaming-growth.jpg",
    num: 1,
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
  },
  {
    url: "/images/image-retro-pcs.jpg",
    num: 2,
    title: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets.",
  },
  {
    url: "/images/image-top-laptops.jpg",
    num: 3,
    title: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities.",
  },
];

const ArticleSection = () => {
  return (
    <section
      id="article"
      className="container mb-10 grid grid-cols-1 gap-5 px-3 md:px-0 md:mx-auto md:grid-cols-3 md:gap-8"
    >
      {articles.map((article) => (
        <div key={article.num} className="flex">
          <div>
            <Image
              src={article.url}
              alt={article.title}
              height={122}
              width={96}
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col pl-5">
            <h3 className="mb-1 text-2xl font-bold text-grayishBlue ">
              0{article.num}
            </h3>
            <h4 className="cursor-pointer text-base md:text-lg font-bold hover:text-softRed">
              {article.title}
            </h4>
            <p className="text-sm text-darkGrayishBlue">{article.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ArticleSection;
