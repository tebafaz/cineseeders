import Link from 'next/link'

const Navbar = () => {
    return (
            <nav className="navbar fixed-top navbar-bg-color">
                <div className="container-fluid navbar-container">
                    <Link href="/" className="navbar-brand">
                        <img src="/logoxs.png" width="50" height="50" className="d-inline-block" alt="Tebafaz Logo"/>
                        Cineseeders
                    </Link>
                    <div className="mr-auto">
                        <Link className="navbar-item me-3 header-transition h6" href="/">
                            Home
                        </Link>
                        <Link className="navbar-item header-transition h6" href="/about">
                            About
                        </Link>
                    </div>
                </div>
            </nav>
    );
}
 
export default Navbar;