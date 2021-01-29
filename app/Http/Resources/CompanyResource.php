<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\RegionCity;
use Illuminate\Support\Facades\DB;
class CompanyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'established_year'=>$this->established_year,
            'about'=>$this->about,
            'contact'=>$this->contact,
            'logo_path'=>$this->logo_path,
            'finance'=>$this->finance,
            'stock'=>$this->stock,
            'category'=>$this->category,
            'location'=>[
                'region'=>RegionCity::where('id',$this->location[0]->region_id)->select('name')->get(),
                'city'=>RegionCity::where('id',$this->location[0]->city_id)->select('name')->get()
            ]
        ];
    }
}
