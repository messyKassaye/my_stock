<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loans', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('company_id');
            $table->integer('loan_type_id');
            $table->integer('entitlement');
            $table->string('loanFeature');
            $table->string('eligibilityCriteria');
            $table->integer('MinPeriodInYears');
            $table->integer('MaxPeriodInYears');
            $table->integer('minInterestRate');
            $table->integer('maxInterestRate');
            $table->text('description');
            $table->boolean('status')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('loans');
    }
}
