export default function ContactMap() {
  return (
    <div className="w-full overflow-hidden">
      <iframe
        src="https://www.google.com/maps?q=New+Delhi&output=embed"
        className="w-full h-[calc(100vh-6rem)] border-0"
        loading="lazy"
      ></iframe>
    </div>
  );
}