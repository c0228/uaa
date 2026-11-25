
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Incoterms 2020 Price Calculator</title>

    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">

<div class="container py-4">

    <h1 class="text-center text-primary fs-3 fw-bold mb-4">
        Incoterms® 2020 Real-Time Price Calculator
    </h1>

    <div class="row g-4">

        <!-- LEFT PANEL: INPUTS -->
        <div class="col-lg-5">

            <div class="card shadow-sm">
                <div class="card-body">

                    <!-- 1. Shipment & Weight -->
                    <h5 class="border-bottom pb-2 mb-3">
                        1. Shipment & Weight (kg)
                    </h5>

                    <div class="row g-3">

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Currency Symbol</label>
                            <select id="currency" class="form-select">
                                <option value="₹">INR (₹)</option>
                                <option value="$" selected>USD ($)</option>
                                <option value="€">EUR (€)</option>
                            </select>
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Product Base Value (EXW)</label>
                            <input type="number" id="exw" class="form-control" value="10000" min="0">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Actual Gross Weight (kg)</label>
                            <input type="number" id="actualWeight" class="form-control" value="500" min="0">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Volumetric Divisor</label>
                            <input type="number" id="divisor" class="form-control" value="5000" min="1">
                            <div class="form-text">5000 Air / 6000 Road</div>
                        </div>

                    </div>

                    <!-- Dimensions -->
                    <div class="row g-3 mt-1">

                        <div class="col-4">
                            <label class="form-label small fw-semibold">Length (cm)</label>
                            <input type="number" id="len" class="form-control" value="120" min="0">
                        </div>

                        <div class="col-4">
                            <label class="form-label small fw-semibold">Width (cm)</label>
                            <input type="number" id="wid" class="form-control" value="100" min="0">
                        </div>

                        <div class="col-4">
                            <label class="form-label small fw-semibold">Height (cm)</label>
                            <input type="number" id="hei" class="form-control" value="100" min="0">
                        </div>

                    </div>

                    <!-- 2. Origin Costs -->
                    <h5 class="border-bottom pb-2 mt-4 mb-3">
                        2. Origin Costs (Distance in km)
                    </h5>

                    <div class="row g-3">

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Origin Distance to Port (km)</label>
                            <input type="number" id="origKm" class="form-control" value="150" min="0">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Origin Trucking Rate (per kg/km)</label>
                            <input type="number" id="origRate" class="form-control" value="0.005" step="0.001" min="0">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Export Clearance & Docs</label>
                            <input type="number" id="exportClearance" class="form-control" value="200" min="0">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Origin Port THC & Loading</label>
                            <input type="number" id="originTHC" class="form-control" value="250" min="0">
                        </div>

                    </div>

                    <!-- 3. Main Carriage -->
                    <h5 class="border-bottom pb-2 mt-4 mb-3">
                        3. Main Carriage & Insurance
                    </h5>

                    <div class="row g-3">

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Main Transit Distance (km)</label>
                            <input type="number" id="mainKm" class="form-control" value="4000" min="0">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Main Freight Rate (per kg/km)</label>
                            <input type="number" id="mainRate" class="form-control" value="0.002" step="0.001" min="0">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Insurance Rate (%)</label>
                            <input type="number" id="insRate" class="form-control" value="0.5" step="0.1" min="0">
                        </div>

                    </div>

                    <!-- 4. Destination Costs -->
                    <h5 class="border-bottom pb-2 mt-4 mb-3">
                        4. Destination Costs (Distance in km)
                    </h5>

                    <div class="row g-3">

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Dest. Port THC & Terminal Fees</label>
                            <input type="number" id="destTHC" class="form-control" value="350" min="0">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Import Customs Duty & Taxes</label>
                            <input type="number" id="importDuty" class="form-control" value="1200" min="0">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Destination Distance (km)</label>
                            <input type="number" id="destKm" class="form-control" value="80" min="0">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Dest. Trucking Rate (per kg/km)</label>
                            <input type="number" id="destRate" class="form-control" value="0.008" step="0.001" min="0">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label small fw-semibold">Final Unloading Fee (DPU)</label>
                            <input type="number" id="unloadingFee" class="form-control" value="150" min="0">
                        </div>

                    </div>

                </div>
            </div>

        </div>

        <!-- RIGHT PANEL: LIVE OUTPUTS -->
        <div class="col-lg-7">

            <div class="card shadow-sm">
                <div class="card-body">

                    <h5 class="border-bottom pb-2 mb-3">
                        Calculated Logistics Breakdown
                    </h5>

                    <!-- Summary -->
                    <div class="row g-2 mb-4">

                        <div class="col-md-4">
                            <div class="bg-primary-subtle rounded p-3 h-100">
                                <div class="small text-muted">Volumetric Weight</div>
                                <div class="fw-bold fs-5">
                                    <span id="volWtOut">0</span> kg
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="bg-success-subtle rounded p-3 h-100">
                                <div class="small text-muted">Chargeable Weight</div>
                                <div class="fw-bold fs-5">
                                    <span id="chgWtOut">0</span> kg
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="bg-warning-subtle rounded p-3 h-100">
                                <div class="small text-muted">Total Freight</div>
                                <div class="fw-bold fs-5" id="freightOut">0</div>
                            </div>
                        </div>

                    </div>

                    <!-- Incoterms Table -->
                    <div class="table-responsive">

                        <table class="table table-striped table-hover align-middle">

                            <thead class="table-light">
                                <tr>
                                    <th>Incoterm</th>
                                    <th>Mode</th>
                                    <th>Cost Scope Included</th>
                                    <th class="text-end">Total Price</th>
                                </tr>
                            </thead>

                            <tbody id="resultsBody"></tbody>

                        </table>

                    </div>

                </div>
            </div>

        </div>

    </div>

