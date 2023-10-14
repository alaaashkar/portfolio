import './index.scss';

type Props = {
  letterClass: string;
  strArray: string[]; // Specify the type of elements in the array
  idx: number;
};

export const AnimatedLetters: React.FC<Props> = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};
