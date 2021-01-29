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
        $year1 = $request->year_1;
        $year2 = $request->year_2;
        $year3 = $request->year_3;
        $year4 = $request->year_4;
        $year5 = $request->year_5;

        //year 1 data
        $year1Data = explode('-',$year1);
        $finance1 = new CompanyFinance();
        $finance1->year = $year1Data[0];
        $finance1->amount = $year1Data[1];
        $finance1->company_id =$request->company_id;
        $finance1->save();

        //year 2 data
        $year2Data = explode('-',$year2);
        $finance2 = new CompanyFinance();
        $finance2->year = $year2Data[0];
        $finance2->amount = $year2Data[1];
        $finance2->company_id = $request->company_id;
        $finance2->save();

        //year 3 data
        $year3Data = explode('-',$year3);
        $finance3 = new CompanyFinance();
        $finance3->year = $year3Data[0];
        $finance3->amount = $year3Data[1];
        $finance3->company_id = $request->company_id;
        $finance3->save();

        //year 4 data
        $year4Data = explode('-',$year4);
        $finance4 = new CompanyFinance();
        $finance4->year = $year4Data[0];
        $finance4->amount = $year4Data[1];
        $finance4->company_id = $request->company_id;
        $finance4->save();

        //year 5 data
        $year5Data = explode('-',$year5);
        $finance5 = new CompanyFinance();
        $finance5->year = $year5Data[0];
        $finance5->amount = $year5Data[1];
        $finance5->company_id = $request->company_id;
        $finance5->save();

        return response()->json([
            'status'=>true,
            'message'=>'Company finance data is saved successfully'
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
