<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Pessoa extends Eloquent
{
    protected $fillable = ['nome',
    'nacionalidade',
    'profissao',
    'rg',
    'orgao_emissor',
    'cpf',
    ];

    protected $table = 'pessoa';
}
