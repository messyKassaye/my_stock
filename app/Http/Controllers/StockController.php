<?php

namespace App\Http\Controllers;

use App\Stock;
use Illuminate\Http\Request;
use Auth;
use App\Http\Resources\StockResource;
class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $stock = Stock::where('user_id',Auth::user()->id)->get();
        return StockResource::collection($stock);
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
        $stock = new Stock();
        $stock->user_id=Auth::user()->id;
        $stock->company_id = $request->company_id;
        $stock->stock_price = $request->price;
        $stock->minimum_amount = $request->amount;
        $stock->description =$request->description;
        $stock->save();

        return response()->json([
            'status'=>true,
            'stock'=>$stock,
            'message'=>'Stock added successfully'
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $stock= Stock::find($id);
        if($stock!=null){
            return new StockResource($stock);
        }else{
            return response()->json(['status'=>false,'message'=>'There is no stock by this id'],404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function edit(Stock $stock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $stock = Stock::find($id);
        if($stock!=null){

            $stock->user_id=Auth::user()->id;
            $stock->company_id = $request->company_id;
            $stock->stock_price = $request->price;
            $stock->minimum_amount = $request->amount;
            $stock->description =$request->description;
            $stock->save();

            return response()->json([
                'status'=>true,
                'stock'=>$stock,
                'message'=>'Stock added successfully'
            ]);

        }else{
            return response()->json(['status'=>false,'message'=>'There is no stock by this id'],404);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        if(Stock::destroy($id)){
            return response()->json([
                'status'=>true,
                'message'=>'Stock is deleted successfully'
            ]);
        }
    }
}
