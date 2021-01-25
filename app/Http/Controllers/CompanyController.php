<?php

namespace App\Http\Controllers;

use App\Company;
use Illuminate\Http\Request;
use App\Http\Resources\CompanyResource;
class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $company = Company::all();
        return CompanyResource::collection($company);
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
        $company = new Company();
        $company->name = $request->name;
        $company->category_id = $request->category_id;
        $company->about = $request->about;
        $company->established_year = $request->established_year;
        $company->logo_Path='';
        $company->save();

        return response()->json([
                'status'=>true,
                'message'=>'Company registered successfully',
                'company'=>$company
            ]);
       /*  $file = $request->file('file');
        $file_mime = $file->getClientMimeType();
        $mediaPath = public_path();

        $destinationPath = $mediaPath.'/uploads/'; // upload path
        $profilefile = "stock_photo_".date('YmdHis') . "." . $file->getClientOriginalExtension();
        $result= $file->move($destinationPath, $profilefile);
        if($result){
            
        } */

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        //
    }
}
