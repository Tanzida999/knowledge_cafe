import PropTypes from 'prop-types';
import Bookmark from '../BookMark/Bookmark';

Bookmarks.propTypes = {
 bookmarks: PropTypes.array   
};

function Bookmarks({bookmarks}) {
    return (
        <div className="md: w-1/3">
                <h2 className="text-3xl text-center bg-gray-300">Bookmarked Blog:{bookmarks.length}</h2> {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }           
        </div>
    );
}

export default Bookmarks;