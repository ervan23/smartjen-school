<?php
namespace App\Services;

use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use App\Jobs\InvitationMailJob;

class UserService {

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
        $this->req = $req;
        $this->userRepo = $userRepo;
    }


    public function all($page, $limit) {
        $user = $this->req->user();
        $role = $this->req->role ?? $user->role;

        return $this->userRepo->getAll($role, $page, $limit);
    }

    /**
     * Invite user service
     *
     * @param App\Models\User $name
     * @return User
     */
    public function invite($school) {
        //prepare user data
        $id = \Str::uuid()->toString();
        $password = substr($id, 0, 8);
        $user = [
            'id' => $id,
            'school_id' => $school->id,
            'email' => $this->req->email,
            'name' => $this->req->name,
            'password' => \Hash::make($password),
            'role' => $this->req->role
        ];

        $user = $this->userRepo->save($user);

        dispatch(new InvitationMailJob($user, $password));

        return $user;
    }

    /**
     * Delete user service
     *
     * @param mixed $id
     * @return void
     */
    public function destroy($id) {
        $user = $this->req->user();
        $school = $user->ownSchool;

        $this->userRepo->delete($id, $school->id);
    }

}