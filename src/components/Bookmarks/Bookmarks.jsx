import PropTypes from 'prop-types';
import Bookmark from '../BookMark/Bookmark';

Bookmarks.propTypes = {
 bookmarks: PropTypes.array   
};

function Bookmarks({bookmarks, readingTime}) {
    return (
        <div className="md: w-1/3">
            <div>
                <h3 className="text-3xl">Reading Time:{readingTime}</h3>
            </div>
                <h2 className="text-3xl text-center bg-gray-300">Bookmarked Blog:{bookmarks.length}</h2> {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }           
        </div>
    );
}
Bookmarks.propTypes ={
    bookmark:PropTypes.array,
    readingTime: PropTypes.number
}


export default Bookmarks;