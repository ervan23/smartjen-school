<?php
namespace App\Repositories;

use App\Models\Chat;

class ChatRepository {

    /**
     * Get user by ID
     *
     * @param string $id
     * @return Chat
     */
    public function getById($id): Chat {
        return Chat::findOrFail($id);
    }

    /**
     * Save new Chat
     *
     * @param array $attributes
     * @return Chat
     */
    public function save(array $attributes): Chat {
        return Chat::create($attributes);
    }

    /**
     * Update existing Chat
     *
     * @param string $id
     * @param array $attributes
     * @return Chat
     */
    public function update($id, array $attributes): Chat {
        $chat = $this->getById($id);
        $chat->update($attributes);

        return $chat;
    }

    /**
     * Get all chats
     *
     * @param integer $page
     * @param integer $limit
     * @return Collection
     */
    public function getAll($sender, $receiver, $page = 1, $limit = 100) {
        $chats = Chat::where(function($q) use ($sender, $receiver) {
            $q->where([
                'sender_id' => $sender,
                'receiver_id' => $receiver
            ]);
        })->orWhere(function($q) use ($sender, $receiver) {
            $q->where([
                'sender_id' => $receiver,
                'receiver_id' => $sender
            ]);
        })->skip($limit * ($page - 1))->take($limit)->get();
        return $chats;
    }

    /**
     * Delete user
     *
     * @param string $id
     * @return void
     */
    public function delete($id) {
        $user = Chat::where([
            'id' => $id,
        ])->firstOrFail();

        $user->delete();
    }
}