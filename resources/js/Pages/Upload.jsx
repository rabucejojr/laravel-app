import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Order({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Order" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <div class="max-w-md mx-auto bg-white p-8 my-10 shadow-lg rounded-lg">
                            <h2 class="text-xl mb-4 font-semibold text-gray-800">
                                File Upload
                            </h2>
                            <form method="POST" action="{{ route('store') }}">
                                {/* File Group Dropdown */}
                                <div class="flex">
                                    <div class="mb-4 w-full">
                                        <select
                                            class="border border-gray-300 p-2 w-full rounded"
                                            id="filegroup"
                                            name="filegroup"
                                            required
                                        >
                                            <option value="product1">
                                                SETUP
                                            </option>
                                            <option value="product2">
                                                GIA
                                            </option>
                                            <option value="product5">
                                                Others
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* Filename */}
                                <div class="mb-4">
                                    <input
                                        class="border border-gray-300 p-2 w-full rounded"
                                        type="name"
                                        id="filename"
                                        name="filename"
                                        placeholder="Filename"
                                        required
                                    />
                                </div>
                                {/* File Description */}
                                <div class="mb-4">
                                    <input
                                        class="border border-gray-300 p-2 w-full rounded"
                                        type="name"
                                        id="description"
                                        name="description"
                                        placeholder="Description"
                                        required
                                    />
                                </div>
                                {/* File Location */}
                                <div class="mb-4">
                                    <input
                                        class="border border-gray-300 p-2 w-full rounded"
                                        type="name"
                                        id="location"
                                        name="location"
                                        placeholder="Location"
                                        required
                                    />
                                </div>
                                {/* Upload Button */}
                                <div class="flex items-center justify-center">
                                    <div class="mt-1">
                                        <button
                                            class="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
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
