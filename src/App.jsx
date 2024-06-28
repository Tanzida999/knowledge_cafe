import Header from './components/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);

  const  handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = (id, time) =>{
      setReadingTime(readingTime + time);
      //remove the mark as read from the bookmark
      // console.log('Remove bookmark',id)
      const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
      setBookmarks(remainingBookMarks);
  }


  return (
    <>
     <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs  handleAddToBookmark= {handleAddToBookmark} handleMarkAsRead ={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
    </div>      
      
    </>
  )
}

export default App
