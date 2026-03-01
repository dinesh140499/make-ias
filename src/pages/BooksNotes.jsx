import React from 'react'
import PageBanner from '../common/Banners/PageBanner'
import banner from '../assets/images/book-notes/book.png'
import { FaRegAddressBook } from 'react-icons/fa'
import List from '../components/books/List'
import { Helmet } from 'react-helmet'
import BuyHardcopy from '../common/modals/BuyHardcopy'
import { useSelector } from 'react-redux'

const BooksNotes = () => {
  const { modal } = useSelector(state => state.booknotesSlice)
  return (
    <>
      <Helmet>
        <title>Books & Notes</title>
      </Helmet>
      <PageBanner title={"Explore Our Books & Notes"} subTitle={"Books"} bannerImg={banner} Icon={FaRegAddressBook} />
      <List />
      {modal &&
        <BuyHardcopy />
      }
    </>
  )
}

export default BooksNotes