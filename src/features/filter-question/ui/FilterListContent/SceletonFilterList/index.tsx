import ContentLoader from 'react-content-loader';

export default function SceletonFilterList() {
  return (
    <ContentLoader
      speed={2}
      width={295}
      height={184}
      viewBox='0 0 295 184'
      backgroundColor='var(--black-50)'
      foregroundColor='var(--purple_400)'
    >
      <rect x='3' y='3' rx='16' ry='16' width='106' height='40' />
      <rect x='114' y='3' rx='16' ry='16' width='95' height='40' />
      <rect x='3' y='51' rx='16' ry='16' width='63' height='40' />
      <rect x='221' y='3' rx='16' ry='16' width='60' height='40' />
      <rect x='3' y='99' rx='16' ry='16' width='94' height='40' />
      <rect x='105' y='99' rx='16' ry='16' width='141' height='40' />
      <rect x='73' y='51' rx='16' ry='16' width='76' height='40' />
      <rect x='155' y='51' rx='16' ry='16' width='94' height='40' />
      <rect x='4' y='144' rx='16' ry='16' width='58' height='40' />
      <rect x='67' y='144' rx='16' ry='16' width='104' height='40' />
      <rect x='176' y='144' rx='16' ry='16' width='113' height='40' />
    </ContentLoader>
  );
}
