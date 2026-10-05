import React from 'react';
import AwsAccountLayout from '../layouts/AwsAccount';
import Descriptions from '../layouts/Descriptions';

const AwsAccount = () => {
    return (
        <div className='w-full mt-8 mr-12 ml-12'>
             <AwsAccountLayout/>
             <Descriptions/>
        </div>
    );
}

export default AwsAccount;
