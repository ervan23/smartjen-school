<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\User;

class RegistrationMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * User instance variable
     *
     * @var User
     */
    private $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $school = $this->user->ownSchool;
        return $this->view('email.registration', [
            'name' => $this->user->name,
            'school_name' => $school->name,
            'code' => $school->code
        ]);
    }
}
