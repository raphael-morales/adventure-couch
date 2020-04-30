<?php
/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

use App\Model\QuestionManager;
use Symfony\Component\HttpClient\HttpClient;

class WebcamController extends AbstractController
{

    /**
     * Display webcam informations specified by $country
     *
     * @param string $country
     * @return string
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
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

        return $this->twig->render('Home/index.html.twig', ['webcams'=>$webcams['result']['webcams']]);
    }

    public function level($id)
    {
        $questionManager = new QuestionManager();
        $level =  $questionManager->selectQuestionsByLevel($id);

        return $this->twig->render('Home/index.html.twig', ['level' => $level]);
    }
}
