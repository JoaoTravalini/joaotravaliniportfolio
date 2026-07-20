const PageLoader = ({ label = 'Carregando pagina' }) => (
  <div className="page-loader" role="status" aria-live="polite" aria-label={label}>
    <span className="page-loader-spinner" aria-hidden="true" />
    <span className="sr-only">{label}</span>
  </div>
);

export default PageLoader;
