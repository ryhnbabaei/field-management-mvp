
// localStorage utility functions
function getReports() {
  const reports = localStorage.getItem('reports');
  return reports ? JSON.parse(reports) : [];
}

function saveReport(report) {
  const reports = getReports();
  reports.push(report);
  localStorage.setItem('reports', JSON.stringify(reports));
}

function deleteReport(index) {
  const reports = getReports();
  reports.splice(index, 1);
  localStorage.setItem('reports', JSON.stringify(reports));
}
