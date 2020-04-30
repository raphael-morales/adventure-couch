<?php


namespace App\Model;

use Symfony\Component\Yaml\Tests\A;

class QuestionManager extends AbstractManager
{

    /**
     *
     */
    const TABLE = 'questions';

    /**
     *  Initializes this class.
     */
    public function __construct()
    {
        parent::__construct(self::TABLE);
    }


    /**
     * Get one row from database by ID.
     *
     * @param  int $id
     *
     * @return array
     */
    public function selectQuestionsByLevel(int $id)
    {
        $statement = $this->pdo->prepare("SELECT * FROM questions AS q 
        JOIN levels AS l ON l.id = q.levels_id
        JOIN choices AS c ON c.questions_id = q.id
        WHERE l.id=:id");
        $statement->bindValue('id', $id, \PDO::PARAM_INT);
        $statement->execute();

        return $statement->fetchAll();
    }
}
