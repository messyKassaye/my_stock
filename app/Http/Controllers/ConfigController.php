<?php

namespace App\Http\Controllers;
use App\CompanyCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use App\RegionCity;
use App\Role;
use App\LoanType;
class ConfigController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $banks = explode(',',Config::get('category.categories'));
        for($b=0;$b<count($banks);$b++){
            $role = new CompanyCategory();
            $role->name = $banks[$b];
            $role->save();
        }
        
        
        $loanType = explode(',',Config::get('laonType.loan_type'));
        for($l=0;$l<count($loanType);$l++){
            $loan = new LoanType();
            $loan->name = $loanType[$l];
            $loan->save();
        }
        

        $role = new Role();
        $role->name ='Admin';
        $role->save();

        $userRole = new Role();
        $userRole->name ='User';
        $userRole->save();

        $companyRole = new Role();
        $companyRole->name ='Reprsentative';
        $companyRole->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
