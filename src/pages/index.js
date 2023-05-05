import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='grid gap-x-7 grid-cols-12'>
        <div className='col-start-1 col-end-7'>
          <h1 className='text-5xl'>
            Ray crafts smooth experiences for digital products.
            </h1>
          <p className='text-lg text-slate-500 mt-3'>
            With over 1 year of experience in understanding customer needs, turning that into product ideations and business strategies, telling brand stories to reach the next level.
            </p>
        </div>
      </div>
    </main>
  )
}