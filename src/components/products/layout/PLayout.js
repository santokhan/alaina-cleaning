export default function PLayout({ children, myRef, id }) {
  return (
    <section className="py-8 lg:pt-16 lg:pb-8" ref={myRef} id={id}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