</div>

<script>

    // Listen for input changes
    const inputs = document.querySelectorAll('input, select');

    inputs.forEach(el => {
        el.addEventListener('input', calculate);
        el.addEventListener('change', calculate);
    });

    // Get numeric input value
    function val(id) {
        return parseFloat(document.getElementById(id).value) || 0;
    }

    // Calculate Incoterms prices
    function calculate() {

        const cur = document.getElementById('currency').value;

        const exw = val('exw');
        const actualWt = val('actualWeight');
        const divisor = Math.max(val('divisor'), 1);

        // Weight calculations
        const volWt = (val('len') * val('wid') * val('hei')) / divisor;
        const chgWt = Math.max(actualWt, volWt);

        // Distance and weight-based costs
        const originTrucking = chgWt * val('origKm') * val('origRate');
        const mainFreight = chgWt * val('mainKm') * val('mainRate');
        const destTrucking = chgWt * val('destKm') * val('destRate');

        // Additional costs
        const exportClearance = val('exportClearance');
        const originTHC = val('originTHC');
        const destTHC = val('destTHC');
        const importDuty = val('importDuty');
        const unloadingFee = val('unloadingFee');
        const insRate = val('insRate') / 100;

        // Incoterms calculations
        const fca = exw + originTrucking + exportClearance;
        const fas = exw + originTrucking + exportClearance;
        const fob = fas + originTHC;
        const cfr = fob + mainFreight;
        const cif = cfr * (1 + (1.1 * insRate));

        const cpt = fca + originTHC + mainFreight;
        const cip = cpt * (1 + (1.1 * insRate));

        const dap = cpt + destTHC + destTrucking;
        const dpu = dap + unloadingFee;
        const ddp = dap + importDuty;

        // Update summary
        document.getElementById('volWtOut').textContent = volWt.toFixed(2);
        document.getElementById('chgWtOut').textContent = chgWt.toFixed(2);

        document.getElementById('freightOut').textContent =
            cur + (originTrucking + mainFreight + destTrucking).toFixed(2);

        // Incoterms results
        const terms = [

            {
                code: 'EXW',
                name: 'Ex Works',
                mode: 'Any',
                desc: 'Goods packed at seller premises',
                price: exw
            },

            {
                code: 'FCA',
                name: 'Free Carrier',
                mode: 'Any',
                desc: 'EXW + Origin transit + Export clearance',
                price: fca
            },

            {
                code: 'FAS',
                name: 'Free Alongside Ship',
                mode: 'Sea',
                desc: 'Goods alongside vessel at origin port',
                price: fas
            },

            {
                code: 'FOB',
                name: 'Free On Board',
                mode: 'Sea',
                desc: 'FAS + Origin THC / Vessel loading',
                price: fob
            },

            {
                code: 'CFR',
                name: 'Cost and Freight',
                mode: 'Sea',
                desc: 'FOB + Main sea freight',
                price: cfr
            },

            {
                code: 'CIF',
                name: 'Cost, Insurance & Freight',
                mode: 'Sea',
                desc: 'CFR + Marine insurance (110%)',
                price: cif
            },

            {
                code: 'CPT',
                name: 'Carriage Paid To',
                mode: 'Any',
                desc: 'FCA + Origin THC + Main carriage',
                price: cpt
            },

            {
                code: 'CIP',
                name: 'Carriage & Insurance Paid',
                mode: 'Any',
                desc: 'CPT + All-risk cargo insurance (110%)',
                price: cip
            },

            {
                code: 'DAP',
                name: 'Delivered at Place',
                mode: 'Any',
                desc: 'CPT + Dest. terminal + Dest. transit',
                price: dap
            },

            {
                code: 'DPU',
                name: 'Delivered at Place Unloaded',
                mode: 'Any',
                desc: 'DAP + Unloading at final site',
                price: dpu
            },

            {
                code: 'DDP',
                name: 'Delivered Duty Paid',
                mode: 'Any',
                desc: 'DAP + Import customs duty & taxes',
                price: ddp
            }

        ];

        // Render results
        const tbody = document.getElementById('resultsBody');

        tbody.innerHTML = terms.map(t => `

            <tr>

                <td>
                    <strong>${t.code}</strong>
                    <div class="small text-muted">${t.name}</div>
                </td>

                <td>
                    <span class="badge ${t.mode === 'Sea' ? 'text-bg-primary' : 'text-bg-secondary'}">
                        ${t.mode}
                    </span>
                </td>

                <td class="small">
                    ${t.desc}
                </td>

                <td class="text-end fw-bold text-primary text-nowrap">
                    ${cur}${t.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </td>

            </tr>

        `).join('');

    }

    // Initial calculation on page load
    calculate();

</script>

</body>
</html>
