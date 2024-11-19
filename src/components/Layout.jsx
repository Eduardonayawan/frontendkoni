import { Link } from 'react-router-dom';
import '../styles.css';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-secondary text-dark text-center py-4">
        <h1>My Personal Website</h1>
        <h4 className="smaller-h4">By: Eduardo Nayawan</h4>
        
        <nav>
            <Link to="/" className="btn btn-warning m-1">Home</Link>
            <Link to="/about" className="btn btn-warning m-1">About</Link>
            <Link to="/education" className="btn btn-warning m-1">Education</Link>
            <Link to="/hobbies" className="btn btn-warning m-1">Hobbies</Link>
            <Link to="/contact" className="btn btn-warning m-1">Contact</Link>
            <Link to="/picture" className="btn btn-warning m-1">Picture</Link>
          </nav>
      </header>

      <main className="flex-grow-1 container my-4">{children}</main>

      <footer className="bg-secondary text-dark text-center py-3 mt-4">
        <p>&copy; 2024 My Personal Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;