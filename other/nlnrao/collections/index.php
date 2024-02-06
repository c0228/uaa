<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap 5 Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<style>
body { font-family: Arial, sans-serif !important;font-size:13px; }
</style>
</head>
<body>

<div class="container-fluid mt-3">
 <div class="row">
  <div class="col-sm-6">
  <?php include_once 'templates/01ArrayList.php'; ?>
  </div>
  <div class="col-sm-6">
  <?php include_once 'templates/02LinkedList.php'; ?>
  </div>
 </div>
</div>

</body>
</html>
