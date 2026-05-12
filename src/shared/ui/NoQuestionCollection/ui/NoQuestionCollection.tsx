import './NoQuestionCollection_module.scss';
export default function NoQuestionCollection() {
  return (
    <div className='no-collection'>
      <img
        src='/NoQuestionCollection.svg'
        alt='Пустой список вопросов для коллекции'
        loading='lazy'
      />
      <p className='no-collection__text'>Вопросы для данной коллекции скоро появятся.</p>
    </div>
  );
}
