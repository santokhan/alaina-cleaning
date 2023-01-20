export default function PLayout({ children, myRef, id }) {
  return (
    <section className="py-8 lg:py-16" ref={myRef} id={id}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
