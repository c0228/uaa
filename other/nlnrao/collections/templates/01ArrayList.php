 <div class="card">
   <div class="card-body">
   <div align="center"><h5><b>ArrayList</b></h5></div>
   <ul>
	<li><b>Implementation:</b>
		<ol>
			<li>Uses a dynamic array to store elements.</li>
		</ol>
	</li>
	<li><b>Access Time:</b>
		<ol>
			<li>It provides faster access for Random Access (get) because it uses an array (internally).</li>
		</ol>
	</li>
	<li><b>Performance:</b>
		<ol>
			<li><code><b>ArrayList</b></code> is faster than Vector (Comparing with <code><b>Vector</b></code> on Single Threading Scenarios) in 
			insertion, deletion and random access (get operation).<br/>
			<div class="list-group">
			<div class="list-group-item">
			<div align="center"><b>Time Complexity</b></div>
<div class="table-responsive">          
  <table class="table">
    <thead>
      <tr><th>#</th><th>Scenario</th><th>Complexity</th><th>Reason</th></tr>
    </thead>
    <tbody>
      <tr>
		<td>1</td>
		<td>Insertion at the beginning (or) in the middle</td>
		<td align="center">O(n)</td>
		<td>When insertion is to be done - concept of swapping is to be done for rearrangement.</td>
	  </tr>
	  <tr>
		<td>2</td>
		<td>Insertion at the end</td>
		<td align="center">O(1)</td>
		<td>Using index, it can be added to the last.</td>
	  </tr>
	  <tr>
		<td>3</td>
		<td>Deletion at the beginning (or) in the middle</td>
		<td align="center">O(n)</td>
		<td>When deletion is to be done - concept of swapping is to be done for rearrangement.</td>
	  </tr>
	  <tr>
		<td>4</td>
		<td>Deletion at the end</td>
		<td align="center">O(1)</td>
		<td>Using index, it can be removed at the last.</td>
	  </tr>
	  <tr>
		<td>5</td>
		<td>Random Access for View and Update (get and set)</td>
		<td align="center">O(1)</td>
		<td>Using index, it can be found to view and update existing value.</td>
	  </tr>
    </tbody>
  </table>
  </div>
  <div><!--/.list-group-item -->
  <div><!--/.list-group -->
			</li>
		</ol>
	</li>
	<li><b>Memory Usage:</b>
		<ol>
			<li>It uses less memory per element (Compared to <code><b>LinkedList</b></code>).</li>
		</ol>
	</li>
	<li><b>Order:</b>
		<ol>
			<li>It maintains the Order as they were added.</li>
		</ol>
	</li>
	<li><b>Null Values:</b>
		<ol>
			<li>It allows to store Null Values into <code><b>ArrayList</b></code>.</li>
		</ol>
	</li>
	<li><b>Usage:</b>
		<ol>
			<li>We choose <code><b>ArrayList</b></code>, when random access and iteration are frequent.</li>
			<li>When we are using Single Threading.</li>
		</ol>
	</li>
   </ul>
   </div>
   </div>
  