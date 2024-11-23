import { NavLink, Outlet } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className='navigation'>
            <header>
                <nav>
                    {/* NavLink is a special kind of <Link> that knows where or not it is "active" or "pending". This is useful when building a navigation menu. */}
                    <NavLink className='item' to='/'>Home</NavLink>
                    <NavLink className='item' to='transactions'>Transactions</NavLink>
                    <NavLink className='item' to='about'>About</NavLink>
                </nav>
            </header>
            {/* Outlet should be the parent route of elements to render their child route elements */}
            <Outlet />
        </div>
    );
}

export default Navigation;
