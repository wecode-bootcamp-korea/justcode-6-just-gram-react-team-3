import Comment from "./comment";

function CommentList(props) {
  const { commentArray } = props;

  return commentArray.map((comment) => {
    return (
      <li key={comment.id}>
        <Comment
          id={comment.id}
          content={comment.content}
          writer={"익명"}
          createdAt={comment.createdAt || "2022-01-01"}
        />
      </li>
    );
  });
}

export default CommentList;
