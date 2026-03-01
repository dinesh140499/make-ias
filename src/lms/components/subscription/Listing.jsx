import React, { useState } from 'react';
import { GoDownload } from "react-icons/go";
import Pagination from '../../reusable/Pagination';
import { FaArrowDown } from "react-icons/fa6";

const invoices = [
  {
    invoice: "Invoice #1023",
    billingDate: "May 15, 2022",
    status: "Paid",
    amount: "$9.99",
    plan: "Basic",
  },
  {
    invoice: "Invoice #1022",
    billingDate: "Nov 13, 2018",
    status: "Paid",
    amount: "$9.99",
    plan: "Basic",
  },
  {
    invoice: "Invoice #1019",
    billingDate: "Mar 9, 2013",
    status: "Paid",
    amount: "$9.99",
    plan: "Basic",
  },
  {
    invoice: "Invoice #1018",
    billingDate: "Nov 2, 2011",
    status: "Paid",
    amount: "$49.99",
    plan: "Enterprise",
  },
  {
    invoice: "Invoice #1020",
    billingDate: "Dec 20, 2009",
    status: "Paid",
    amount: "$9.99",
    plan: "Basic",
  },
  {
    invoice: "Invoice #1017",
    billingDate: "Nov 22, 2008",
    status: "Paid",
    amount: "$9.99",
    plan: "Basic",
  },
  {
    invoice: "Invoice #1021",
    billingDate: "Apr 16, 2007",
    status: "Cancelled",
    amount: "$19.99",
    plan: "Pro",
  },
];

const Listing = () => {
  

  const handleStatus = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return {
          bg: "bg-[#585858]",
          dot: "bg-[white]",
          text: "text-white"
        };
      case "cancelled":
        return {
          bg: "bg-[#A709090D]",
          dot: "bg-[#DB251B]",
          text: "text-[#DB251B]"
        };
      default:
        return {
          bg: "bg-gray-400",
          dot: "bg-white",
          text: "text-white"
        };
    }
  };

  return (
    <>
    <div className="border border-[#E9E7FD] rounded-md mt-5 py-3 px-3">
      <table width="100%" className='bg-[#F1F1F1] rounded-md'>
        <thead className='border-b border-[#E9E7FD]'>
          <tr>
            {["Invoice", "Billing Date", "Status", "Amount", "Plan"].map((title, index) => (
              <th key={index} className='first:w-1/5 text-left w-1/5 font16 capitalize first:pl-2'>
                <p className='py-3 text-black'>{title}</p>
              </th>
            ))}
            <th className='w-1/6'></th> {/* For Download Icon */}
          </tr>
        </thead>
      </table>

      <table width="100%" className='border border-t-0 border-[#E9E7FD] rounded-md'>
        <tbody>
          {invoices.map((item, i) => {
            const statusStyle = handleStatus(item.status);

            return (
              <tr key={i} className='border-b border-t-0 border-[#E9E7FD]'>
                <td className='px-2 py-5 w-1/5'><span className='font15'>{item.invoice}</span></td>
                <td className='px-2 py-5 w-1/5'><span className='capitalize font15'>{item.billingDate}</span></td>
                <td className='px-2 py-5 w-1/5'>
                  <div className={`flex items-center gap-2 w-fit px-2 py-1 rounded-full ${statusStyle.bg}`}>
                    <div className={`h-[10px] w-[10px] rounded-full ${statusStyle.dot}`}></div>
                    <span className={`capitalize font15 ${statusStyle.text}`}>{item.status}</span>
                  </div>
                </td>
                <td className='px-2 py-5 w-1/5'><span className='capitalize font15'>{item.amount}</span></td>
                <td className='px-2 py-5 w-1/5'><span className='font15'>{item.plan}</span></td>
                <td>
                  <a href="#" download className='capitalize font22 flex justify-center relative'>
                    <GoDownload
                      className='cursor-pointer border border-[#EDEDED] mr-2 text-[30px] p-1 text-[#DB251B]'
                    />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <div className='py-10'>
        <Pagination totalItems={100} />
      </div>
    </>
  );
};

export default Listing;
