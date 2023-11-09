import { Calendar,SimpleSnackbar } from '@/CustomComponents';
import Media from '../CustomComponents/MediaCard'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";


export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                        <Calendar/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
