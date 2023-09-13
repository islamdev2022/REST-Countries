import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./NotFound.css"
const NotFound = () => {
    return ( 
        <div className="Not-found">
        <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to={`/`}><p className="link">Go to Home Page</p></Link>
        </div>
     );
}
 
export default NotFound;