<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\CompanyFinance;
use App\Stock;
use App\Location;
use App\CompanyCategory;
class Company extends Model
{
    //

    public function representative(){
        return $this->belongsTo(User::class,'representative_id');
    }
    public function contact(){
        return $this->hasOne(Contact::class,'owner_id');
    }

    public function finance(){
        return $this->hasMany(CompanyFinance::class);
    }

    public function stock(){
        return $this->hasOne(Stock::class,'company_id');
    }

    public function loans(){
        return $this->hasMany(Loan::class,'company_id');
    }

    public function location(){
        return $this->hasMany(Location::class,'owner_id');
    }

    public function category(){
        return $this->belongsTo(CompanyCategory::class,'category_id');
    }
}
