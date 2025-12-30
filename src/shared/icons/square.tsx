import { type FC, type SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>

const SquareIcon: FC<Props> = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M19.7002 9C19.7002 6.40426 17.5957 4.2998 15 4.2998H9C6.40426 4.2998 4.2998 6.40426 4.2998 9V15C4.2998 17.5957 6.40426 19.7002 9 19.7002H15C17.5957 19.7002 19.7002 17.5957 19.7002 15V9ZM22.2998 15C22.2998 19.0317 19.0317 22.2998 15 22.2998H9C4.96832 22.2998 1.7002 19.0317 1.7002 15V9C1.7002 4.96832 4.96832 1.7002 9 1.7002H15C19.0317 1.7002 22.2998 4.96832 22.2998 9V15Z" />
    </svg>
  );
};

export default SquareIcon;