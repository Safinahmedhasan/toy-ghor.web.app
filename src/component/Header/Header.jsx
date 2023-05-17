import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="container mx-auto">
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <img
                        src="https://i.ibb.co/n6bHc9v/logo.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="toy ghor"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold hexfont text-3xl text-blue-700 dark:text-white">
                        Toy Ghor
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Link to='/login'><Button>
                       Login
                    </Button></Link>
                    
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                    All Toys
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                    My Toys
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                    Add A Toy
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                    Blogs
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;