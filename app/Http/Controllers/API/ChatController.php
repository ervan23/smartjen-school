<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\ChatService;
use Validator;

class ChatController extends Controller
{
    /**
     * @var ChatService
     */
    private $chatService;

    public function __construct(ChatService $chatService) {
        $this->chatService = $chatService;
    }

    public function index(Request $req, $receiver) {
        $page = $req->page ?? 1;
        $limit = $req->limit ?? 100;

        $chats = $this->chatService->all($page, $limit, $receiver);

        return \Res::success('Chats listed', $chats);
    }

    public function send(Request $req, $receiver) {
        $validate = Validator::make($req->all(), [
            'message' => 'required'
        ]);

        if($validate->fails()) {
            return \Res::error($validate->errors()->first(), $validate->errors(), 400);
        }

        try {
            $chat = $this->chatService->send($receiver);

            return \Res::success('Chat sent', $chat);
        } catch(\Exception $e) {
            return \Res::error($e->getMessage(), $e->getCode());
        }
    }
}
