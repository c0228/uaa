<!DOCTYPE html>
<html lang="en">
<head>
<title>HurrayMarket | Backup plans</title>
<?php include_once 'templates/hMarket/header.php'; ?>
</head>
<body>

<div class="container-fluid mtop15p">
<div class="row">
<div class="col-md-4">
	<a href="index.php">&#8592; Back</a>
	<?php include_once 'templates/hMarket/transaction-line-lifecycle.php'; ?>
	
	<div class="mtop15p">
		<div><h5><b>Automated SLA and Escalation System</b></h5></div>
		<div class="mtop15p">HurrayMarket should not wait for a buyer or supplier to complain. The platform should monitor each activity 
		against an agreed deadline.</div>
		<div class="table-responsive">
		  <table class="table">
			<thead><tr><td><b>#</b></td><td><b>Activity</b></td><td><b>Primary deadline	</b></td><td><b>Backup activation</b></td></tr></thead>
			<tbody>
				<tr><td>1.</td><td>Supplier production update</td><td>Agreed production date</td><td>After missed deadline and grace period</td></tr>
				<tr><td>2.</td><td>Inspector acceptance</td><td>4 hours</td><td>After 4 hours</td></tr>
				<tr><td>3.</td><td>Inspector visit confirmation</td><td>12 hours</td><td>After 12 hours</td></tr>
				<tr><td>4.</td><td>Inspection report</td><td>24–48 hours after inspection</td><td>Escalate after deadline</td></tr>
				<tr><td>5.</td><td>Laboratory COA</td><td>48–72 hours</td><td>Activate backup lab if appropriate</td></tr>
				<tr><td>6.</td><td>Freight quotation</td><td>6 hours</td><td>Send to secondary forwarder</td></tr>
				<tr><td>7.</td><td>Container booking</td><td>24 hours</td><td>Secondary forwarder</td></tr>
				<tr><td>8.</td><td>CHA document review</td><td>12 hours</td><td>Secondary CHA</td></tr>
			</tbody>
		  </table>
		</div>
		<div class="fs12">These are proposed operational targets, not universal industry standards. Actual SLAs should depend 
			on location, commodity, service type and contractual requirements.</div>
		<div class="mtop15p">
			<div><b>Example: Automated inspection failure</b></div>
			<ol class="mtop15p">
				<li>
					<div><b>10:00 AM – Inspection request created</b></div>
					<blockquote>Partner A receives the request.</blockquote>
				</li>
				<li>
					<div><b>2:00 PM – No acceptance</b></div>
					<blockquote>HurrayMarket sends a reminder.</blockquote>
				</li>
				<li>
					<div><b>4:00 PM – SLA breached</b></div>
					<blockquote>System marks Partner A as non-responsive for this transaction.</blockquote>
				</li>
				<li>
					<div><b>4:05 PM – Backup activation</b></div>
					<blockquote>Partner B receives the inspection request.</blockquote>
				</li>
				<li>
					<div><b>4:30 PM – Partner B accepts</b></div>
					<blockquote>Buyer and supplier receive notifications.</blockquote>
				</li>
				<li>
					<div><b>New inspection schedule confirmed</b></div>
					<blockquote>Transaction continues with the revised timeline.</blockquote>
				</li>
			</ol>
		</div>
	</div>
</div>
<div class="col-md-8">
<!-- -->
	<?php include_once 'templates/hMarket/transaction-backup-system.php'; ?>
<!-- -->
</div>
</div>
</div>

</body>
</html>