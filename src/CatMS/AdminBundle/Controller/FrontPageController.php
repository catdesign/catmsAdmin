<?php

namespace CatMS\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * Admin front page controller.
 *
 */
class FrontPageController extends Controller
{
    /**
     * Admin frontpage
     * 
     */
    public function indexAction()
    {
        return $this->render('CatMSAdminBundle:FrontPage:index.html.twig', 
            array()
        );
    }
}
