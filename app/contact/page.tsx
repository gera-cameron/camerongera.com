export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact Information</h1>
      
      <h2 className="text-xl font-semibold mt-6">Email</h2>
      <p className="mb-4">
        <a href="mailto:gera.cameron@gmail.com" className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200">gera.cameron@gmail.com</a>
      </p>
      
      <h2 className="text-xl font-semibold mt-6">Phone</h2>
      <p className="mb-4">
        <a href="tel:352-514-3487" className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200">352-514-3487</a>
      </p>
      
      <h2 className="text-xl font-semibold mt-6">Address</h2>
      <p className="mb-4">
        Gainesville, FL 32606
      </p>

    </section>
  )
}
