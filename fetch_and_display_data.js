// JavaScript to Fetch and Display Bitcoin Network Data

async function fetchNodeCount() {
  const response = await fetch('https://bitnodes.io/api/v1/snapshots/latest');
  const data = await response.json();
  document.getElementById('nodeCount').innerText = `Total Nodes: ${data.total_nodes}`;
}

async function fetchFeeRate() {
  const response = await fetch('https://mempool.space/api/v1/fees/recommended');
  const data = await response.json();
  document.getElementById('feeRate').innerText = `Suggested Fee Rate: ${data.hourFee} sat/vB`;
}

window.onload = () => {
  fetchNodeCount();
  fetchFeeRate();
};