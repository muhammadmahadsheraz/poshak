import React from 'react';

const Title = ({ text1, text2 }) => {
    return (
        <div className="inline-flex gap-3 items-center mb-4">
            <p className="text-gray-400 uppercase tracking-wide text-sm">{text1}</p>
            <span className="text-gray-800 font-semibold text-lg">{text2}</span>
            <p className="w-10 sm:w-14 h-[2px] bg-gray-800"></p>
        </div>
    );
};

export default Title;