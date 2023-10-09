<?php

namespace App\Http\Controllers;

use App\Models\File;
use Inertia\Inertia;
use Illuminate\Http\Request;

class FilesController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('dashboard', [
            'files' => File::all(),
        ]);
    }

    public function store(Request $request)
    {
        // Get Data from Upload.jsx
        $filegroup = $request->filegroup;
        $filename = $request->filename;
        $description = $request->description;
        $location = $request->location;
        $fileInfo=[
            'Filegroup'=>$filegroup,
            'Filename'=>$filename,
            'Description'=>$description,
            'Location'=>$location,
        ];
        // dd($fileInfo);
        $save = File::insert($fileInfo);
        if ($save) {
            return inertia('Upload')->with('Success', 'Successfully save');
        } else {
            return inertia('Upload')->with('Error', 'Invalid');
        }
    }
}
