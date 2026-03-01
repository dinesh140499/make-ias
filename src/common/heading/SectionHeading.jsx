import React from 'react';

const SectionHeading = ({ Icon, title, subTitle }) => {
    return (
        <>
            {(title || Icon) && (
                <div className="flex items-center gap-3">
                    {Icon && <Icon className="theme-text-red" />}
                    {title && (
                        <span className="theme-text-red uppercase font14 font-[500]">
                            {title}
                        </span>
                    )}
                </div>
            )}
            <h1 className="font22 font-[600] mt-1 capitalize">{subTitle}</h1>
        </>
    );
};

export default SectionHeading;
