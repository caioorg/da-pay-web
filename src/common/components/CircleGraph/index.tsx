import React from 'react';
import './index.css';

type CircleGraphProps = {
  id: string
  width: string,
  height: string
  borderPixel: string,
  defaultColor: string,
  primaryColor: string,
  secondaryColor?: string
  percent: string
  content?: string
}

const CircleGraph: React.FC<CircleGraphProps> = ({ height, width, borderPixel, defaultColor, id, primaryColor, secondaryColor, percent, content }) => {
  return (
    <div className='relative'>
      <svg viewBox='0 0 232 232' className={`w-${width} h-${height} -rotate-90 circle-graph`} style={{ '--circle': percent, '--stroke': borderPixel } as React.CSSProperties}>
          <circle r='98.5' cx='50%' cy='50%' opacity='0.1' stroke={defaultColor} className={`fill-none`} />
          <circle r='98.5' cx='50%' cy='50%' stroke={`url(#${id})`} className={`fill-none`}  />
          <defs>
          <linearGradient id={id} x1='-9' y1='82' x2='145' y2='178' gradientUnits='userSpaceOnUse'>
              <stop stopColor={primaryColor} />
              <stop offset='1' stopColor={secondaryColor ? secondaryColor : primaryColor} />
          </linearGradient>
          </defs>
      </svg>
      <div className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 text-center'>
        <p className='text-4xl font-bold'>{percent}%</p>
        {content && <p>{content}</p>}
      </div>
    </div>
  )
}

export default CircleGraph;
