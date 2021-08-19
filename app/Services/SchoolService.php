<?php
namespace App\Services;

use Auth;
use App\Models\School;
use App\Repositories\SchoolRepository;
use Illuminate\Http\Request;
use Validator;

class SchoolService {

    /**
     * @var SchoolRepository
     */
    private $schRepo;

    /**
     * Request variable
     *
     * @var Request
     */
    private $req;

    public function __construct(Request $req, SchoolRepository $schRepo) {
        $this->req = $req;
        $this->schRepo = $schRepo;
    }

    /**
     * Create school service
     *
     * @param App\Models\User $name
     * @return School
     */
    public function create($user) {
        //prepare school data
        $id = \Str::uuid()->toString();
        $code = 'SCH'.substr($id, 0, 7);
        $school = [
            'id' => $id,
            'admin_id' => $user->id,
            'code' => strtoupper($code),
            'name' => $this->req->school_name
        ];

        $school = $this->schRepo->save($school);

        return $school;
    }

}