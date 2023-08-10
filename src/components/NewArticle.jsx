import PropTypes from 'prop-types';
const NewArticle = ({ title, text }) => {
  return (
    <article className='h-[170px] border-b-2 border-GrayishBlue py-7 last:border-none'>
      <h2 className='cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold'>
        {title}s
      </h2>
      <p className='text-[15px]'>{text}</p>
    </article>
  );
};
NewArticle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};
export default NewArticle;
