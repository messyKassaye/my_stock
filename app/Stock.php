<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Company;
use App\Applicant;

class Stock extends Model
{
    //

    public function company(){
        return $this->hasOne(Company::class);
    }

    public function applicants(){
        return $this->hasMany(Applicant::class);
    }
}
