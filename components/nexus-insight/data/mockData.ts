export const SALES_DATA = [
    { id: 1, region: 'Chicago', sales: 120000, transfers: 15000, net: 105000, status: 'On Track' },
    { id: 2, region: 'Detroit', sales: 95000, transfers: 5000, net: 90000, status: 'Warning' },
    { id: 3, region: 'Cleveland', sales: 88000, transfers: 2000, net: 86000, status: 'On Track' },
    { id: 4, region: 'Minneapolis', sales: 150000, transfers: 20000, net: 130000, status: 'Exceeding' },
    { id: 5, region: 'Indianapolis', sales: 76000, transfers: 8000, net: 68000, status: 'Lagging' },
];

export const HEADERS = [
    { key: 'region', label: 'Region' },
    { key: 'sales', label: 'Gross Sales ($)' },
    { key: 'transfers', label: 'Intercompany ($)' },
    { key: 'net', label: 'Net Revenue ($)' },
    { key: 'status', label: 'Status' },
];
