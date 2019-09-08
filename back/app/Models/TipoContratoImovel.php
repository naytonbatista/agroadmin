<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;

class TipoContratoImovel extends Eloquent
{
    protected $fillable = ['descricao'];

    protected $table = 'tipo_contrato_imovel';
}
