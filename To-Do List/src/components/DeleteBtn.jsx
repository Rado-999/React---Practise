function DeleteBtn({ id, onItemDelete }) {
  return (
    <button
      onClick={() => {
        onItemDelete(id);
      }}
    >
      Delete
    </button>
  );
}

export default DeleteBtn;
