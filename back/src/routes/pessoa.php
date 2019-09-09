<?php

use Slim\Http\Request;
use Slim\Http\Response;

use App\Models\Pessoa;

$app->get('/api/pessoa', function (Request $request, Response $response, array $args) {
    $pessoas = Pessoa::get();
    return $response->withJson($pessoas);
});

