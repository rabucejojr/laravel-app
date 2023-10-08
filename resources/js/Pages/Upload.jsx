import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
export default function Order({ auth }) {
    const [values, setValues] = useState({
        filegroup:"",
        filename: "",
        description: "",
        location: "",
    });
    function handleChange (e) {
        setValues({
            ...values,[e.target.name]: e.target.value});
        };
    function handleSubmit(e) {
        e.preventDefault();
        router.post('/store',values);
        // console.log('data passed')
        console.log(values);
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Order" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <div className="max-w-md mx-auto bg-white p-8 my-10 shadow-lg rounded-lg">
                            <h2 className="text-xl mb-4 font-semibold text-gray-800">
                                File Upload
                            </h2>
                            <form onSubmit={handleSubmit}>
                                {/* File Group Dropdown */}
                                <div className="flex">
                                    <div className="mb-4 w-full">
                                        <select
                                            className="border border-gray-300 p-2 w-full rounded"
                                            id="filegroup"
                                            name="filegroup"
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="SETUP">SETUP</option>
                                            <option value="GIA">GIA</option>
                                            <option value="Others">
                                                Others
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* Filename */}
                                <div className="mb-4">
                                    <input
                                        className="border border-gray-300 p-2 w-full rounded"
                                        type="text"
                                        id="filename"
                                        name="filename"
                                        placeholder="Filename"
                                        value={values.filename}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {/* File Description */}
                                <div className="mb-4">
                                    <input
                                        className="border border-gray-300 p-2 w-full rounded"
                                        type="text"
                                        id="description"
                                        name="description"
                                        value={values.description}
                                        placeholder="Description"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {/* File Location */}
                                <div className="mb-4">
                                    <input
                                        className="border border-gray-300 p-2 w-full rounded"
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={values.location}
                                        placeholder="Location"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {/* Upload Button */}
                                <div className="flex items-center justify-center">
                                    <div className="mt-1">
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
                                            type="submit"
                                        >
                                            Upload
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
