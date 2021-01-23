<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RegionCity extends Model
{
    //

    public function parent(){
        return $this->hasMany(self::class,'parent_id')->where('parent_id',0);
    }
    public function child(){
        return $this->hasMany(self::class,'parent_id');
    }
}
