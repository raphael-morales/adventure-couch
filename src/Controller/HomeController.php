<?php
/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

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

        // display pseudo of user
        $pseudo = '';
        if (!empty($_POST)) {
            $pseudo = trim($_POST['pseudo']);
        }
        $couch = new Couch(2, 2);
        $couchPosition = $couch->getPosition();
        return $this->twig->render('Home/index.html.twig', ['couchPosition' => $couchPosition, 'pseudo' => $pseudo]);
    }
}
