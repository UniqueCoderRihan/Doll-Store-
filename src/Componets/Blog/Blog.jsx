import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle('Blogs')
    return (

       <div className="my-2 ">
         <div tabIndex={0} className="bg-pink-100 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </div>
            <div className="collapse-content">
                <p>Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them</p>
            </div>
        </div>
        
        <div tabIndex={0} className="bg-pink-100 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
                What is express js? What is Nest JS            </div>
            <div className="collapse-content">
                <p>NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.</p>
            </div>
        </div>
        <div tabIndex={0} className="bg-pink-100 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
                Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content">
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
            </div>
        </div>
        <div tabIndex={0} className="bg-pink-100 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        What is MongoDB aggregate and how does it work
            </div>
            <div className="collapse-content">
                <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline</p>
            </div>
        </div>
       </div>

    );
};

export default Blog;