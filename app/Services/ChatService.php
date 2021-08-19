<?php
namespace App\Services;

use App\Models\Chat;
use App\Repositories\ChatRepository;
use Illuminate\Http\Request;
use App\Events\ChatSent;

class ChatService {

    /**
     * @var ChatRepository
     */
    private $chatRepo;

    /**
     * Request variable
     *
     * @var Request
     */
    private $req;

    public function __construct(Request $req, ChatRepository $chatRepo) {
        $this->req = $req;
        $this->chatRepo = $chatRepo;
    }


    public function all($page, $limit, $receiver) {
        $user = $this->req->user();

        return $this->chatRepo->getAll($user->id, $receiver, $page, $limit);
    }

    /**
     * Invite chat service
     *
     * @param string $receiver_id
     * @return Chat
     */
    public function send($receiver_id) {
        $user = $this->req->user();
        //prepare chat data
        $chat = [
            'sender_id' => $user->id,
            'receiver_id' => $receiver_id,
            'message' => $this->req->message
        ];

        $chat = $this->chatRepo->save($chat);

        broadcast(new ChatSent($chat))->toOthers();

        return $chat;
    }

}