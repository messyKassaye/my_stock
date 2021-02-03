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
            'loanFeature'=>$this->loanFeature,
            'eligibilityCriteria'=>$this->eligibilityCriteria,
            'MinPeriodInYears'=>$this->MinPeriodInYears,
            'MaxPeriodInYears'=>$this->MaxPeriodInYears,
            'maxInterestRate'=>$this->maxInterestRate,
            'description'=>$this->description
        ];
    }
}
