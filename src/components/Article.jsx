import PropTypes from 'prop-types';

const Article = ({ img, numero, title, text }) => {
  return (
    <article className='flex h-[162px] md:w-[345px] md:flex-grow'>
      <div className='w-[100px] flex-none'>
        <img src={img} alt='' />
      </div>
      <div className='pl-6'>
        <p className='text-GrayishBlue text-3xl mb-[13px] font-bold'>
          {numero}
        </p>
        <h2 className='font-bold mb-[13px] hover:text-SoftOrange cursor-pointer'>
          {title}
        </h2>
        <p className='text-DarkGrayishBlue text-[16px] '> {text}</p>
      </div>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  img: PropTypes.string,
  numero: PropTypes.string,
};

export default Article;
