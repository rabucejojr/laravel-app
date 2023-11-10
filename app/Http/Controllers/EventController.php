<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    //
    public function saveEvent(Request $req)
    {
        $message = 'Saved Successfully!';
        // Get Data from Upload.jsx
        // SAVE DATA TO MYSQL
        $files = new Event();
        $files->title = $req->input('title');
        $files->name = $req->input('name');
        $files->save();
        return response()->json(['message' => $message], 200);
        // return Inertia::render('SimpleSnackbar',['message'=>$message]);
        // return Redirect::route('summary')->with('message', $message);
    }
    public function deleteEvent($id)
    {
        // dd('here');
        $file = Event::where('id', $id)->delete();

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
