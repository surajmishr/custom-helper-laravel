1 Session Based Authentiction
2 Manually Authentication With Auth Class
3 Start Kit 

Laravel Laibray 

1 laravel Breeze 
2 laravel jestream 
3 Laravel Fortify

1 Registrtion /Login Page
2 Forget Password
3 Starter Kit
4 Api authentication

Use illuminate\Support\Facades\Auth;

public function login(Request $request){
	
$credentials = $request->validate(
	['email' =>'required|eamil',
	'password' =>'required'
	]);

	if(Auth::attempt($credentials)){
		return view('dashboard');=
	}
if we are not use user table then go 

Config\Auth.php 
 change value

Auth::user();
All detail return if you use Auth::user();

Auth::id();
if seeing User id then you can use Auth::id();

Auth::check();
if you want check user Have login or Not login then check(); 

Auth::guest();

Auth::guest()
 if you are check user whre is login any way
Auth::login();
if user login then we can logout






}



By default Function strlen()

$name = 'Suraj Mishra';

if(strlen($name) > 255){
	toastr::error(translate
}
