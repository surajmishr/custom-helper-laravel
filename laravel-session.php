session use login logout sessionsome time store on server 
User authentication 
Shopping Cart
Flash Message
Multi Step Form 
User Preferences
Form Data Predervation 
Captcha Verification

Store Session 
session('key' => 'value');
session()->put('key', 'value');

Read Session 

Session()->all();
session->get('key');

Delete Session 
session()->forget('key');
session()->flush();

if you want session time increse then go .env file  implement Session_lifetime = 120

if check session exits or not 

session()->has('key');
session()->exits('key');

Only except  aray formate check return 

session()->only(['key', 'key3']);
session()->except(['key1','key2']);

session()->increment('ccount')
session()->decrement('count')

session->regenate()


session()->flash('key', 'Your message comes here)

conmfig/session.php

storege_path('framework/session'), 

session()->all(); basicly return array Fromate 
\
public function deleteSession(){
	session()->forget(['name','class']);\
session()->flush(); if we create session then remove all session when we create


		return redirect('/');

}






