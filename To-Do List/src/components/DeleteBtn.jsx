function DeleteBtn({ id, onItemDelete }) {
  return (
    <button
    className="delete-btn"
      onClick={() => {
        onItemDelete(id);
      }}
    >
      Delete
    </button>
  );
}

export default DeleteBtn;
