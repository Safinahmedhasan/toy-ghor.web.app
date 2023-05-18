import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {


    const { signIn , googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = async () =>{
        googleSignIn(googleSignIn)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            alert(' Great!! Successfully registration ❤️ Login now ')
        })
        .catch(error => {
            console.log(error);
        })
    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;



        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                alert('succes')
            })
            .catch(error => console.log(error)
            )
    }



    return (
        <div className="container mx-auto pexfont">
            <form onSubmit={handleLogin} className="flex flex-col gap-4 w-3/4 mx-auto">
                <h2 className="text-center text-5xl hexfont mt-20 text-blue-700">Login</h2>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <p>Not a member yet? <Link to='/register'><span className="text-blue-600 font-bold">Join now</span></Link></p>
                </div>
                <Button type="submit">
                    Login
                </Button>
                <Button  onClick={handleGoogleSignIn} className="bg-red-600" type="submit">
                    Google
                </Button>
            </form>
        </div>
    );
};

export default Login;