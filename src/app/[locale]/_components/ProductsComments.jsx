import Comment from "./comments/Comment";

const ProductsComments = ({ comments }) => {
  return (
    <div className="row">
      {comments.map((comment, index) => (
        <div key={index} className="col-lg-6  col-12">
          <div className="rounded-4 border mb-4 p-4">
            <Comment key={comment.id} customer={comment} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsComments;
