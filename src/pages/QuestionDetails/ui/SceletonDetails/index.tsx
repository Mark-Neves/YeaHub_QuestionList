import ContentLoader from 'react-content-loader';

export const SceletonDetails = () => {
  return (
    <ContentLoader
      speed={2}
      width={1180}
      height='clamp(11.25rem, 1.5035rem + 43.318vw, 40.625rem)'
      viewBox='0 0 1180 650'
      backgroundColor='var(--black-50)'
      foregroundColor='var(--purple_400)'
    >
      <rect x='840' y='10' rx='20' ry='20' width='343' height='273' />
      <rect x='11' y='10' rx='20' ry='20' width='817' height='208' />
      <rect x='7' y='230' rx='20' ry='20' width='817' height='80' />
      <rect x='6' y='319' rx='20' ry='20' width='817' height='325' />
    </ContentLoader>
  );
};
