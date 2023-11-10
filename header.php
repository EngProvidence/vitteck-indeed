<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
<?php
wp_head();

?>


</head>

<body>
    <!-- =========================================
    navigation bar
============================================== -->
    <div>
        <div class="topnav" id="myTopnav">
        <!-- ====================================== -->
            <div class="left-part">
                <div class="img-group">
                    <?php
                    if (function_exists('the_custom_logo')){
                        the_custom_logo();

                    }
                    
                    ?>
                    <a class="logo" href="#"><img src="/wp-content/themes/vitteck-indeed/1Indeed/extras/indeed.PNG" alt="logo"></a>
                    <a class="logo-extra" href="#"><img src="/wp-content/themes/vitteck-indeed/1Indeed/extras/indeed1.png" height="35px" alt="logo"></a>
                </div>
                <div class="nav-div">
                    <a href="#" class="menu-item active">Find jobs</a>
                    <a href="#" class="menu-item">Company reviews</a>
                    <a href="#" class="menu-item">Find Salaries</a>
                </div>

            </div>
            <div class="right-part">
                <div class="nav-div2">
                    <a href="#" class="menu-item-icon"><i class="fa-solid fa-message"></i></a>
                    <a href="#" class="menu-item-icon"><i class="fa-solid fa-bell"></i></a>
                    <a href="#" class="menu-item-icon"><i class="fa-solid fa-user"></i></a>
                </div>
                <div class="nav-div2 gap-min">
                    <a href="#" class="menu-item-icon text disabled">EN</a>
                    <a href="#" class="menu-item-icon text">FR</a>
                </div>
                <div class="nav-div2 pt-4">
                    <a href="#" class="menu-item" >Employers/ post jobs</a>
                </div>
            </div>
        </div>
    </div>
    <div class="main-nav">    
         <?php
           wp_nav_menu(

            array(
          'menu'=> 'primary',
          'container'=> '',
          'theme_location'=> 'primary',
          ///'items_wrap'=> '<ul id="" class="" >&3$s </ul>',

            )
            );

        ?>
</div>
    <div>
        <div class="sidenav">

            <a href="#" style="border:1px solid gainsboro!important;" class="closebtn"
                onclick="closeNav()">&times;</a><br><br><br>
            <a href="#">Find jobs<span class="nav-arrow"><i class="fa-solid fa-chevron-right"></i></span></a>
            <a href="#">Find salaries<span class="nav-arrow"><i class="fa-solid fa-chevron-right"></i></span></a>
            <a href="#">Employers<span class="nav-arrow"><i class="fa-solid fa-chevron-right"></i></span></a>
            <a href="#">Create your resume<span class="nav-arrow"><i class="fa-solid fa-chevron-right"></i></span></a>
            <a href="#">change Country<span class="nav-arrow"><i class="fa-solid fa-chevron-right"></i></span></a>
            <a href="#">Help center<span class="nav-arrow"><i class="fa-solid fa-chevron-right"></i></span></a>
        </div>

       <h2><?php the_title();?></h2>
    </div>
