<?php
namespace App\Repositories;

use App\Models\User;

class UserRepository {

    /**
     * Get user by ID
     *
     * @param string $id
     * @return User
     */
    public function getById($id): User {
        return User::findOrFail($id);
    }

    /**
     * Save new user
     *
     * @param array $attributes
     * @return User
     */
    public function save(array $attributes): User {
        return User::create($attributes);
    }

    /**
     * Update existing user
     *
     * @param string $id
     * @param array $attributes
     * @return User
     */
    public function update($id, array $attributes): User {
        $user = $this->getById($id);
        $user->update($attributes);

        return $user;
    }

    /**
     * Get all users
     *
     * @param integer $page
     * @param integer $limit
     * @return Collection
     */
    public function getAll($role, $page = 1, $limit = 10) {
        $users = User::byRole($role)->skip($limit * ($page - 1))->take($limit)->get();
        return $users;
    }

    /**
     * Delete user
     *
     * @param string $id
     * @return void
     */
    public function delete($id, $school_id) {
        $user = User::where([
            'id' => $id,
            'school_id' => $school_id
        ])->firstOrFail();

        $user->delete();
    }
}