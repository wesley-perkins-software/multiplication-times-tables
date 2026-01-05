export function bindUi(state, config) {
  const problem = document.querySelector('[data-problem]');
  if (problem) {
    const tableLabel = config.mode === 'mixed' ? 'Mixed 1–12' : `Table ${config.tableNumber}`;
    problem.textContent = `${tableLabel} — question loads here`;
  }
}
