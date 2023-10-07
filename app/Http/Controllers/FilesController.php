<?php

namespace App\Http\Controllers;

use App\Models\File;
use Inertia\Inertia;
use Illuminate\Http\Request;

class FilesController extends Controller
{
    //
    public function index(){
        return Inertia::render('dashboard',[
            'files'=>File::all(),
        ]);
        
    }

    public function store(Request $request)
    {
        // Get Data from Upload.jsx
        // $filegroup = $request->input('filegroup');
        // $filename = $request->input('filename');
        // $description = $request->input('description');
        // $location = $request->input('location');

        // $files = $request->only([$filegroup, $filename, $description, $location]);
        // $file = File::create($files);
        // // Diosplays after successful upload

        File::create($request->validate([
            'filegroup' => ['required', 'max:50'],
            'filename'  => ['required', 'max:50'],
            'description'  => ['required', 'max:100'],
            'location'  => ['required', 'max:100'],
        ]));
        return route('files.index');
    }
}
