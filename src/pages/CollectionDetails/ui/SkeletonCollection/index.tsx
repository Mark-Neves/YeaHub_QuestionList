import ContentLoader from 'react-content-loader';

export default function SkeletonCollection() {
  return (
    <ContentLoader
      speed={2}
      width={1180}
      height={830}
      viewBox='0 0 1180 830'
      backgroundColor='var(--black-50)'
      foregroundColor='var(--purple_400)'
    >
      <rect x='1' y='0' rx='24' ry='24' width='817' height='202' />
      <rect x='836' y='0' rx='24' ry='24' width='343' height='374' />
      <rect x='1' y='213' rx='24' ry='24' width='817' height='590' />
    </ContentLoader>
  );
}
