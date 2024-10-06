import { useState, useContext } from "react"
import BooksContext from "../context/books"

function BookEdit({ book, onSubmit }) {
    const { editBookById } = useContext(BooksContext)
    const [title, setTitle] = useState(book.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()       
        editBookById(book.id, title)
        onSubmit()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="book-edit">
                <label>Title</label>
                <input className="input" placeholder="new title" value={title} onChange={handleChange} />
                <button className="button is-primary">Save</button>
            </form>
        </div>
    )
}

export default BookEdit