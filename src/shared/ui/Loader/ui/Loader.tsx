import './Loader_module.scss';
export default function Loader() {
  return (
    <div className='loader'>
      <img className='loader__svg' src='Loading.svg' alt='' />
      <p>Идет загрузка...</p>
    </div>
  );
}
