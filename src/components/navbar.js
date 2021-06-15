import Link from 'next/link'

const Navbar = () => {
    return (
            <nav className="navbar fixed-top navbar-bg-color">
                <div className="container-fluid navbar-container">
                    <Link href="/">
                        <a className="navbar-brand">
                        <img src="/logoxs.png" width="50" height="50" className="d-inline-block" alt="Tebafaz Logo"/>
                        Tebafaz
                        </a>
                    </Link>
                    <div className="mr-auto">
                        <Link href="/">
                            <a className="navbar-item me-3 header-transition h6">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="navbar-item header-transition h6">About</a>
                        </Link>
                    </div>
                </div>
            </nav>
    );
}
 
export default Navbar;