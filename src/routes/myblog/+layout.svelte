<script>
    let hre = '/src/assets'
    import Footer from '$lib/myblog/myblog_footer.svelte'
    import Header from '$lib/myblog/myblog_header.svelte';
    import Hero from '$lib/myblog/myblog_hero.svelte'
    import About from '$lib/myblog/myblog_about.svelte'
    import Facts from '$lib/myblog/myblog_facts.svelte'
    import Skills from '$lib/myblog/myblog_skills.svelte'
    import Resume from '$lib/myblog/myblog_resume.svelte'
    import Portfolio from '$lib/myblog/myblog_portfolio.svelte'
    import Services from '$lib/myblog/myblog_services.svelte'
    import Testimonials from '$lib/myblog/myblog_testimonials.svelte'
    import Contact from '$lib/myblog/myblog_contact.svelte'
</script>

<svelte:head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>iPortfolio Bootstrap Template - Index</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="{hre}/img/favicon.png" rel="icon">
  <link href="{hre}/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="{hre}/vendor/aos/aos.css" rel="stylesheet">
  <link href="{hre}/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="{hre}/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="{hre}/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="{hre}/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="{hre}/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="{hre}/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: iPortfolio - v3.9.1
  * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="{hre}/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="{hre}/vendor/aos/aos.js"></script>
  <script src="{hre}/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="{hre}/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="{hre}/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="{hre}/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="{hre}/vendor/typed.js/typed.min.js"></script>
  <script src="{hre}/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="{hre}/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="{hre}/js/main.js"></script>

</svelte:head>

<body>
    <Header/>
    <Hero />
    <main>
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
    </main>
    <Footer />
</body>
