import "./comment.scss";

function comment(props) {
  const { id, content, writer, createAt } = props;

  return (
    <span>
      {content} - {writer} <span className="createAt">{createAt}</span>
    </span>
  );
}

export default comment;
