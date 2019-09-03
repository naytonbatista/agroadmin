<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Empresa extends Eloquent
{
    protected $fillable = ['razao_social', 'cnpj', 'inscricao_estadual', 'endereco', 'home_page'];

    protected $table = 'empresa';
}
