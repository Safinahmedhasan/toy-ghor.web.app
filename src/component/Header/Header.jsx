import { Button, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="container mx-auto">
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Link to='/'>
                    <Navbar.Brand>
                        <img
                            src="https://i.ibb.co/n6bHc9v/logo.png"
                            className="mr-3 h-6 sm:h-9"
                            alt="toy ghor"
                        />
                        <span className="self-center whitespace-nowrap font-semibold hexfont text-3xl text-blue-700 dark:text-white">
                            Toy Ghor
                        </span>
                    </Navbar.Brand>
                </Link>
                <div className="flex md:order-2">
                    {
                        user ?

                            <Dropdown label="profile">
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {user?.displayName}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {user.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item >
                                    Added Toy
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    My Toy
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <button onClick={handleLogOut}> Sign out</button>
                                </Dropdown.Item>
                            </Dropdown>


                            :
                            <Link to='/login'><Button>
                                Login
                            </Button></Link>
                    }

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link active={true}>
                        <Link to='/'><button> Home</button></Link>
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        All Toys
                    </Navbar.Link>
                    {
                        user && <div className="md:flex">
                            <div className="md:mr-5"><Navbar.Link href="/navbars">
                                My Toys
                            </Navbar.Link></div>
                            <Navbar.Link href="/navbars">
                                Add A Toy
                            </Navbar.Link>
                        </div>
                    }
                    <Navbar.Link href="/navbars">
                        Blogs
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;