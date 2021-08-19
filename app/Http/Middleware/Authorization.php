<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Authorization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param array $roles
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        foreach($roles as $role) {
            if(!$request->user()->{$role}()) {
                return \Res::error('Unauthorized!', null, 403);
            }
        }

        return $next($request);
    }
}
