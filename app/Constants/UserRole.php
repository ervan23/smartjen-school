<?php

namespace App\Constants;

final class UserRole {

    const ADMIN     = 0;
    const TEACHER   = 1;
    const STUDENT   = 2;

    const LIST      = [
        'admin',
        'teacher',
        'student'
    ];

    public static function getString(int $role) {
        return self::LIST[$role];
    }
}