<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

class FilesController extends Controller
{
    //
    public function store(Request $request)
    {
        // Get Data from Upload.jsx
        $filegroup = $request->input('filegroup');
        $filename = $request->input('filename');
        $description = $request->input('description');
        $location = $request->input('location');

        $files = $request->only([$filegroup, $filename, $description, $location]);
        $file = File::create($files);
        // Diosplays after successful upload
        return response()->json(['message' => 'Form submitted successfully']);
    }
}
