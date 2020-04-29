<?php


namespace App\Controller;

class Couch
{
    /**
     * @var int
     */
    private $speed=1;

    /*
     * @var array
     */
    private $position = ['abs' => 1, 'ord' => 1];

    public function __construct(int $abs, int $ord)
    {
        $this->position = ['abs' => $abs, 'ord' => $ord];
    }

    public function getPosition()
    {
        return $this->position;
    }

    /**
     * @return int
     */
    public function getSpeed()
    {
        return $this->speed;
    }

    public function setSpeed($speed)
    {
        $this->speed = $speed;
    }
}
