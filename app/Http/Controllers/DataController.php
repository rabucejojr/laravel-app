<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

class DataController extends Controller
{
    //
    public function getData()
    {
        $data = File::all();
        return response()->json($data, 200);
    }
    public function saveData(Request $req)
    {
        // Get Data from Upload.jsx
        // SAVE DATA TO MYSQL
        $files = new File();
        $files->filegroup = $req->input('filegroup');
        $files->filename = $req->input('filename');
        $files->description = $req->input('description');
        $files->location = $req->input('location');
        $files->save();
    }
}
