import { useState, useContext } from "react"
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
    const { deleteBookById } = useContext(BooksContext)
    const [showEdit, setShowEdit] = useState(false)

    const handleClick = () => {
        deleteBookById(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if(showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

    return (
        <div className="book-show">
            <img 
                alt="books" 
                src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div>
                {content}
            </div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow