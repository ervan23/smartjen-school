<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Authenticate
{
    /**
     * Get the path the user should be block when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function handle(Request $request, Closure $next)
    {
        \Auth::shouldUse('api');

        if (!$request->user()) {
            return \Res::error('Unauthenticated!', $request->user(), 401);
        }

        return $next($request);
    }
}
