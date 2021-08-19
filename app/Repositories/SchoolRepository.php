<?php
namespace App\Repositories;

use App\Models\School;

class SchoolRepository {

    /**
     * Get School by ID
     *
     * @param string $id
     * @return School
     */
    public function getById($id): School {
        return School::findOrFail($id);
    }

    /**
     * Save new school
     *
     * @param array $attributes
     * @return School
     */
    public function save(array $attributes): School {
        return School::create($attributes);
    }

    /**
     * Update existing school
     *
     * @param string $id
     * @param array $attributes
     * @return School
     */
    public function update($id, array $attributes): School {
        $school = $this->getById($id);
        $school->update($attributes);

        return $school;
    }

    /**
     * Get All School
     *
     * @param integer $page
     * @param integer $limit
     * @return Collection
     */
    public function getAll($page = 1, $limit = 10) {
        $schools = School::byRole()->skip($limit * ($page - 1))->take($limit)->get();
        return $schools;
    }

    /**
     * Delete data
     *
     * @param string $id
     * @return void
     */
    public function delete($id) {
        $this->getById($id)->delete();
    }
}