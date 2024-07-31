<?php
HOST=us-east.connect.psdb.cloud
USERNAME=7jd0l260fzq6hgrijqdf
PASSWORD=************
DATABASE=test


  $mysqli = mysqli_init();
  $mysqli->ssl_set(NULL, NULL, "/etc/ssl/certs/ca-certificates.crt", NULL, NULL);
  $mysqli->real_connect($_ENV["HOST"], $_ENV["USERNAME"], $_ENV["PASSWORD"], $_ENV["DATABASE"]);
  $mysqli->close();
?>
