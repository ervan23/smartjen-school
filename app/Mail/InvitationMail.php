<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\User;

class InvitationMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * User instance variable
     *
     * @var User
     */
    private $user;

    private $password;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, $password)
    {
        $this->user = $user;
        $this->password = $password;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $school = $this->user->school;

        return $this->view('email.invitation', [
            'name' => $this->user->name,
            'school_name' => $school->name,
            'code' => $school->code,
            'email' => $this->user->email,
            'password' => $this->password,
            'role' => $this->user->role
        ]);
    }
}
