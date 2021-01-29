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
        
        $regions = explode(',',Config::get('regions.region'));
        for($i=0;$i<count($regions);$i++){
            $region = new RegionCity();
            $region->parent_id = 0;
            $region->name = $regions[$i];
            $region->save();
        }

        $loanType = explode(',',Config::get('laonType.loan_type'));
        for($l=0;$l<count($loanType);$l++){
            $loan = new LoanType();
            $loan->name = $loanType[$l];
            $loan->save();
        }
        //add subcity and zones
        for($j=0;$j<count($regions);$j++){
            $parents = DB::table('region_cities')->where('name',$regions[$j])->get();
            foreach($parents as $parent){
               $subcitZone = explode(',',Config::get('regions.city.'.$parent->name));
                for($k=0;$k<count($subcitZone);$k++){
                    $subcity = new RegionCity();
                    $subcity->parent_id = $parent->id;
                    $subcity->name = $subcitZone[$k];
                    $subcity->save();
                }
            }
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
