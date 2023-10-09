<?php

namespace App\Http\Controllers;

use App\Models\File;
use Inertia\Inertia;
use Illuminate\Http\Request;

class FilesController extends Controller
{
    //
    // public function index()
    // {
    //     return Inertia::render('dashboard', [
    //         'files' => File::all(),
    //     ]);
    // }

    public function store(Request $request)
    {
        // Get Data from Upload.jsx
        // SAVE DATA TO MYSQL
        $files = new File();
        $files->filegroup = $request->input('filegroup');
        $files->filename = $request->input('filename');
        $files->description = $request->input('description');
        $files->location = $request->input('location');
        $files->save();

    }
}
