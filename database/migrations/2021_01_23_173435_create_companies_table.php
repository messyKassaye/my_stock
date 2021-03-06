<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('companyExternalId');
            $table->integer('representative_id');
            $table->string('name');
            $table->string('logo_path');
            $table->text('about');
            $table->string('established_year');
            $table->integer('category');
            $table->integer('type');
            $table->string('emailAddress');
            $table->string('headQuarterAddress');
            $table->string('website');
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
        Schema::dropIfExists('companies');
    }
}
