<?php

namespace App\Http\Controllers;

use App\CompanyFinance;
use Illuminate\Http\Request;

class CompanyFinanceController extends Controller
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
        $companyFinance =new CompanyFinance();
        $companyFinance->company_id = $request->company_id;
        $companyFinance->year = $request->year;
        $companyFinance->amount=$request->amount;
        $companyFinance->save();
        return response()->json([
            'status'=>true,
            'message'=>'Company finance is stored successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CompanyFinance  $companyFinance
     * @return \Illuminate\Http\Response
     */
    public function show(CompanyFinance $companyFinance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CompanyFinance  $companyFinance
     * @return \Illuminate\Http\Response
     */
    public function edit(CompanyFinance $companyFinance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CompanyFinance  $companyFinance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CompanyFinance $companyFinance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CompanyFinance  $companyFinance
     * @return \Illuminate\Http\Response
     */
    public function destroy(CompanyFinance $companyFinance)
    {
        //
    }
}
