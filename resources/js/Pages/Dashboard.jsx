import Media from '../CustomComponents/MediaCard'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <h1>Dashboard</h1> */}
                        <div className="flex flex-row">
                            <div className="m-4">
                                <Media
                                    imageSource={"https://bit.ly/3s6bQ2I"}
                                    title={"PRISM Launching"}
                                    content={
                                        "Welcome to PRISM — the PRISM of possibilities!"
                                    }
                                />
                            </div>
                            <div className="m-4">
                                <Media
                                    imageSource={"https://bit.ly/45K85O8"}
                                    title={"TNA and GMP"}
                                    content={
                                        "Taganito Mining Corporation for the Adoption of Tubig Talino"
                                    }
                                />
                            </div>
                            <div className="m-4">
                                <Media
                                    imageSource={"https://bit.ly/3QFl93j"}
                                    title={"MOA Signing"}
                                    content={
                                        "Four business in SDN sign MOA with DOST for technology upgrading and enhanced productivity"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
