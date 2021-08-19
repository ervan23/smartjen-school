<p>
    Hi {{$name}}, you're the invited to <strong>{{$school_name}}</strong> as <strong>{{\App\Constants\UserRole::getString($role)}}</strong>. Here your credential.
</p>
<p>School ID: {{$code}}</p>
<p>Email: {{$email}}</p>
<p>Password: {{$password}}</p>

<h3 style="text-align: center;">
    <a href="{{url('login')}}">Login Here</a>
</h3>