<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    echo $_GET['inpText'];
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['_method'])) {
        if ($_POST['_method'] == "PUT") {
            echo $_POST['inpText'];
        }

        if ($_POST['_method'] == "DELETE") {
            echo $_POST['inpText'];
        }
    } else {
        echo $_POST['inpText'];
    }
}
