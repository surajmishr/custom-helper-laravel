// A seeder in Laravel is a class that provides a way to populate the database with initial data.
// Seeders are useful for setting up default data, sample data for testing,
// or for populating your application with data during development.

//seeder command = php artisan make:seeder SeederName
<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str; 
use DB;

class studentdata extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $students = [];

        for ($i = 0; $i < 10; $i++) {
            $students[] = [
                'name' => Str::random(10),
                'email' => Str::random(10) . '@example.com',
            ];
        }

        DB::table('students')->insert($students);
    }
}
// run
// php artisan db:seed --class=Student 
// if return send data same command hit seeder command = php artisan make:seeder SeederName

