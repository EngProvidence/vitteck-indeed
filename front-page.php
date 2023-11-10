<?php
get_header();
?>
    <!-- =========================================
    job search and serach criteria
============================================== -->

    
    <!-- =========================================
                main section for job listings
    ============================================== -->
    <hr width="100%">
    <div class="container">
        <article class="content ">

        <?php
   if ( have_posts()){
    while( have_posts()){

        the_post();
        the_content();


    }
}

?>

        </article>
 

    </div>
    
    <!-- 
===================================================================
                         FOOTER
   =================================================================== -->
   <?php
   get_footer();
   ?>
</body>

</html>