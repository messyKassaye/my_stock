<?php

namespace App\Http\Controllers;

use App\Company;
use Illuminate\Http\Request;
use App\Http\Resources\CompanyResource;
use Auth;
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
        $company = Company::where('representative_id',Auth::user()->id)->get();
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
        $company->representative_id =Auth::user()->id;
        $company->category_id = $request->category_id;
        $company->about = $request->about;
        $company->established_year = $request->established_year;
    

        $file = $request->file('file');
        $file_mime = $file->getClientMimeType();
        $mediaPath = public_path();
        $destinationPath = $mediaPath.'/uploads/'; // upload path
        $profilefile = "maleda_photo_".date('YmdHis') . "." . $file->getClientOriginalExtension();
        $result= $file->move($destinationPath, $profilefile);
        if($result){

                $company->logo_path =env('HOST_NAME').'/uploads/'.$profilefile;
                $company->save();

                return response()->json([
                    'status'=>true,
                    'message'=>'Company registered successfully',
                    'company'=>$company
                ]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $company = Company::find($id);
        if($company!==null){
            return new CompanyResource($company);
        }else{
            return response()->json([
                'status'=>false,
                'message'=>'There is no registered company by this id'
            ],404);
        }
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
