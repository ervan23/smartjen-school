<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\{AuthService, SchoolService};
use App\Jobs\RegistrationMailJob;
use Validator;
use Hash;

class AuthController extends Controller
{

    /**
     * @var AuthService
     */
    private $authService;

    /**
     * @var SchoolService
     */
    private $schService;

    public function __construct(AuthService $authService, SchoolService $schService) {
        $this->authService = $authService;
        $this->schService = $schService;
    }

    public function signup(Request $req) {
        $validate = Validator::make($req->all(), [
            'name' => 'required|max:255',
            'school_name' => 'required|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|max:16'
        ]);

        if($validate->fails()) {
            return \Res::error($validate->errors()->first(), $validate->errors(), 400);
        }

        try {
            \DB::beginTransaction();
            // Register user via service
            $user = $this->authService->signup();

            // Craete school
            $school = $this->schService->create($user);

            //Dispatch mail queue
            $job = new RegistrationMailJob($user);
            $this->dispatch($job);

            \DB::commit();
            return \Res::success('Registered', $user);
        } catch(\Exception $e) {
            \DB::rollback();
            return \Res::error($e->getMessage(), null, $e->getCode());
        }
    }

    public function signin(Request $req) {
        $validate = Validator::make($req->all(), [
            'school_code' => 'required|max:15',
            'email' => 'required|email',
            'password' => 'required|min:8|max:16'
        ]);

        if($validate->fails()) {
            return \Res::error($validate->errors()->first(), $validate->errors(), 400);
        }

        try {
            $user = $this->authService->signin();
            $payload = [
                'user' => $user,
                'token' => $user->createToken('authToken')->accessToken
            ];

            return \Res::success('Signin', $payload);
        } catch(\Exception $e) {
            return \Res::error($e->getMessage(), null, $e->getCode());
        }
    }

    public function signout() {
        try {
            $this->authService->signout();

            return \Res::success('Signout', null);
        } catch(\Exception $e) {
            return \Res::error($e->getMessage(), null, $e->getCode());
        }
    }
}
