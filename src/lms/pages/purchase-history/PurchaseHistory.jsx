import React, { useState } from 'react';
import Pagination from '../../reusable/Pagination'
import Filter from '../../components/purchase-history/Filter';
import Listing from '../../components/purchase-history/Listing';
import { Helmet } from 'react-helmet';



const PurchaseHistory = () => {
    return (
        <>
            <Helmet>
                <title>Purchase History</title>
            </Helmet>
            <div className='container95'>
                <div>
                    <Filter />
                    <Listing />
                </div>
                <div className='py-10'>
                    <Pagination totalItems={100} />
                </div>
            </div>
        </>
    );
};

export default PurchaseHistory;
