import { Link } from 'react-router-dom';
import '../styles.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1>Roy Parcero</h1>
          <h4>My Personal Website</h4>
        </div>

        {/* Navigation Bar */}
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/education" className="nav-link">Education</Link>
          <Link to="/hobbies" className="nav-link">Hobbies</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">{children}</main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Roy Parcero. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;