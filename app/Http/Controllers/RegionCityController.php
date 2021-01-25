<?php

namespace App\Http\Controllers;

use App\RegionCity;
use Illuminate\Http\Request;
use App\Http\Resources\RegionCityResource;
class RegionCityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $regionCity = RegionCity::where('parent_id',0)->get();
        return RegionCityResource::collection($regionCity);
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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\RegionCity  $regionCity
     * @return \Illuminate\Http\Response
     */
    public function show(RegionCity $regionCity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\RegionCity  $regionCity
     * @return \Illuminate\Http\Response
     */
    public function edit(RegionCity $regionCity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\RegionCity  $regionCity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RegionCity $regionCity)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\RegionCity  $regionCity
     * @return \Illuminate\Http\Response
     */
    public function destroy(RegionCity $regionCity)
    {
        //
    }
}
