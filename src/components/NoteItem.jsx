function NoteItem ({note, onDelete}) {
    return (
        <li>
            {note}
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}

export default NoteItem;