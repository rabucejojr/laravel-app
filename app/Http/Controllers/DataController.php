<?php

namespace App\Http\Controllers;

use App\Models\File;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function getData()
    {
        $data = File::all();

        // return response()->json($data, 200);

        // if ($data->count() > 0) {
        if ($data) {
            return response()->json([
                'status' => 200,
                'data' => $data
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No records found.'
            ], 404);
        }
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
        return response()->json(['message' => 'File saved successfully'], 200);
    }

    public function updateData(Request $req, $id)
    {
        $file = File::find($id); // Find the item by its ID
        if (!$file) {
            return response()->json(['message' => 'File not found'], 404);
        } else {
            $file->filegroup = $req->input('filegroup');
            $file->filename = $req->input('filename');
            $file->description = $req->input('description');
            $file->location = $req->input('location');
            $file->save();
        }
        return response()->json(['message' => 'File updated successfully'], 200);
    }

    public function deleteData($id)
    {
        // dd('here');
        $file = File::where('id', $id)->delete();

        // if ($file) {
        //     return response()->json(['message' => 'File deleted successfully!'], 200);
        // }

        // return response()->json(['message' => 'Delete File'], 200);

        if ($file) {
            // $file->delete();

            return response()->json([
                'status' => 200,
                'message' => 'File deleted successfully!'
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Nothing to delete.'
            ], 404);
        }
    }
}
