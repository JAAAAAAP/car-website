'use client';

import * as React from 'react';
import { DualRangeSlider } from '@/components/ui/shadcn/DualRangeSlider';
import { useState } from 'react';

const formatNumber = (value: number) => {
    if (value >= 1_000_000) return (value / 1_000_000).toFixed(2).replace(/\.00$/, '') + 'M';
    if (value >= 100_000) return (value / 1_000).toFixed(0) + 'K';
    if (value >= 10_000) return (value / 1_000).toFixed(1) + 'K';
    return value.toLocaleString(); // ถ้าน้อยกว่า 10,000 ให้แสดงเป็นตัวเลขปกติ
};

const SearchBar_dualrange = () => {
    const [values, setValues] = useState([0, 6000000]);

    return (
        <div className="w-full lg:w-52">
            <DualRangeSlider
                label={(value) => (
                    <span className='text-xs py-1 px-2 text-primary-600 bg-primary-100 rounded-md text-center'>
                        {formatNumber(value ?? 0)}
                    </span>
                )}
                value={values}
                onValueChange={setValues}
                min={0}
                max={6000000}
                step={10000}
            />
        </div>
    );
};
export default SearchBar_dualrange;
