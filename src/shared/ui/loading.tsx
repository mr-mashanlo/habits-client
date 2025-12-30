import { type FC } from 'react';

const Loading: FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white fixed top-0 left-0">
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-none animate-spin">
        <circle cx="256" cy="256" r="191" className="stroke stroke-[4rem] stroke-zinc-100"/>
        <path d="M123.003 393C87.2342 358.302 65 309.687 65 255.87C65 150.456 150.307 65 255.538 65C255.692 65 255.846 65.0002 256 65.0006" className="stroke stroke-[4rem] stroke-black" />
      </svg>
    </div>
  );
};

export default Loading;