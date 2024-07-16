///  ORM Object  Relation Management

insert data
retrive
delete
update
update or create
chunk and cursor
subquerySelect
find and fail 
retrive and create
aggregate
relation

// first step we do define 
protected $table  = 'my_flights';
protected $guarded = ['id'];
protected $fillable  = ['name','email','password'];
protectd $primarykey = 'flight_id';



$student  = new Student;
$student->name = 'a';
$tudent->number = 'b';

$data = array();

Data Insert  or Create

$Student->save();// object through data save means insert
student::create($data); //Array Through data add 

Data List 

Student::all(); //list all data means all retrive data 
student::get(); student::where('name',$id)->get(); retrive data conditional 

// First  find Method find first firstwhere

$ab = student::find(2);
dd($ab);
$first            = student::first(); onlystudent  first row print
$first_codiition  = student::where('name','aaa')->first();
$firstwhere       = student::firstwhere('name','aaa');

Delete and Destroy

$student_delete   = student::find($id)->delete();
$tudent_Destroy   = student::destroy($id); multiple delete (1,2);

update save

$student_update      = student::where('id',$id)->update($data);
$student_save_update = student::find($id);
 $student_save_update->name;
 $student_save_update->save();

updateOrCreate  or upsert 
update and save one methord
function  update_save(Request $request){
	$id =  $request->id;
          if(!empty($id) && $d != '')
                {

                  $Student::find($id);
       
                }
       
}

$update_Create  = student::updateOrCreate(['id' =>$id],$data); // update and save dono cahlega id mila to
$upsert         = student::upsert($data, ['id'],['phone','name']); vahi value update hoga jo maine Slect kiya hoda

// chunk cursor 

$student_chunk  = student::chunk(1000,function($student){ // want data condining number
	foreach($student as $student){
		echo $student;
	}
	echo "<br> <br>";

});

$studnet_curser = foreach( student::where('id', '<' '10')->cursor() as $student ){
	echo $Student;
}


// Add Select 

$student_addselect = Result::addSelect(['student_name'=>Student::select('name')->whereColumn('student_Id','students.id'));


findOrFail
firstOrFail

$student_findorfail      = Student::findOrfail($id);
$studnet_firstOrfail     = Student::firstOrfail($Id);
$student_firstfail_where = Student::where('id',$id)->firstfail();

firstORcreate 


 
