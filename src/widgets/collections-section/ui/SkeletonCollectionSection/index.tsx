import ContentLoader from 'react-content-loader';

export default function SkeletonCollectionSection() {
  return (
    <ContentLoader
      speed={2}
      width={779}
      height='clamp(25rem, 16.0829rem + 39.6313vw, 51.875rem)'
      viewBox='0 0 779 830'
      backgroundColor='var(--black-50)'
      foregroundColor='var(--purple_400)'
    >
      <rect x='1' y='20' rx='16' ry='16' width='777' height='186' />
      <rect x='1' y='226' rx='16' ry='16' width='777' height='186' />
      <rect x='1' y='432' rx='16' ry='16' width='777' height='186' />
      <rect x='1' y='638' rx='16' ry='16' width='777' height='186' />
    </ContentLoader>
  );
}
