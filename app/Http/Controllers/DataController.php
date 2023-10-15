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
        
    }
}
