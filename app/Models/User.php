<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Constants\UserRole;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'school_id',
        'name',
        'email',
        'password',
        'role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'id' => 'string'
    ];

    protected $keyType = 'string';
    public $incrementing = false;

    /**
     * Only available when isAdmin method return true
     *
     * @return mixed
     */
    public function ownSchool() {
        return $this->hasOne(School::class, 'admin_id');
    }

    /**
     * Only available when isStudent/isTeacher method return true
     *
     * @return void
     */
    public function school() {
        return $this->belongsTo(School::class, 'school_id');
    }

    /**
     * Get user role
     *
     * @return boolean
     */
    public function isAdmin() {
        return $this->role == UserRole::ADMIN;
    }

    /**
     * Get user role
     *
     * @return boolean
     */
    public function isTeacher() {
        return $this->role == UserRole::TEACHER;
    }

    /**
     * Get user role
     *
     * @return boolean
     */
    public function isStudent() {
        return $this->role == UserRole::STUDENT;
    }

    /**
     * Scope for query by Role
     *
     * @param mixed $query
     * @param mixed $role
     * @return mixed
     */
    public function scopeByRole($query, $role = null) {
        $user = \Auth::user();

        if($user->isAdmin()) {
            return $query->where('school_id', $user->ownSchool->id);
        } else {
            return $query->whereNotIn('id', [$user->id])
            ->where('school_id', $user->school_id)
            ->where('role', $role ?? $user->role);
        }
    }
}
