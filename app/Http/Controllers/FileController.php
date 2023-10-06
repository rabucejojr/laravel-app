<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FileController extends Controller
{
    // Save to DB
    public function store(Request $r)
    {
        return Inertia::render('Upload',[
            'files'=>$r->only(
                'FileId',
                'FileGroup', 
                'FileFolder',
                'FilePath',
                'FileDescription'
            ),

        ]);
    }
}
