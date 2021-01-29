<?php

namespace App\Http\Controllers;

use App\Loan;
use Illuminate\Http\Request;
use Auth;
use App\Http\Resources\LoanResource;
class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $loan = Loan::where('user_id',Auth::user()->id)->get();
        return LoanResource::collection($loan);
    }

    public function loans(){
        $loan = Loan::all();
        return LoanResource::collection($loan);
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
        $loan = new Loan();
        $loan->company_id = $request->company_id;
        $loan->user_id = Auth::user()->id;
        $loan->loan_type_id = $request->loan_type_id;
        $loan->number_of_month =$request->month;
        $loan->interest_rate = $request->interest;
        $loan->description=$request->description;
        $loan->save();

        return response()->json([
            'status'=>true,
            'message'=>'Loan created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $loan = Loan::find($id);
        if($loan!=null){
            return new LoanResource($loan);
        }else{
            return response()->json([
                'status'=>false,
                'message'=>'There is no loan by this id'
            ],404);
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function edit(Loan $loan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        //
        $loan = Loan::find($id);
        $loan->company_id = $request->company_id;
        $loan->user_id = Auth::user()->id;
        $loan->loan_type_id = $request->loan_type_id;
        $loan->number_of_month =$request->month;
        $loan->interest_rate = $request->interest;
        $loan->description=$request->description;
        $loan->save();

        return response()->json([
            'status'=>true,
            'message'=>'Loan update successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        if(Loan::destroy($id)){
            return response()->json([
                'status'=>true,
                'message'=>'Loan deleted successfully'
            ]);
        }
    }
}
