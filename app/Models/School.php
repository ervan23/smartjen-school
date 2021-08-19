<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'code',
        'admin_id',
        'name'
    ];

    protected $casts = [
        'id' => 'string'
    ];

    protected $keyType = 'string';
    public $incrementing = false;

    public function admin() {
        return $this->hasOne(User::class, 'admin_id');
    }
}
