<?php
// $find  = 'qwaAsas';
// $length = strlen($find);
// echo $length; exit;




function length($length){
 return strlen($length);
}


function remove_space($str){
	$remove_space = trim($str);
	return $remove_space;
}


function lower($str){
 $stringlower = strtolower($str);
return $stringlower; 
}

function upper($str){
   $stringupper = strtoupper($str);
   return $stringupper;
}

function addcslashes($str,$arg){

  $strAddslashes  =	addcslashes($str,$arg);
  return $strAddslashes;
}

// push data ley abd value pair
$item =5;
$size = array();
$point = 0;

function push($data){
	if($point >= $item){

         echo "stack is overflow";
	}else{
		$size[$this->point] = $data;
	}

}



function array_reverses($array_associative){
 
  $reverse = array_reverse($array_associative);
  return $reverse;
}

//ASCII TABLE

// uniqid 
function uniqgenrate_refresh()
{
        $data =    uniqid('clever-');
        return $data;
}

function diffrent(array $a, $b){
// means not math 
$result = array_diff($a, $b);
return $result;
}

?>
