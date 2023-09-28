import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Order({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Order" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        {/* <div class="flex justify-center items-center">
                            <form class="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 w-1/2">
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Username
                                    </label>
                                    <input
                                        class="border border-gray-300 p-2 w-full rounded"
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your username"
                                        required
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        class="border border-gray-300 p-2 w-full rounded"
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <div class="mb-4">
                                    <button
                                        class="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div> */}
                        <div class="max-w-md mx-auto bg-white p-8 my-10 shadow-lg rounded-lg">
                            <h2 class="text-xl mb-4 font-semibold text-gray-800">
                                Order Form
                            </h2>
                            <form>
                                <div class="flex">
                                    <div class="mb-4 w-full">
                                        <select
                                            class="border border-gray-300 p-2 w-full rounded"
                                            id="product"
                                            name="product"
                                            required
                                        >
                                            <option value="" disabled selected>
                                                Product Type
                                            </option>
                                            <option value="product1">
                                                Individual
                                            </option>
                                            <option value="product2">
                                                BFP
                                            </option>
                                            <option value="product3">
                                                BJMP
                                            </option>
                                            <option value="product4">
                                                PNP
                                            </option>
                                            <option value="product5">
                                                Others
                                            </option>
                                        </select>
                                    </div>
                                    <div class="mb-4 w-2/3 px-2">
                                        <input
                                            class="border border-gray-300 p-2 rounded"
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            placeholder="Enter quantity"
                                            min="1"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <input
                                        class="border border-gray-300 p-2 w-full rounded"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Lastname, Firstname, MI"
                                        required
                                    />
                                </div>
                                <div class="flex items-center justify-center">
                                    <div class="">
                                        <button
                                            class="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
                                            type="submit"
                                        >
                                            Order
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
