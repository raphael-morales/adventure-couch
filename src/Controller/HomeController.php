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

class HomeController extends AbstractController
{

    /**
     * Display home page
     *
     * @return string
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function index()
    {
        header("Location:Home/level/1");
    }

    public function level($id)
    {
        $questionManager = new QuestionManager();
        $level = $questionManager->selectQuestionsByLevel($id);
        $webcams = $this->getWebcams($id);

        //region Le code a jeff
        // ----------- coupable := ) JEFF ------------------------------------------------------------------------------
        $pseudo = '';
        if (!empty($_POST)) {
            $pseudo = trim($_POST['pseudo']);
        }
        $couch = new Couch(2, 2);
        $couchPosition = $couch->getPosition();
        //--------------------------------------------------------------------------------------------------------------
        //endregion

        return $this->twig->render('Home/index.html.twig', ['level' => $level, 'webcams' =>
            $webcams['result']['webcams'], 'couchPosition' => $couchPosition, 'pseudo' => $pseudo]);
    }


    public function getWebcams(string $country)
    {
        $realCountry = "FR";
        if ($country === "1") {
            $realCountry = "FR";
        } elseif ($country === "2") {
            $realCountry = "AE";
        } elseif ($country === "3") {
            $realCountry = "JP";
        }
        $client = HttpClient::create();
        $response = $client->request('GET', "https://api.windy.com/api/webcams/v2/list/country=$realCountry/
        category=city/orderby=popularity,desc/limit=3?key=7SWJ1kS5vuhNx8oNB2Fv3zTLH2uS2PvM");
        $webcams = $response->toArray();
        return $webcams;
    }
}
