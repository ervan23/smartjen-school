<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\UserService;
use Validator;
use App\Constants\UserRole;
use App\Jobs\RegistrationMailJob;

class UserController extends Controller
{
    /**
     * @var UserService
     */
    private $userService;

    public function __construct(UserService $userService) {
        $this->userService = $userService;
    }

    public function index(Request $req) {
        $page = $req->page ?? 1;
        $limit = $req->limit ?? 10;

        $users = $this->userService->all($page, $limit);

        return \Res::success('User retrieved', $users);
    }

    public function invite(Request $req) {
        $validate = Validator::make($req->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'role' => 'required|in:'.UserRole::TEACHER.','.UserRole::STUDENT
        ]);

        if($validate->fails()) {
            return \Res::error($validate->errors()->first(), $validate->errors(), 400);
        }

        $user = $req->user();
        $school = $user->ownSchool;

        try {
            \DB::beginTransaction();
            $user = $this->userService->invite($school);

            \DB::commit();
            return \Res::success('Invited', $user);
        } catch(\Exception $e) {
            \DB::rollback();
            return \Res::error($e->getMessage(), null, $e->getCode());
        }
    }

    public function delete($id) {
        try {
            $this->userService->destroy($id);

            return \Res::success('Deleted', null);
        } catch(\Exception $e) {
            return \Res::error($e->getMessage(), null, $e->getCode());
        }
    }
}
