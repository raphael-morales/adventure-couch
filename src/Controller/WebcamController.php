<?php
/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

use Symfony\Component\HttpClient\HttpClient;

class WebcamController extends AbstractController
{

    /**
     * Display webcam informations specified by $country
     *
     * @param string $country
     * @return string
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */


    public function show(string $country)
    {
        $client = HttpClient::create();
        $response = $client->request('GET', "https://api.windy.com/api/webcams/v2/list/country=$country/
        category=city/orderby=popularity,desc/limit=3?key=7SWJ1kS5vuhNx8oNB2Fv3zTLH2uS2PvM");
        $webcams = $response->toArray();
        //var_dump($webcams);
        //var_dump($webcams['result']['webcams']);
        return $this->twig->render('Home/index.html.twig', ['webcams'=>$webcams['result']['webcams']]);
    }
}
