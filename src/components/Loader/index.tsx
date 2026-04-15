import './loader_module.scss';
interface LoaderProps {
  filter?: boolean;
}
export function Loader({ filter = false }: LoaderProps) {
  return (
    <div className='loader'>
      {!filter && <h3 className='loader-title'>Загрузка данных</h3>}
      <p className={`loader-description description-filter`}>Подождите, скоро все появится...</p>
    </div>
  );
}
