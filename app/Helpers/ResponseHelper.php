<?php

namespace App\Helpers;

class ResponseHelper {

    const LIST_CODE = [
        200, //Status Ok
        201, //Status Created
        400, //Client Error
        401, //Unauthorized
        403, //Forbidden
        404, //Not found
        405, //Method not allowed
        500, //Server error
    ];

    public static function success ($message, $payload, $meta = null, $code = 200) {
        return response()->json([
            'success'   => true,
            'code'      => $code,
            'message'   => $message,
            'payload'   => $payload,
            'meta'      => $meta
        ], $code, [], JSON_NUMERIC_CHECK);
    }

    public static function error ($message, $payload = null, $code = 500) {
        $code = static::setErrorCode($code);

        $msg = $code >= 500 ? env('APP_DEBUG', false) ? $message : 'Something went wrong' : $message;

        return response()->json([
            'success'   => false,
            'code'      => $code,
            'message'   => $msg,
            'payload'   => $payload
        ], $code);
    }

    public static function stream ($path, $headers = []) {
        return response()->file($path, $headers);
    }

    private static function setErrorCode ($code) {
        if (in_array($code, static::LIST_CODE)) {
            return $code;
        }

        return 500;
    }

}
