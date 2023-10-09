import Contact from "@/Components/Contact";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Summary({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Contact Us" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <Contact/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
