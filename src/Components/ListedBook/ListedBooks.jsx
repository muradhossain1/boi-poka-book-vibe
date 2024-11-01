import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../utility/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();
    useEffect(() => {
        const storedReadList = getStoreReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))

        console.log(storedReadListInt, allBooks)

        const bookReadList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(bookReadList)

    }, [])
    return (
        <div>
            <h2 className='text-2xl my-8'>Listed Book</h2>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I read : {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My Wish listed</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;