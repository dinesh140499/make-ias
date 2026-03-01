import React from 'react';

const SectionHeadingMobile = ({ Icon, title, subTitle }) => {
    return (
        <>
            {(title || Icon) && (
                <div className="flex items-center gap-3 w-fit text-lg">
                    {Icon && <Icon className="theme-text-red" />}
                    {title && (
                        <span className="theme-text-red text-md uppercase  font-[500]">
                            {title}
                        </span>
                    )}
                </div>
            )}
            {subTitle &&
                <span className="text-md mt-1 capitalize inline text-lg font-medium">{subTitle}</span>
            }
        </>
    );
};

export default SectionHeadingMobile;
