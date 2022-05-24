import { Suspense } from "react";
import Loader from "react-loaders";
import "./animatedLetters.scss";
/**
 *
 * @param {class name} param00
  * className='text-animate' /=>starting class
 * className= 'text-animate-hover' /=> chenged to this class after x seconds
 *    useEffect(() => {
     setTimeout(() => {
       setletterClass('text-animate-hover');
     }, 3000);
   });
 * @param {arrey of letters} param01
 * @param {duretion number} param02
 * @returns
 * 

 */
const AnimatedLetters = ({ letterClass, lettersArrey, idx }) => {
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <span>
        {lettersArrey.map((letter, i) => {
          return (
            <span key={letter + i} className={`${letterClass} _${i + idx}`}>
              {letter}
            </span>
          );
        })}
      </span>
    </Suspense>
  );
};

export default AnimatedLetters;
