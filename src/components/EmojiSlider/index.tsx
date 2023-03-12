// @ts-nocheck
import { useState, useEffect, useRef } from 'react';
import 'emoji-slider';

export default function EmojiSlider() {
  let [label, setLabel] = useState(0);
  const [rangeSliderEmoji, setRangeSliderEmoji] = useState('😡');
  const sliderRef = useRef(null);

  const handleSliderChange = (event) => {
    setLabel(Math.round(event.target.value * 100));
  };

  useEffect(() => {
    if (label < 20) {
      setRangeSliderEmoji('😡');
    } else if (label < 40) {
      setRangeSliderEmoji('😫');
    } else if (label < 60) {
      setRangeSliderEmoji('😐');
    } else if( label < 80) {
      setRangeSliderEmoji('🙂')
    }
     else {
      setRangeSliderEmoji('😀');
    }
  }, [label]);

  useEffect(() => {
    let localRef = null;
    if(sliderRef.current){
        localRef = sliderRef.current;
        localRef.addEventListener('change', handleSliderChange);
        return () => {
            localRef.removeEventListener('change', handleSliderChange);
        };
    }
  }, [sliderRef]);


  return (
    <>
      <emoji-slider
        ref={sliderRef}
        emoji={rangeSliderEmoji}
        value={label}
        className="styledSlider"
      />
    </>
  );
}