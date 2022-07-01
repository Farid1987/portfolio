import './AnimatedLetters.style.scss';

interface AnimatedLettersProps {
  letterClass: string;
  strArray: Array<string>;
  idx: number;
}

const AnimatedLetters = (props: AnimatedLettersProps) => {
  const { letterClass, strArray, idx } = props;
  return (
    <span>
      {strArray.map((char, index) => (
        <span key={char + index} className={`${letterClass} _${index + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
