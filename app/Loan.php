<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\LoanType;
use App\Company;

class Loan extends Model
{
    //

    public function loanType(){
        return $this->belongsTo(LoanType::class,'loan_type_id');
    }

    public function company(){
        return $this->belongsTo(Company::class,'company_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
}
