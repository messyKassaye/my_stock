<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyPerformancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_performances', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('companyId');
            $table->string('year');
            $table->double('revenue');
            $table->double('netIncome');
            $table->double('dividendPercentage');
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
        Schema::dropIfExists('company_performances');
    }
}
