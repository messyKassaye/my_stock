<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LoanResource extends JsonResource
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
            'loan_type'=>$this->loanType,
            'number_of_month'=>$this->number_of_month,
            'interest_rate'=>$this->interest_rate,
            'company'=>$this->company,
            'user'=>$this->user,
            'status'=>$this->status
        ];
    }
}
