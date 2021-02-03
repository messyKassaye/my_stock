<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use App\Role;
use App\Company;
use App\Stock;
use App\Loan;
use App\Location;
class User extends Authenticatable
{
    use HasApiTokens,Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function role(){
        return $this->belongsTo(Role::class);
    }

    public function company(){
        return $this->hasMany(Company::class,'representative_id');
    }

    public function stock(){
        return $this->hasOne(Stock::class,'user_id');
    }

    public function loans(){
        return $this->hasMany(Loan::class,'user_id')->with('loanType');
    }
    
}
