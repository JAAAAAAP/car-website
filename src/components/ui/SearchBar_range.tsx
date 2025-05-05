'use client';

import * as React from 'react';
import { DualRangeSlider } from '@/components/ui/shadcn/DualRangeSlider';
import { useState } from 'react';

const SearchBar_range = () => {
    const [values, setValues] = useState([200]);

    return (
        <div className="w-full lg:w-52">
            <DualRangeSlider
                label={(value) => <span className='text-xs py-1 px-2 text-primary-600 bg-primary-100 rounded-md text-center'>{value}K</span>}
                value={values}
                onValueChange={setValues}
                min={0}
                max={200}
                step={1}
            />
        </div>
    );
};
export default SearchBar_range;
