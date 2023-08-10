import imgArticle from '../assets/images/image-retro-pcs.jpg';
import imgArticle2 from '../assets/images/image-top-laptops.jpg';
import imgArticle3 from '../assets/images/image-gaming-growth.jpg';

import Article from './Article';

const ArticleContainer = () => {
  return (
    <section className='mt-6 md:flex gap-8 md:flex-wrap'>
      <Article
        img={imgArticle}
        numero={'01'}
        title={'Reviving Retro PCs'}
        text={'What happens when old PCs are given modern upgrades?'}
      />
      <Article
        img={imgArticle2}
        numero={'01'}
        title={'Top 10 Laptops of 2022'}
        text={'Our best picks for various needs and budgets.'}
      />
      <Article
        img={imgArticle3}
        numero={'01'}
        title={'The Growth of Gaming'}
        text={'How the pandemic has sparked fresh opportunities.'}
      />
    </section>
  );
};

export default ArticleContainer;

/* 

  01
  Reviving Retro PCs
  What happens when old PCs are given modern upgrades?

  02
  Top 10 Laptops of 2022
  Our best picks for various needs and budgets.

  03
  The Growth of Gaming
  How the pandemic has sparked fresh opportunities. */
