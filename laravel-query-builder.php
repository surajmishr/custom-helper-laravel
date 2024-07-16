
use Illuminate\Support\Facades\DB;
$data = array();

//Get Data DB on table 

$student = DB::table('students')->get();

DB::table('abc')->insert($data);
DB::table('abc')->insertGetId($data);

// Where, OrWhere, WhereBetween, wherenotBetweent, whereIn OrWhere(function($query));
$id = 1;

DB::table('abc')->where('id',$id)->get();
DB::table('abc')->where('id',$id)->orwhere('
name', 'suraj')->get();
DB::table('abc')->whereBetween('id',[2,4])->get();
DB::table('abc')->wherenotBetween('id',[2,4])->get();
DB::table('abc')->whereIn('id',[1,2,3,4])->get();

// WhereDate, WhereMonth, WhereDay, WhereYear, WhereTime
DB::table('abc')->whereDate('created_at','2021-12-2')->get();
DB::table('abc')->whereMonth('created_at','12')->get();
DB::table('abc')->whereDay('created_at','27')->get();
DB::table('abc')->whereyear('created_at','2015')->get();
DB::table('abc')->whereTime('created_at','11:46:33')->whereMonth('created_at','12')->get();

//Compapre two Columns (whereColumn)
DB::table('abc')->whereColomn('updated_at','>','created_at')->get();

//first(), find(3), value('email')
DB::table('abc')->where('id',$id)->first();
DB::table('abc')->find(3);
DB::table('abc')->where('id','4')->value('email','phone');

// pluck 
DB::table('abc')->pulck('email',);

//select AddSelect
$student   =  DB::table('abc')->select('email','phone');
$result= $student->addSelect('address')->get();

// update
$reseult = DB::table('abc')->where('id',' 1')->update($data);

//Upadte and Insert One Methord 
$result = DB::table('students')->updateOrInsert(['id'=>$id],$data);
//Upsert
// if you use upsert then want data  on array in Primary Key  totaly want 3 arguments 
$result = Db::table('students')->upsert($data,['id'],['name','email','phone']);

// Delete Truncate 
$deletedata = DB::table('students')->where('id','1')->delete(); // Delete Methord Delete Particular Row Means Single Data 
$truncatedata = DB::table('students')->truncate();

// Ordering, Grouping, Limit, Offset
$orderby = DB::table('students')->orderby('name','asc')->get();
$groupby   =  DB::table('abc')->select('email','phone')->groupby('');



