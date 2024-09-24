import React from 'react';

const CustomOption = (props) => {
    const { innerRef, innerProps, data } = props;
    return (
        <div ref={innerRef} {...innerProps} className="flex gap-2 items-center px-2 py-1 cursor-pointer">
            <div className="option-label" style={{ fontWeight: 600 , color:"#00000080" }}>
                {data.label}
            </div>
            <div className="w-[15px] h-[15px] rounded-full " style={{ background: data?.color }}>
                {/* {data.description} */}
            </div>
        </div>
    );
};

export default CustomOption;
