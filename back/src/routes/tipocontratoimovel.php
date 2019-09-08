<?php

use Slim\Http\Request;
use Slim\Http\Response;

use App\Models\TipoContratoImovel;

$app->get('/api/tipocontratoimovel', function (Request $request, Response $response, array $args) {
    $tipoContratoImovel = TipoContratoImovel::get();
    return $response->withJson($tipoContratoImovel);
});
