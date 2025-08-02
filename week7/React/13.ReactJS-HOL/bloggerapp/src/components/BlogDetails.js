function BlogDetails({ blogs }) {
  return (
    <div className="v1">
      <h1>Blog Details</h1>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          <strong>{blog.author}</strong>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
export default BlogDetails;
