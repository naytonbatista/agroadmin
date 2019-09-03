<?php

use Slim\Http\Request;
use Slim\Http\Response;

use App\Models\Empresa;

$app->get('/api/empresa', function (Request $request, Response $response, array $args) {
    $empresas = Empresa::get();
    return $response->withJson($empresas);
});

$app->post('/api/empresa', function (Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $empresa = Empresa::create($data);
    return $response->withJson($empresa, 201);
});

$app->get('/api/empresa/{id}', function (Request $request, Response $response, array $args) {
    $empresa = Empresa::findOrFail($args['id']);
    return $response->withJson($empresa);
});

$app->put('/api/empresa/{id}', function (Request $request, Response $response, array $args) {
    $empresa = Empresa::findOrFail($args['id']);
    $empresa->update($request->getParsedBody());
    return $response->withJson($empresa);
});

$app->delete('/api/empresa/{id}', function (Request $request, Response $response, array $args) {
    $empresa = Empresa::findOrFail($args['id']);
    $empresa->delete();
    return $response->withJson($empresa);
});
