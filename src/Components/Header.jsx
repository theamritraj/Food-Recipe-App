import '../styles/Header.css'

const Header = () => {
  return (
    <>
      <header className="header">
      <div className="logo-container">
        <h1 className="title">Recipe Finder & Meal Planner</h1>
      </div>
      
            
      
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/meal-planner">Meal Planner</a></li>
          <li><a href="/favorites">Favorites</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;


