import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);


    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password !== confirm){
            alert('Password Not Match!!');
            return
        }
        else if(password.length < 6){
            alert('Password is less than 6 characters!!');
            return
        }


        createUser(email, password, photo, name)
            .then(result => {
                const createUser = result.user;
                alert(' Great!! Successfully registration ❤️ Login now ')
                console.log(createUser);
            })
            .catch(error => {
                console.log(error);
                alert('Already Have an account! Login NOW')
            })
    }

    return (
        <div className="container mx-auto pexfont">
              <h2 className="text-center text-5xl hexfont mt-20 text-blue-700">Register</h2>
            <form onSubmit={handleRegister} className="flex flex-col gap-4 w-3/4 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="name"
                        name="name"
                        placeholder="Enter Your Name"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo"
                            value="Your photo"
                        />
                    </div>
                    <TextInput
                        id="photo"
                        type="photo"
                        name="photo"
                        placeholder="Enter Your URL"
                        required={true}
                        shadow={true}
                    />
                </div>
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
                        name="email"
                        placeholder="Enter Your Email"
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
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        id="repeat-password"
                        name="confirm"
                        placeholder="Enter Your Repeat Password"
                        type="password"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                <p>Already a member?<Link to='/login'> <span className="text-blue-600 font-bold">Login</span></Link></p>
                </div>
                <Button type="submit">
                    Register new account
                </Button>
                <Button className="bg-red-600" type="submit">
                    Google
                </Button>
            </form>
        </div>
    );
};

export default Register;