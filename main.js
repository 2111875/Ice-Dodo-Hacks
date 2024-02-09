
let w = window.open('', '_blank','popup');
w.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://3c34e844-50f2-4cb6-815e-c6449c38f513-00-2fg4jfzj6vhv8.picard.replit.dev/style.css" rel="stylesheet" type="text/css" />
  <script src='https://code.jquery.com/jquery-3.7.1.min.js'></script>
  <title>Hack</title>
</head>
<body>
<align top>
<button id='FinishCUP'>Clear all levels in cup</button><input id='nameInput' placeholder='Name'><input id='timeInput' placeholder='Time' type='number'><input id='countInput' placeholder='Count' type='number'><button id='SubmitBTN'>Submit</button>
  </align>
</body>
<script>

$('#SubmitBTN').on('click', () => {
  fetch("https://raw.githubusercontent.com/2111875/Ice-Dodo-Hacks/main/script.js").then(r => r.text()).then(r => window.opener.eval(r.replace('AMOGUSNAME',$('#nameInput').val()).replace('TIMEE', $('#timeInput').val()).replace('COOUNT', $('#countInput').val())));
}
)
$('#FinishCUP').on('click', () => {
  fetch("https://raw.githubusercontent.com/2111875/Ice-Dodo-Hacks/main/script.js").then(r => r.text()).then(r => window.opener.eval(r.replace('AMOGUSNAME',$('#nameInput').val()).replace('TIMEE', $('#timeInput').val()).replace('COOUNT', $('#countInput').val()).replace('CLEARCUP', 'yes')));
})
</script>
</html>`);
