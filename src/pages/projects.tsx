export default function projects() {
  function handleSoftwareClick(e: any) {
    e.preventDefault();
    window.open("/projects/software.pdf", "_blank");
  }
  function handleDataClick(e: any) {
    e.preventDefault();
    window.open("/projects/data-science.pdf", "_blank");
  }
  return (
    <div className="display-flex items-center content-center">
      <h2 className="text-2xl font-bold"> Web Development </h2>
      <button
        id="software"
        onClick={handleSoftwareClick}
        className="bg-cyan-400 text-black font-bold w-60 py-4 rounded-lg mb-8"
      >
        <span>ENTER</span>
      </button>

      <h2 className="text-2xl font-bold"> Data Science </h2>
      <button
        id="data-science"
        onClick={handleDataClick}
        className="bg-cyan-400 text-black font-bold w-60 py-4 rounded-lg"
      >
        <span>ENTER</span>
      </button>
    </div>
  );
}
