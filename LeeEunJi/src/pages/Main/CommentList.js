import Comment from "./Comment";

function CommentList(props) {
  const { commentArray } = props;
  return commentArray.map((comment) => {
    <li key={comment.id}>
      <Comment
        id={comment.id}
        content={comment.content}
        writer="익명"
        createdAt={comment.createdAt || "2022.01.01. 오후 12:00:00"}
      />
    </li>;
  });
}
