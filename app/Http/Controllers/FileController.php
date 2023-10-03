<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    //
    public function store(Request $r)
    {
        $id = $r->FileId;
        $message = [
            'result' => false,
            'message' => 'please contact admin'
        ];
        // update
        if (isset($r->$id)) {
            //diri ang update/edit na code
            $file = $r->Filename;
            $path = $r->FilePath;
            $folder = $r->FileFolder;
            $files =    [
                'FileId' => $id,
                'FileFolder' => $folder,
                'Filename' => $file,
                'FilePath' => $path,
                'FileDescription' =>  trim($r->FileDescription),
            ];
            $update = File::where('FileId', $r->$id)->update($files);
            if ($update) {
                $message['result'] = true;
                $message['message'] = 'Successfully updated.';
            } else {
                $message['message'] = 'Update failed.';
            }
            return json_encode($message);
        } else {
            // SAVE
            $file = $r->Filename;
            $path = $r->FilePath;
            $folder = $r->FileFolder;
            $fileInfo = [
                'Filename' => $file,
                'FileFolder' => $folder,
                'FilePath' => $path,
                'FileDescription' => trim($r->FileDescription),
            ];
            if (empty($r->Filename)) {
                return view('upload')->with('Error', 'File is required.');
            }
            if (empty($r->FileDescription)) {
                return view('upload')->with('Error', 'Description is required.');
            }
            // filteron ang fields for empty data
            $Filter = File::where('Filename', $r->Filename)
                ->where('FileFolder', $r->FileFolder)
                ->where('FilePath', $r->FilePath)
                ->where('FileDescription', $r->FileDescription)->first();

            if ($Filter) {
                return view('upload')->with('Error', 'File already exist.');
            } else {
                $save = File::insert($fileInfo);
                if ($save) {
                    return view('upload')->with('Success', 'Successfully save');
                } else {
                    return view('upload')->with('Error', 'Invalid');
                }
            }
        }
    }
}
