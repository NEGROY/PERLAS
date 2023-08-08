<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROTECCION</title>
    <?php include './includes/component/incl.php'; ?>    
</head>
<body>
<?php include './includes/component/nav.php'; 
include './includes/AREA/PROTEC.php'; ?>    


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Provisión para Préstamos Incobrables</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="alert alert-primary" role="alert"> <?= P1();?>  </div>
<br>
<div class="alert alert-success" role="alert"> <?= P2();?>  </div>
<br>
<div class="alert alert-primary" role="alert"> <?= P3();?>  </div>
<br>
<div class="alert alert-success" role="alert"> <?= P4();?>  </div>
<br>

</body>
<script src="./includes/script/p.js"></script>

</html>