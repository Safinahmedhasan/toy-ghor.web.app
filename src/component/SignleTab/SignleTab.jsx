import { Card } from "flowbite-react";


const SignleTab = ({ta}) => {

    const {Rating, Seller, description, toyPhoto, toyName} = ta || {}

    return (
        <div>
            <div className="max-w-sm">
                <Card imgSrc={toyPhoto}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {toyName}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default SignleTab;