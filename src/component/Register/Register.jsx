import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="container mx-auto pexfont">
              <h2 className="text-center text-5xl hexfont mt-20 text-blue-700">Register</h2>
            <form className="flex flex-col gap-4 w-3/4 mx-auto">
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