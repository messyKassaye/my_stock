<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\CompanyFinance;
class Company extends Model
{
    //

    public function finance(){
        return $this->belongsTo(CompanyFinance::class);
    }
}
