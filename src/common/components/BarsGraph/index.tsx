import React from 'react';
import './index.css'

type BarsGraphProps = {
    indicators: { name: string, percent: string }[]
}

const BarsGraph: React.FC<BarsGraphProps> = ({ indicators }) => {
    return (
        <div className='flex gap-14 items-end'>
            {indicators.map((indicator, index) => (
                <div key={index} className='flex items-center flex-col gap-1' title={indicator.name}>
                    <div className='w-4 rounded-full bg-gradient-to-r from-[#90F7EC] to-[#32CCBC] bars cursor-pointer' style={{ '--bars': indicator.percent } as React.CSSProperties} />
                    <p className='text-sm font-medium'>{indicator.name}</p>
                </div>
            ))}

            {!indicators?.length && (
                <div>Ops!</div>
            )}
        </div>
    )
}

export default BarsGraph;
