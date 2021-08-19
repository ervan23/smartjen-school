<?php
namespace App\Services;

use Auth;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Validator;
use Hash;

class AuthService {

    /**
     * @var UserRepository
     */
    private $userRepo;

    /**
     * Request variable
     *
     * @var Request
     */
    private $req;

    public function __construct(Request $req, UserRepository $userRepo) {
        $this->userRepo = $userRepo;
        $this->req = $req;
    }

    /**
     * Signin service
     *
     * @param array $credential
     * @return void
     */
    public function signin() {
        $credential = $this->req->only('email', 'password');

        if(!Auth::attempt($credential)) {
            throw new \Exception('Email or password incorrect', 401);
        }

        // Get user object
        $user = Auth::user();
        $school = null;

        if($user->isAdmin()) {
            $school = $user->ownSchool()->where('code', $this->req->school_code)->first();
        } else {
            $school = $user->school()->where('code', $this->req->school_code)->first();
        }

        if(!$school) {
            throw new \Exception('Your credential incorrect', 403);
        }

        return $user;
    }

    /**
     * Signup service
     *
     * @param array $credential
     * @return void
     */
    public function signup() {
        //prepare user data
        $user = [
            'id' => \Str::uuid()->toString(),
            'name' => $this->req->name,
            'email' => $this->req->email,
            'password' => Hash::make($this->req->password)
        ];

        //Save user
        $user = $this->userRepo->save($user);

        return $user;
    }
    
    public function signout() {
        $user = Auth::user();

        return $user->tokens()->delete();
    }
}