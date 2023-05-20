import useTitle from "../Hooks/UseTitle";


const Blogs = () => {
    useTitle("Blog")
    return (
        <div className="container mx-auto mt-10">
            <div className="bg-blue-300 p-5 rounded-lg">
                <h2 className="font-bold text-xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="mt-3">1. Access Token: An access token is a credential that represents the authorization granted to a client application to access protected resources on behalf of a user. It is a string of characters that typically contains information like the client ID, user ID, scope of access, and an expiration time. The access token is used by the client application to make authenticated requests to an API or server.</p>

                <p className="mt-2">2. Refresh Token: A refresh token is also a credential, but its purpose is different from an access token. It is used to obtain a new access token when the current one expires. Refresh tokens are long-lived and typically have a longer expiration period compared to access tokens. </p>
            </div>

            <div  className="bg-blue-300 p-5 rounded-lg mt-5">
                <h2 className="font-bold text-xl">Compare SQL and NoSQL databases?</h2>
                <p className="mt-3">1. SQL Databases: Data Integrity: SQL databases enforce strict data integrity rules through constraints, allowing for accurate data validation and consistency. Transactions: SQL databases support ACID transactions, ensuring that multiple operations are treated as a single, atomic unit of </p>
                <p className="mt-2">2. NoSQL Databases: Scalability: NoSQL databases are designed for distributed computing, allowing for seamless horizontal scalability by adding more servers to handle increasing data volumes. Flexibility: NoSQL databases offer schema flexibility, enabling easy adaptation to changing data requirements without the need for rigid schema modifications. </p>
            </div> 


            <div  className="bg-blue-300 p-5 rounded-lg mt-5">
                <h2 className="font-bold text-xl">What is express js? What is Nest JS?</h2>
                <p className="mt-3">Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible approach to building web applications and APIs. Express.js allows developers to create robust and scalable server-side applications using JavaScript. It provides a set of features and middleware that simplify tasks like routing, handling HTTP requests and responses, managing sessions, and integrating with databases.</p>
            </div>

            <div  className="bg-blue-300 p-5 rounded-lg mt-5">
                <h2 className="font-bold text-xl">What is MongoDB aggregate and how does it work ? </h2>
                <p className="mt-3">The $match stage in the aggregate method is used to filter and select documents that match certain conditions from a collection in MongoDB. It works similar to the find method but within the aggregation pipeline. It allows you to specify one or more conditions using query operators to narrow down the set of documents that will be processed in subsequent stages of the aggregation pipeline.</p>
            </div>
        </div>
    );
};

export default Blogs;