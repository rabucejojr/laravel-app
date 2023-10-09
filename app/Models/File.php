<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'filegroup',
        'filename',
        'location',
        'description'
    ];
    protected $table = 'files';
    protected $primaryKey = 'id';
}
